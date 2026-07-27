import Typograf from 'typograf';

/*
  Одна настройка типографа на весь проект: и на HTML сборки, и на словарь
  переводов. Правила должны совпадать буква в букву — ключом перевода служит
  отрендеренный текст элемента, поэтому расхождение в одном неразрывном
  пробеле роняет весь EN обратно на русский.
*/
const instances = new Map();

export function typografFor(locale) {
  if (!instances.has(locale)) {
    instances.set(locale, new Typograf({ locale: locale === 'en' ? ['en-US'] : ['ru', 'en-US'] }));
  }
  return instances.get(locale);
}

/* Пробелы по краям узла несут смысл при инлайновой вёрстке, а типограф их
   съедает — поэтому обрабатываем только середину */
export function typograph(text, locale = 'ru') {
  if (!text.trim()) return text;
  const [, lead, core, tail] = /^(\s*)([\s\S]*?)(\s*)$/.exec(text);
  return lead + typografFor(locale).execute(core) + tail;
}
