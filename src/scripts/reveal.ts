/*
  Появление блоков, привязанное к скроллу (как «Projects» на humanmade).

  Позиция карточки — функция её места в вьюпорте. Но не жёстко 1:1: значение
  плавно ДОГОНЯЕТ цель (демпфирование). У humanmade это GSAP ScrollTrigger со
  `scrub: 1` — анимация тянется к скролл-цели со сглаживанием ~секунда; сам
  скролл там ещё сглажен Lenis. Без этого догоняния кривая ощущается механически
  линейной. Здесь: цель — линейный прогресс от позиции, current лерпит к target
  каждый кадр с постоянной времени TAU (это и есть «кривая»).

  Только сдвиг, без прозрачности. reduced-motion — класс не ставится
  (см. инлайн в Shell.astro), блоки просто видны. animation-timeline: view() не
  берём — его нет в Safari/iOS, а именно там это смотрят с телефона.
*/

// Позиции верха карточки (× высоту экрана), между которыми идёт анимация.
// START — где начинается (p=0): 1.2 = карточка на 20% экрана НИЖЕ края, т.е.
// трогается ещё до появления. END — где доезжает (p=1): 0.5 = верх на середине.
// Хочешь начинать ещё раньше — увеличивай START.
const START = 1.2;
const END = 0.5;
// Постоянная времени догоняния, сек. Больше — тягучее (ближе к scrub: 1), меньше — резче/быстрее
const TAU = 0.22;
// Насколько раньше (в тех же долях vh, что и START/END) ставить will-change,
// чем реально трогается transform. Первая постановка will-change не бесплатна:
// браузер растрирует карточку (крупная обложка) в отдельную GPU-текстуру, и
// без запаса это происходит на том же кадре, что и первое видимое движение —
// сам этот кадр и ощущался как маленький фриз ровно в момент старта анимации.
// Запас даёт время растеризоваться, пока карточка ещё ниже экрана.
const PROMOTE_LEAD = 0.35;

function initReveal() {
  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('reveal');

  const current = new Array<number>(els.length).fill(NaN);
  // will-change ставим точечно, только пока элемент реально едет: статикой на
  // весь сеанс (было раньше в global.css) все 8 карточек держали отдельный
  // GPU-слой постоянно, даже давно остановившись — композитинг пересобирал
  // 8 тяжёлых слоёв (крупные обложки) каждый кадр скролла без причины
  // (профиль показал Composite 37ms из 66ms кадра). Как только элемент
  // доехал — снимаем, чтобы браузер мог схлопнуть его слой обратно.
  const promoted = new Array<boolean>(els.length).fill(false);
  let raf = 0;
  let last = 0;

  // raw — сырой, не клампованный прогресс: нужен, чтобы поймать момент
  // «карточка ещё не начала ехать (target=0), но уже близко» (см. PROMOTE_LEAD)
  const readProgress = (el: HTMLElement, vh: number) => {
    const top = el.getBoundingClientRect().top;
    const raw = (START * vh - top) / ((START - END) * vh);
    const target = raw < 0 ? 0 : raw > 1 ? 1 : raw;
    return { raw, target };
  };

  const mobileMql = window.matchMedia('(max-width: 575.98px)');

  const frame = (now: number) => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const k = 1 - Math.exp(-dt / TAU);

    const vh = window.innerHeight;
    const mobile = mobileMql.matches;
    const ox = mobile ? 24 : 40;
    const oy = mobile ? 40 : 64;

    // Две раздельные фазы, иначе layout thrashing: если читать
    // getBoundingClientRect и тут же писать transform в одном проходе, каждая
    // следующая карточка форсирует синхронный reflow (запись инвалидировала
    // раскладку). Это N принудительных пересчётов на кадр — и ровно в момент
    // появления карточек/хедера ощущалось как фриз. Сначала читаем все
    // позиции (один flush), потом применяем все трансформы.
    const progress = els.map((el) => readProgress(el, vh));

    let active = false;
    els.forEach((el, i) => {
      const { raw, target } = progress[i];
      let cur = current[i];
      if (Number.isNaN(cur)) cur = target; // первый кадр — без прыжка
      cur += (target - cur) * k;
      let elActive: boolean;
      if (Math.abs(target - cur) < 0.0005) {
        cur = target;
        elActive = false;
      } else {
        elActive = true;
        active = true;
      }
      current[i] = cur;
      // Промоутим не только пока реально едет (elActive), но и чуть раньше —
      // пока target ещё держится в 0, но карточка уже близко (raw > -PROMOTE_LEAD).
      // Условие target === 0 не даёт этой «форе» остаться true навсегда после
      // того, как карточка укатилась вверх за экран — там target уже не 0
      const shouldPromote = elActive || (target === 0 && raw > -PROMOTE_LEAD);
      if (shouldPromote !== promoted[i]) {
        el.style.willChange = shouldPromote ? 'transform' : 'auto';
        promoted[i] = shouldPromote;
      }
      const t = 1 - cur;
      el.style.transform = `translate(${(t * ox).toFixed(2)}px, ${(t * oy).toFixed(2)}px)`;
    });

    // Крутим цикл, пока значения не улеглись; дальше ждём следующего скролла
    raf = active ? requestAnimationFrame(frame) : 0;
  };

  const kick = () => {
    if (!raf) {
      last = 0;
      raf = requestAnimationFrame(frame);
    }
  };

  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', kick);
  // Первый кадр ставит значения по текущему скроллу без анимации
  frame(performance.now());
}

initReveal();
document.addEventListener('astro:page-load', initReveal);
