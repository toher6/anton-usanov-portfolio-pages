/*
  Точки фона в hero подсвечиваются под курсором: второй, ярче закрашенный слой
  точечной сетки (.spotlight-dots) поверх базового в Bio.astro, вырезанный
  маской с небольшим (r=150) радиальным градиентом (gradientUnits="userSpaceOnUse")
  — его центр (cx/cy) движется к позиции курсора каждый кадр через setAttribute
  (без CSS-transition на позицию — тот же принцип, что в Lightbox: интерактив
  рендерится напрямую, transition только на дискретных состояниях).

  Базовый слой точек (hero-dot-fade — общее затухание к краям) этот скрипт не
  трогает вовсе: состояние покоя — просто исходная неизменная разметка,
  выверенная по Figma, его не может увести никакая правка JS.

  Демпфирование — та же lerp/TAU-схема, что в reveal.ts, но резче (TAU 0.12) —
  локальный отклик под курсором, а не сдвиг через весь экран. Видимость слоя
  (opacity, 200ms ease) переключается классом is-active по
  pointerenter/pointerleave на .hero.

  Только мышь: hover:hover + pointer:fine — на тач у курсора нет физического
  аналога, эффект не подключаем вовсе (см. context-motion.md). Выключается и
  при prefers-reduced-motion: reduce.
*/

export {};

const TAU = 0.12;

function initHeroDotsSpotlight() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const hero = document.querySelector<HTMLElement>('.hero');
  const svg = hero?.querySelector<SVGSVGElement>('.dots') ?? null;
  const gradient = document.getElementById('hero-spotlight') as SVGRadialGradientElement | null;
  const spotRect = hero?.querySelector<SVGRectElement>('.spotlight-dots') ?? null;
  if (!hero || !svg || !gradient || !spotRect) return;

  let targetX = 0;
  let targetY = 0;
  let curX = 0;
  let curY = 0;
  let raf = 0;
  let last = 0;
  let tracking = false;

  const frame = (now: number) => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const k = 1 - Math.exp(-dt / TAU);
    curX += (targetX - curX) * k;
    curY += (targetY - curY) * k;
    gradient.setAttribute('cx', curX.toFixed(1));
    gradient.setAttribute('cy', curY.toFixed(1));

    const settled = Math.abs(targetX - curX) < 0.5 && Math.abs(targetY - curY) < 0.5;
    raf = settled ? 0 : requestAnimationFrame(frame);
  };

  const kick = () => {
    if (!raf) {
      last = 0;
      raf = requestAnimationFrame(frame);
    }
  };

  const onMove = (e: PointerEvent) => {
    const rect = svg.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    if (!tracking) {
      tracking = true;
      curX = targetX;
      curY = targetY;
      spotRect.classList.add('is-active');
    }
    kick();
  };

  const onLeave = () => {
    tracking = false;
    spotRect.classList.remove('is-active');
  };

  hero.addEventListener('pointermove', onMove);
  hero.addEventListener('pointerleave', onLeave);
}

initHeroDotsSpotlight();
document.addEventListener('astro:page-load', initHeroDotsSpotlight);
