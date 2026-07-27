import { readFile, glob } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

/* Внутри этих тегов текст не для чтения — в сверке он не участвует */
const SKIP = new Set(['script', 'style', 'code', 'pre', 'textarea', 'noscript', 'title']);

function collectText(node, out) {
  if (node.nodeName === '#text') {
    out.push(node.value);
    return;
  }
  if (SKIP.has(node.nodeName)) return;
  for (const child of node.childNodes ?? []) collectText(child, out);
}

/*
  Саму типографику ставит src/middleware.js — он работает и в dev, и при
  пререндере. Здесь только страховка: ключ перевода в en.ts обязан совпадать
  с отрендеренным русским текстом, иначе английский молча откатывается на
  русский. Раньше это ловилось только глазами, теперь роняет сборку.
*/
export default function typographIntegration() {
  return {
    name: 'typograph',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        /* Сверяем по тексту узлов, а не по разметке: parse5 сериализует
           неразрывный пробел как &nbsp;, и поиск по сырому HTML давал бы
           ложные расхождения */
        const chunks = [];
        for await (const entry of glob('**/*.html', { cwd: root })) {
          collectText(parse(await readFile(`${root}${entry}`, 'utf8')), chunks);
        }
        const text = chunks.join('\n');

        const source = await readFile(new URL('../src/i18n/en.ts', import.meta.url), 'utf8');
        const keys = [...source.matchAll(/^ {2}'((?:[^'\\]|\\.)*)':/gm)].map((m) => m[1].replace(/\\'/g, "'"));

        const missing = keys.filter((key) => !text.includes(key));
        if (missing.length) {
          throw new Error(
            `en.ts разошёлся с разметкой — ${missing.length} ключей не найдено на страницах:\n` +
              missing.map((k) => `  ${k}`).join('\n') +
              '\nЕсли менялся русский текст, запустите: npm run typograph:i18n'
          );
        }

        const typographed = text.includes('\u00A0');
        if (!typographed) throw new Error('типографика не применилась — проверьте src/middleware.js');

        logger.info(`словарь сверен с разметкой: ${keys.length} ключей на месте`);
      },
    },
  };
}
