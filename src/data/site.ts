import { execSync } from 'node:child_process';

const RU_MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];
const EN_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getLastUpdatedDate(): Date {
  try {
    const iso = execSync('git log -1 --format=%cI').toString().trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

const lastUpdated = getLastUpdatedDate();

export const SITE = {
  title: 'Антон Усанов — продуктовый дизайнер',
  description: 'Продуктовый дизайнер с опытом работы над продуктами в сферах AI, девелопмента, логистики, web3',
  // Дата берётся из последнего git-коммита при каждой сборке, вручную менять не нужно
  updatedAt: `Обновлено ${lastUpdated.getDate()} ${RU_MONTHS[lastUpdated.getMonth()]} ${lastUpdated.getFullYear()}`,
  updatedAtEn: `Updated ${EN_MONTHS[lastUpdated.getMonth()]} ${lastUpdated.getDate()}, ${lastUpdated.getFullYear()}`,
};
