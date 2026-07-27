import { readFile, writeFile } from 'node:fs/promises';
import { typograph } from './typograph.mjs';

/*
  Прогоняет словарь переводов через тот же типограф, что и HTML сборки.
  Ключи — русским набором правил, чтобы совпасть с отрендеренной страницей,
  значения — английским. Запускать после любой правки текстов:
  npm run typograph:i18n
*/
const path = new URL('../src/i18n/en.ts', import.meta.url);
const source = await readFile(path, 'utf8');

const escape = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const unescape = (s) => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');

let keys = 0;
let values = 0;

/* Ключ: строка в кавычках в начале строки, до двоеточия */
let out = source.replace(/^( {2})'((?:[^'\\]|\\.)*)':/gm, (all, indent, raw) => {
  const next = typograph(unescape(raw), 'ru');
  if (next !== unescape(raw)) keys++;
  return `${indent}'${escape(next)}':`;
});

/* Значение: строка в кавычках после двоеточия, возможно с переносом строки */
out = out.replace(/(:\s*)'((?:[^'\\]|\\.)*)'(,?\s*$)/gm, (all, lead, raw, tail) => {
  const next = typograph(unescape(raw), 'en');
  if (next !== unescape(raw)) values++;
  return `${lead}'${escape(next)}'${tail}`;
});

await writeFile(path, out, 'utf8');
console.log(`типографика словаря: ключей поправлено ${keys}, значений ${values}`);
