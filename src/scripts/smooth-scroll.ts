import Lenis from 'lenis';

/*
  Инерционный скролл всей страницы. Lenis двигает реальный scrollTop, а не
  transform, поэтому sticky-хедер, IntersectionObserver (появление хедера на
  главной) и обычные scroll-события продолжают работать как раньше.

  Не трогаем:
  - prefers-reduced-motion — при нём инерцию не включаем вовсе;
  - тач — на телефоне нативная инерция уже хорошая, Lenis по умолчанию её не
    перехватывает (syncTouch: false);
  - горизонтальные галереи и лайтбокс помечены data-lenis-prevent, там колесо
    остаётся нативным.
*/
let instance: Lenis | null = null;

function initSmoothScroll() {
  if (instance) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new Lenis({
    duration: 1.1,
    // Плавное затухание к концу прокрутки, без «резинки» в начале
    easing: (t) => 1 - Math.pow(1 - t, 4),
  });
  instance = lenis;

  let rafId = requestAnimationFrame(function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  });

  // Лайтбокс блокирует прокрутку страницы, пока открыт (см. Lightbox.astro)
  document.addEventListener('lightbox:open', () => lenis.stop());
  document.addEventListener('lightbox:close', () => lenis.start());

  // На случай, если позже включат view transitions — не плодим raf-циклы
  document.addEventListener(
    'astro:before-swap',
    () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      instance = null;
    },
    { once: true }
  );
}

initSmoothScroll();
document.addEventListener('astro:page-load', initSmoothScroll);
