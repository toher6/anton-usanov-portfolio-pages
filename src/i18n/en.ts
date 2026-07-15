// RU → EN dictionary. Keyed by the exact (trimmed) Russian source text
// rendered in markup, so any data-i18n / data-i18n-scope element can be
// looked up without maintaining separate translation keys.
export const EN: Record<string, string> = {
  // Common / shared
  'для': 'for',
  'Смотреть кейс': 'View case',
  'На главную': 'Back to home',
  'Обновлено 15 июля 2026': 'Updated July 15, 2026',
  'Страница не найдена': 'Page not found',
  'Похоже, такой страницы не существует или она была перемещена': "Looks like this page doesn't exist or has been moved",

  // Hero / bio
  'Открыт к предложениям': 'Open to offers',
  'Антон Усанов': 'Anton Usanov',
  'Продуктовый дизайнер с опытом работы над продуктами в сферах AI, девелопмента, логистики, web3':
    'Product designer with experience across AI, real estate, logistics, and web3 products',

  // Section titles
  'Опыт работы': 'Experience',
  'Продуктовые кейсы': 'Product cases',
  'Исследовательские кейсы': 'Research cases',
  'Образование': 'Education',

  // Experience
  'Продуктовый дизайнер': 'Product Designer',
  'Крупнейший банк РФ': "Russia's largest bank",
  'Проектировал и развивал b2b и внутренние сервисы на основе искусственного интеллекта. От продуктовой аналитики, формирования гипотез и исследований до прототипирования и реализации в продакшн':
    'Designed and developed b2b and internal AI-powered services — from product analytics, hypotheses and research to prototyping and shipping to production',
  'UX/UI дизайнер': 'UX/UI Designer',
  'Web3 iGaming платформа': 'Web3 iGaming platform',
  'Проектировал интерфейсы и развивал дизайн-систему web3-платформы для крипто-ставок на спорт и киберспорт. Вырос от junior до middle: начал с маркетинговых визуалов, перешёл к продуктовым задачам и ключевым экранам платформы':
    'Designed interfaces and grew the design system of a web3 platform for crypto sports and esports betting. Grew from junior to middle: started with marketing visuals, moved on to product tasks and key platform screens',

  // Education
  'Продуктовый подход для дизайнеров': 'Product approach for designers',
  'Дизайнер интерфейсов': 'Interface Designer',
  'Инновационные технологии в сфере государственного управления': 'Innovative technologies in public administration',

  // Product cases (homepage cards)
  'Спроектировал разделы публикации датасетов и моделей': 'Designed dataset and model publishing sections',
  'За месяц спроектировал каталоги моделей и датасетов — инструменты публикации для внутренних и внешних Data Science и ML-специалистов. Провёл конкурентный анализ сервисов и интервью со специалистами, чтобы понять критерии поиска и приоритеты в фильтрации':
    'Designed model and dataset catalogs in a month — publishing tools for internal and external Data Science and ML specialists. Ran a competitive analysis and interviews with specialists to understand search criteria and filtering priorities',
  'С нуля спроектировал конструктор клиентского интерфейса': 'Designed a client interface builder from scratch',
  'За 2 месяца спроектировал гибкий конструктор клиентского интерфейса. Провёл 2 раунда юзабилити-тестирования и совместно с аналитиками продумал логику настройки готовых блоков под задачи публикуемых в каталоге продуктов':
    'Designed a flexible client interface builder in 2 months. Ran 2 rounds of usability testing and worked with analysts to design the configuration logic for pre-built blocks',

  // Research cases (homepage cards)
  'Провел юзабилити-тестирование': 'Ran a usability test',
  'Инициировал тестирование прототипа с 6 сотрудниками блока «Строительство», подтвердил 2 из 3 гипотез и приоритизировал 12 найденных проблем. Скорректированные макеты получили положительную реакцию и от заказчика, и от пользователей на согласовании':
    'Initiated prototype testing with 6 employees of the Construction division, confirmed 2 of 3 hypotheses, and prioritized 12 issues found. The revised designs got a positive response from both the client and users during review',
  'Провел серию интервью': 'Ran a series of interviews',
  'Провёл исследование для сервиса для внутренних разработчиков ИИ-агентов. Подготовил гайд и провёл 8 глубинных интервью с командами, которые проходят процесс вывода ИИ-агента в продакшн. Подтвердил 3 из 4 гипотез и сформировал рекомендации на основе инсайтов':
    'Ran research for a service for internal AI agent developers. Prepared a discussion guide and ran 8 in-depth interviews with teams shipping AI agents to production. Confirmed 3 of 4 hypotheses and formed recommendations based on the insights',

  // Case: client-interface-builder — hero + first sections
  'Роль': 'Role',
  'Платформа': 'Platform',
  'Год': 'Year',
  'Desktop': 'Desktop',
  'Спроектировал раздел с нуля': 'Designed the section from scratch',
  'Раунда юзабилити-тестирования': 'Rounds of usability testing',
  'Экранов отрисовано': 'Screens designed',
  'О проекте': 'About the project',
  'Платформа AI — маркетплейс ИИ-решений для бизнеса': 'Platform AI — a marketplace of AI solutions for business',
  'В каталоге партнеры Сбера публиковали свои продукты, каждый из которых нуждался в клиентском интерфейсе — экраном, с которым пользователь взаимодействует после покупки':
    "Sber's partners published their products in the catalog, and each one needed a client interface — a screen the user interacts with after purchase",
  '5 шаблонов клиентского интерфейса': '5 client interface templates',
  'Скриншоты аналогов': 'Screenshots of competitors',

  // Shared across multiple case pages
  'Контекст': 'Context',
  'Задача': 'Task',
  'Процесс': 'Process',
  'Инсайты': 'Insights',
  'Результат': 'Result',
  'Контекст и задача': 'Context and task',
  'Тип исследования': 'Research type',
  'Формат': 'Format',
  'Респонденты': 'Respondents',
  'Количество': 'Count',
  'Очное модерируемое': 'In-person, moderated',
  'Ключевые инсайты': 'Key insights',
  'Бизнес-цели и ключевые результаты': 'Business goals and key results',
  'Цель исследования': 'Research goal',
  'Предполагаемый результат': 'Expected outcome',
  'Проверяемые гипотезы': 'Hypotheses to test',
  '5 человек': '5 people',
  'Отрисованные макеты': 'Final mockups',
  'Старый вариант': 'Old version',
  'Новый вариант': 'New version',

  // Case: client-interface-builder — remaining sections
  'Создание клиентского интерфейса — один из этапов публикации продукта':
    'Building a client interface is one of the steps in publishing a product',
  'Набор из пяти готовых сценариев с фиксированной логикой не покрывал разнообразие продуктов, которые публиковались на Платформе':
    'A set of five ready-made scenarios with fixed logic did not cover the variety of products published on the Platform',
  'Спроектировать гибкий, интуитивный инструмент для владельцев ИИ-продуктов':
    'Design a flexible, intuitive tool for AI product owners',
  'Кастомная разработка интерфейсов под каждый продукт требовала огромных ресурсов, а загрузка чужого кода на платформу создавала риски безопасности. С командой аналитики пришли к выводу, что решение — конструктор с готовыми блоками':
    "Custom interface development for every product required huge resources, and uploading third-party code to the platform created security risks. Together with analysts, we concluded the solution was a builder with ready-made blocks",
  'Скетч аналитиков на старте': "Analysts' initial sketch",
  'Дискавери': 'Discovery',
  'Изучил смежные решения, так как прямых аналогов не было': 'Studied adjacent solutions, since there were no direct competitors',
  'Я проанализировал интерфейсы конструкторов бизнес-процессов и сценариев, low-code платформы с визуальной сборкой, конструкторы чат-ботов':
    'I analyzed interfaces of business-process and scenario builders, low-code platforms with visual assembly, and chatbot builders',
  'Параллельно мы с аналитиками и владельцем продукта брейнштормили сценарии использования конструктора, пользовательский путь, варианты отображения этапов создания ИИ-приложения и нейминг блоков конструктора':
    "In parallel, the analysts, the product owner and I brainstormed the builder's usage scenarios, the user journey, ways to display AI application creation stages, and naming for the builder's blocks",
  'Первый прототип': 'First prototype',
  'Провел юзабилити-тестирование с 5 владельцами продуктов': 'Ran usability testing with 5 product owners',
  'Юзабилити-тестирование': 'Usability testing',
  'Владельцы продуктов на Платформе': 'Product owners on the Platform',
  'Шаблоны-заготовки для статусной модели не дают пользователям понимания механик и принципов дальнейшего взаимодействия':
    'Preset templates for the status model give users no understanding of the mechanics or principles of further interaction',
  'У пользователей есть потребность видеть созданные статусы покупки не совершая дополнительных действий':
    'Users need to see the purchase statuses they created without taking extra actions',
  'Непонятна категоризация, названия и назначение блоков, из которых строится клиентский интерфейс':
    'The categorization, names, and purpose of the blocks that make up the client interface are unclear',
  'Новая итерация и финальное дизайн-решение': 'New iteration and final design solution',
  'На основе фидбэка и референсов собрал новый прототип и провел 2 раунд тестирования. Критических проблем не выявил':
    'Based on feedback and references, I built a new prototype and ran a 2nd round of testing. No critical issues were found',
  'Комментарии касались в основном текстов, которые доработал во время сборки финальных макетов':
    'Comments were mostly about copy, which I refined while assembling the final mockups',
  'Предварительный опрос, на основе которого формируются статусы публикуемого продукта':
    "A preliminary survey used to generate the published product's statuses",
  'Главный экран конструктора со статусной сеткой и карточками с наполнением статусов':
    'The builder\'s main screen with the status grid and status-content cards',
  'Каталог блоков и примеры их настройки': 'Block catalog and configuration examples',
  'Режим предпросмотра настроенного интерфейса': 'Preview mode for the configured interface',
  'Спроектировал и протестировал гибкий инструмент для создания клиентских интерфейсов на базе Платформы AI':
    'Designed and tested a flexible tool for building client interfaces on Platform AI',
  'Конструктор рассчитан на потребности продуктов, которые публиковались в каталоге. Будучи единственным дизайнером на проекте, провёл весь цикл самостоятельно за 2 месяца — от исследования аналогов до финальных макетов':
    'The builder is designed around the needs of products published in the catalog. As the only designer on the project, I ran the entire cycle myself in 2 months — from competitor research to final mockups',

  // Case: datasets-catalog — remaining sections
  '*прогнозируемые показатели': '*projected figures',
  'Каталоги моделей и датасетов на Платформе AI — инструмент публикации для внутренних и внешних ML-специалистов':
    'Model and dataset catalogs on Platform AI — a publishing tool for internal and external ML specialists',
  'Нужен был инструмент, который позволит специалистам находить нужные данные и модели по релевантным критериям, а владельцам — публиковать их с гибкими настройками доступа (публично или ограниченному кругу) и с заделом под будущую монетизацию':
    'We needed a tool that would let specialists find the data and models they need by relevant criteria, and let owners publish them with flexible access settings (public or restricted) with room for future monetization',
  'Конкурентный анализ': 'Competitive analysis',
  'На рынке уже существовали похожие решения, поэтому начал с анализа аналогов': 'Similar solutions already existed on the market, so I started with a competitive analysis',
  'Разобрал концепции, особенности способы монетизации и UI-паттерны Hugging Face, Kaggle, OpenML, data.world, Amazon Data Marketplace, Google Dataset Search':
    'Broke down the concepts, monetization approaches and UI patterns of Hugging Face, Kaggle, OpenML, data.world, Amazon Data Marketplace, and Google Dataset Search',
  'Интервью': 'Interviews',
  'Провёл 5 интервью с ML и DS-специалистами, чтобы понять, как они на самом деле ищут модели и датасеты':
    'Ran 5 interviews with ML and DS specialists to understand how they actually search for models and datasets',
  'Экспресс-интервью': 'Rapid interviews',
  'Онлайн-встречи на 30 минут': '30-minute online calls',
  'Data Science специалисты Сбера': "Sber's Data Science specialists",
  'Пользователи ищут датасеты и модели как через поисковик, так и на специализированных сервисах':
    'Users search for datasets and models both through search engines and on specialized services',
  'При поиске датасетов обращают внимание на количество файлов и количество строк в нем. Самые часто-используемые фильтры: тип данных, решаемая задача, наличие разметки':
    'When searching for datasets, users pay attention to file count and row count. The most commonly used filters are data type, task, and presence of labeling',
  'При поиске моделей обращают внимание на тип решаемой задачи, могут отфильтровать по фреймворку':
    'When searching for models, users pay attention to the task type and may filter by framework',
  'Финальное дизайн-решение': 'Final design solution',
  'На основе инсайтов из интервью и конкурентного анализа спроектировал ключевые разделы':
    'Designed the key sections based on insights from the interviews and competitive analysis',
  'Отрисовал каталоги моделей и датасетов с фильтрами, страницы моделей и датасетов с описаниями, разделы для публикации на Платформе. UI построен на компонентах дизайн-системы "Малахит"':
    'Designed model and dataset catalogs with filters, model and dataset detail pages with descriptions, and publishing sections on the Platform. The UI is built on the "Malachite" design system components',
  'Каталоги датасетов и моделей с карточками и фильтрацией': 'Dataset and model catalogs with cards and filtering',
  'Страницы датасета и модели': 'Dataset and model pages',

  // Case: aigw-interview
  'AI Gateway — веб-приложение, которое помогает внутренним разработчикам ИИ-агентов отслеживать статус вывода ИИ-агента':
    'AI Gateway is a web app that helps internal AI agent developers track the status of shipping an AI agent',
  'Нужно было понять, с какими проблемами команды сталкиваются при выкатке решений в продакшн, насколько понятна существующая документация, и стоит ли перерабатывать её в формат интерфейса личного кабинета':
    'We needed to understand what problems teams run into when shipping to production, how clear the existing documentation is, and whether it was worth reworking it into a dashboard interface',
  'Определить ключевые потребности пользователей и их текущие боли при прохождении процесса выкатки ИИ-агента':
    "Identify users' key needs and current pain points when going through the AI agent shipping process",
  'Результат должен был помочь команде принять решение — дорабатывать документацию или проектировать MVP интерфейса взамен существующей инструкции':
    'The outcome was meant to help the team decide — improve the documentation or design an MVP interface to replace the existing guide',
  'Целиком подготовил гайд исследования': 'Prepared the entire research guide myself',
  'Описал предполагаемый результат, решения, которые команда сможет принять на основе выводов, вопросы исследования, гипотезы для проверки, требования к респондентам и список вопросов для интервью. Согласовал гайд с командой и получил контакты подходящих респондентов':
    "Described the expected outcome, decisions the team could make based on the findings, research questions, hypotheses to test, respondent requirements, and the interview question list. Aligned the guide with the team and got contacts for suitable respondents",
  'Сократить время выкатки ИИ-агента до 1,5 месяцев': 'Cut AI agent shipping time to 1.5 months',
  'Снизить количество обращений к команде поддержки': 'Reduce the number of support team requests',
  'Определить ключевые потребности пользователей и их текущие боли при выкатке ИИ-агентов в продакшн':
    "Identify users' key needs and current pain points when shipping AI agents to production",
  'Фидбек поможет команде погрузиться в процессы пользователей, лучше понять их предметную область, а также принять взвешенное решение о доработке документации или разработке MVP интерфейса взамен текущей инструкции.':
    "Feedback will help the team get closer to users' workflows, better understand their domain, and make an informed decision on improving the documentation or building an MVP interface instead of the current guide.",
  'Разработчики не понимают структуру и требования, описанные в текущей документации':
    'Developers do not understand the structure and requirements described in the current documentation',
  'Разработчики чаще прибегают к помощи коллег, чем к документации, при возникновении трудностей':
    'When facing difficulties, developers turn to colleagues more often than to the documentation',
  'Разработчики не понимают, на каком этапе находится их агент (отправлен, проверен, принят и т.д.)':
    'Developers do not understand what stage their agent is at (submitted, reviewed, accepted, etc.)',
  'Отсутствие единого интерфейса усложняет контроль прогресса агента и делает процесс выкатки фрагментированным':
    "The lack of a single interface makes it harder to track the agent's progress and fragments the shipping process",
  'Глубинные интервью': 'In-depth interviews',
  'Онлайн-встречи на 60 минут': '60-minute online calls',
  'Те, кто проходил процесс выкатки решения': 'Those who have gone through the shipping process',
  'Те, кто будет проходить процесс выкатки решения и знаком с документацией':
    'Those who will go through the shipping process and are familiar with the documentation',
  '8 человек': '8 people',
  'Все респонденты сходились в одном: документация не проводит по процессу пошагово':
    'All respondents agreed on one thing: the documentation does not guide them through the process step by step',
  'Самый частый вопрос новых команд — «с чего начать?». Один из участников описал первое знакомство с инструкцией коротко: реакция была «непонятно», даже после прочтения quick start. Другой отметил, что вместо таблицы шагов хотел бы видеть понятный воркфлоу, по которому можно просто идти':
    'The most common question from new teams is "where do I start?" One participant described their first encounter with the guide simply: the reaction was "confusing," even after reading the quick start. Another noted that instead of a table of steps, they would rather see a clear workflow to just follow',
  'Респонденты почти единогласно говорили, что в сложных случаях идут не в документацию, а к коллегам — и что статус своего агента чаще всего отслеживают вручную, через переписку или личные договорённости, а не через какой-либо системный источник правды':
    'Respondents almost unanimously said that in difficult cases they turn to colleagues rather than the documentation — and that they mostly track their agent\'s status manually, through chats or personal arrangements, rather than any single source of truth',
  'По итогам исследования сформулировал рекомендации по каждой проблемной зоне':
    'Based on the research, formulated recommendations for every problem area',
  'Провёл 8 интервью с продукт-оунерами и аналитиками, которые ведут процесс выкатки ИИ-агентов, и подтвердил 3 из 4 гипотез. Собрал набор конкретных рекомендаций по документации, интерфейсу и процессу и презентовал результаты команде.':
    'Ran 8 interviews with product owners and analysts who run the AI agent shipping process, and confirmed 3 of 4 hypotheses. Put together a set of concrete recommendations on documentation, interface, and process, and presented the results to the team.',

  // Case: price-audit-usability
  'Аудит цен — сервис, который помогает проверять закупочные цены на соответствие рынку':
    'Price Audit is a service that helps verify purchase prices against the market',
  'Он разрабатывался почти год, и за это время требования к интерфейсу и сценарии использования несколько раз менялись. Команда постоянно была на связи с заказчиком, но обратная связь от конечных пользователей оставалась негативной. Нужно было понять, закрывает ли новая версия сервиса реальные потребности пользователей в сценарии аудита спецификации, и что мешает работать с интерфейсом самостоятельно':
    'It had been in development for almost a year, and the interface requirements and usage scenarios changed several times along the way. The team stayed in constant touch with the client, but feedback from end users remained negative. We needed to find out whether the new version of the service actually met users\' needs in the specification audit scenario, and what stopped them from using the interface on their own',
  'Я инициировал проведение юзабилити-тестирования': 'I initiated usability testing',
  'Определил методологию, сформулировал 3 гипотезы, подготовил интерактивный прототип и гайд исследования':
    'Defined the methodology, formulated 3 hypotheses, and prepared an interactive prototype and research guide',
  'Сократить время и расходы на поиск проверенных поставщиков необходимых товаров и услуг':
    'Reduce the time and cost of finding vetted suppliers for needed goods and services',
  'Определить в достаточной ли мере новая версия сервиса закрывает потребности пользователя в сценарии оценки спецификаций':
    "Determine whether the new version of the service sufficiently meets users' needs in the specification review scenario",
  'Какие боли есть при прихождении сценария': 'What pain points come up while going through the scenario',
  'Определить какие недостатки есть в прототипе и что можно в нем улучшить':
    'Identify the shortcomings of the prototype and what can be improved',
  'Обратная связь поможет команде принять взвешенное решение о доработке текущего функционала и устранении недочетов для улучшения пользовательского опыта':
    'The feedback will help the team make an informed decision on refining current functionality and fixing issues to improve the user experience',
  'Пользователям сложно понять логику интерфейса без дополнительной инструкции':
    'Users find it hard to understand the interface logic without an extra set of instructions',
  'Пользователям сложно интерпретировать результаты аудита спецификаций':
    'Users find it hard to interpret specification audit results',
  'Пользователям недостаточно данных для принятия решений в рамках сценария аудита спецификации':
    "Users don't have enough data to make decisions within the specification audit scenario",
  'Юзабили-тестирование с элементами интервью': 'Usability testing with interview elements',
  'Сотрудники блока "Строительство", которые:': 'Employees of the Construction division who:',
  'участвуют в процессе оценки спецификаций': 'take part in the specification review process',
  'принимают участие в определении стоимости закупки': 'are involved in determining purchase cost',
  '6 человек': '6 people',
  '2 из 3 гипотез подтвердились': '2 of 3 hypotheses confirmed',
  'По итогам тестирования узнал различные инсайты, выявил и приоритизировал 12 проблем разной критичности — 5 из них в высоком приоритете':
    'The testing surfaced various insights; I identified and prioritized 12 issues of varying severity — 5 of them high priority',
  'Доработка': 'Refinement',
  'Согласовал список доработок с командой и заказчиком, скорректировал макеты':
    'Aligned the list of refinements with the team and the client, and adjusted the mockups',
  'Сделал ошибки заметнее, переписал формулировки результатов, дал более чёткие подсказки по интерфейсу':
    'Made errors more noticeable, rewrote result copy, and gave clearer interface hints',
  'Состояние ошибки распознавания в блоке заполнения запроса — до и после юзабилити-тестирования':
    'The recognition-error state in the request form — before and after usability testing',
  'Блок результатов аудита спецификации — до и после юзабилити-тестирования':
    'The specification audit results block — before and after usability testing',
  'Провёл 6 модерируемых сессий, подтвердил 2 из 3 гипотез, приоритизировал 12 проблем':
    'Ran 6 moderated sessions, confirmed 2 of 3 hypotheses, and prioritized 12 issues',
  'При демонстрации результатов на созвоне с заказчиком и стейкхолдерами прозвучала прямая положительная оценка проделанной работы, а сотрудники блока «Строительство» позитивно отреагировали на изменения при финальном согласовании':
    'When presenting the results on a call with the client and stakeholders, the work received direct positive feedback, and employees of the Construction division responded positively to the changes during final sign-off',
};
