/*
  Изображения в ImageBlock/PlaygroundImages/CaseHero растянуты на всю
  колонку контента и отдаются в 3x под ретину (см. CLAUDE.md), поэтому один
  и тот же файл в 2880–3600px качается и на мобильном, и на десктопе —
  мобильный трафик получает ширину, которая ему физически не нужна.

  Лесенка долей колонки контента (1200px на десктопе) под три раскладки
  из tokens.css: мобильная (<576px, колонка до ~541px), планшет
  (576–1199.98px, колонка до 974px), десктоп (960–1200px). Значения из
  `sizes` в компонентах должны совпадать с этой геометрией.
*/
const FRACTIONS = [0.3, 0.45, 0.65, 0.82, 1];

export function responsiveWidths(nativeWidth: number, cap: number): number[] {
  const max = Math.min(cap, nativeWidth);
  const widths = FRACTIONS.map((f) => Math.round(max * f));
  return Array.from(new Set(widths)).filter((w) => w > 0 && w <= max);
}

export const CONTENT_SIZES =
  '(max-width: 575.98px) calc(100vw - 34px), (max-width: 1199.98px) 82vw, min(calc(100vw - 240px), 1200px)';
