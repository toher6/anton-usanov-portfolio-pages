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

// Доля высоты экрана, за которую карточка доезжает от угла до места
const RANGE = 0.5;
// Постоянная времени догоняния, сек. Больше — тягучее (ближе к scrub: 1), меньше — резче
const TAU = 0.32;

function initReveal() {
  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('reveal');

  const current = new Array<number>(els.length).fill(NaN);
  let raf = 0;
  let last = 0;

  const targetOf = (el: HTMLElement, vh: number) => {
    const top = el.getBoundingClientRect().top;
    const p = (vh - top) / (vh * RANGE);
    return p < 0 ? 0 : p > 1 ? 1 : p;
  };

  const frame = (now: number) => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const k = 1 - Math.exp(-dt / TAU);

    const vh = window.innerHeight;
    const mobile = window.matchMedia('(max-width: 575.98px)').matches;
    const ox = mobile ? 24 : 40;
    const oy = mobile ? 40 : 64;

    let active = false;
    els.forEach((el, i) => {
      const target = targetOf(el, vh);
      let cur = current[i];
      if (Number.isNaN(cur)) cur = target; // первый кадр — без прыжка
      cur += (target - cur) * k;
      if (Math.abs(target - cur) < 0.0005) cur = target;
      else active = true;
      current[i] = cur;
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
