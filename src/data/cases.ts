import sberLogo from '../assets/images/logos/sber-logo.svg';
import datasetsCatalogCover from '../assets/images/covers/datasets-catalog.png';
import clientInterfaceBuilderCover from '../assets/images/covers/client-interface-builder.png';
import priceAuditCover from '../assets/images/covers/price-audit-usability.png';
import aigwInterviewCover from '../assets/images/covers/aigw-interview.png';

export const PRODUCT_CASES = [
  {
    tags: ['#b2c', '#ai', '#ux-research'],
    title: 'Спроектировал разделы публикации датасетов и моделей',
    companyLogo: sberLogo,
    companyName: 'Платформы AI',
    description:
      'За месяц спроектировал каталоги моделей и датасетов — инструменты публикации для внутренних и внешних Data Science и ML-специалистов. Провёл конкурентный анализ сервисов и интервью со специалистами, чтобы понять критерии поиска и приоритеты в фильтрации',
    href: '/datasets-and-models-catalogs/',
    image: datasetsCatalogCover,
  },
  {
    tags: ['#b2b', '#ai', '#ux-research'],
    title: 'С нуля спроектировал конструктор клиентского интерфейса',
    companyLogo: sberLogo,
    companyName: 'Платформы AI',
    description:
      'За 2 месяца спроектировал гибкий конструктор клиентского интерфейса. Провёл 2 раунда юзабилити-тестирования и совместно с аналитиками продумал логику настройки готовых блоков под задачи публикуемых в каталоге продуктов',
    href: '/client-interface-builder/',
    image: clientInterfaceBuilderCover,
  },
];

export const RESEARCH_CASES = [
  {
    title: 'Провел юзабилити-тестирование',
    companyLogo: sberLogo,
    companyName: 'Аудита цен',
    description:
      'Инициировал тестирование прототипа с 6 сотрудниками блока «Строительство», подтвердил 2 из 3 гипотез и приоритизировал 12 найденных проблем. Скорректированные макеты получили положительную реакцию и от заказчика, и от пользователей на согласовании',
    href: '/price-audit-usability/',
    image: priceAuditCover,
  },
  {
    title: 'Провел серию интервью',
    companyLogo: sberLogo,
    companyName: 'AI Gateway',
    description:
      'Провёл исследование для сервиса для внутренних разработчиков ИИ-агентов. Подготовил гайд и провёл 8 глубинных интервью с командами, которые проходят процесс вывода ИИ-агента в продакшн. Подтвердил 3 из 4 гипотез и сформировал рекомендации на основе инсайтов',
    href: '/aigw-interview/',
    image: aigwInterviewCover,
  },
];
