/*
  Появление блоков, привязанное к скроллу (как «Projects» на humanmade).
  Позиция карточки — функция её места в вьюпорте, а не разовый триггер:
  доскроллил наполовину — карточка на полпути. Скролл вверх симметрично уводит
  её обратно в угол.

  Прогресс p ∈ [0..1]: 0 — карточка смещена в угол и прозрачна (её верх у нижнего
  края экрана), 1 — на месте (верх поднялся на половину высоты экрана). Между —
  линейно. Считаем per-frame через rAF, обновляемся на scroll/resize. С Lenis
  нативный scroll всё равно летит каждый кадр, так что скролл и анимация синхронны.

  CSS-перехода на элементах нет намеренно: величину задаёт JS каждый кадр, а
  transition бы «смазывал» и отставал. reduced-motion — класс не ставится
  (см. инлайн в Shell.astro), блоки просто видны.

  animation-timeline: view() не берём — его нет в Safari/iOS, а именно там это и
  смотрят с телефона.
*/
function initReveal() {
  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('reveal');

  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    // Дистанция скролла, за которую карточка доезжает от угла до места
    const dist = vh * 0.5;
    const mobile = window.matchMedia('(max-width: 575.98px)').matches;
    const ox = mobile ? 24 : 40;
    const oy = mobile ? 40 : 64;

    for (const el of els) {
      const top = el.getBoundingClientRect().top;
      let p = (vh - top) / dist;
      p = p < 0 ? 0 : p > 1 ? 1 : p;
      el.style.opacity = String(p);
      el.style.transform = `translate(${((1 - p) * ox).toFixed(1)}px, ${((1 - p) * oy).toFixed(1)}px)`;
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

initReveal();
document.addEventListener('astro:page-load', initReveal);
