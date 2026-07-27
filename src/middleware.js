import { parse, serialize } from 'parse5';
import { typograph } from '../scripts/typograph.mjs';

/* Внутри этих тегов текст не для чтения — трогать нельзя */
const SKIP = new Set(['script', 'style', 'code', 'pre', 'textarea', 'noscript', 'title']);

function walk(node, onText) {
  if (node.nodeName === '#text') {
    onText(node);
    return;
  }
  if (SKIP.has(node.nodeName)) return;
  for (const child of node.childNodes ?? []) walk(child, onText);
}

/*
  Типографика ставится здесь, а не в шаблонах: правила лежат в одном месте,
  в клиент не уезжает ни байта библиотеки, и dev с продакшн-сборкой дают
  одинаковый текст. Последнее принципиально — ключом перевода служит
  отрендеренный русский текст, и расхождение в одном неразрывном пробеле
  роняет весь английский обратно на русский.
*/
export async function onRequest(context, next) {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;

  const doc = parse(await response.text());
  walk(doc, (node) => {
    node.value = typograph(node.value, 'ru');
  });

  return new Response(serialize(doc), {
    status: response.status,
    headers: response.headers,
  });
}
