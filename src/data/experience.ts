export interface ExperienceEntry {
  period: string;
  role: string;
  companyLogo: 'sber' | 'dexsport';
  companyName: string;
  org: string;
  description: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '2023 - 2026',
    role: 'Продуктовый дизайнер',
    companyLogo: 'sber',
    companyName: 'Сбер',
    org: 'Крупнейший банк РФ',
    description:
      'Проектировал и развивал b2b и внутренние сервисы на основе искусственного интеллекта. От продуктовой аналитики, формирования гипотез и исследований до прототипирования и реализации в продакшн',
  },
  {
    period: '2021 - 2023',
    role: 'UX/UI дизайнер',
    companyLogo: 'dexsport',
    companyName: 'Dexsport.io',
    org: 'Web3 iGaming платформа',
    description:
      'Проектировал интерфейсы и развивал дизайн-систему web3-платформы для крипто-ставок на спорт и киберспорт. Вырос от junior до middle: начал с маркетинговых визуалов, перешёл к продуктовым задачам и ключевым экранам платформы',
  },
];
