/*
  Появление блоков при скролле (как «Projects» на humanmade): элемент стартует
  смещённым вправо-вниз и прозрачным, при входе в вьюпорт выезжает на место.

  Анимация играет только при движении вниз. Сброс в скрытое состояние делаем,
  лишь когда блок ушёл за НИЖНИЙ край, — тогда при следующем скролле вниз он
  выедет снова. Уход за верхний край оставляем показанным: при скролле вверх к
  началу страницы блоки не должны выезжать заново.

  Начальное скрытое состояние висит на `html.reveal` (см. global.css), а класс
  ставит этот скрипт. Если скрипта нет, reduced-motion или нет
  IntersectionObserver — класс не появляется, и блоки просто видны без анимации,
  без риска остаться скрытыми.
*/
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('reveal');

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
        } else if (entry.boundingClientRect.top > 0) {
          // Ушёл вниз за нижний край — сбрасываем для повтора при скролле вниз.
          // Уход вверх (top < 0) не трогаем, чтобы при скролле вверх не переигрывать.
          el.classList.remove('is-revealed');
        }
      }
    },
    { threshold: 0 }
  );

  els.forEach((el) => io.observe(el));
}

initReveal();
document.addEventListener('astro:page-load', initReveal);
