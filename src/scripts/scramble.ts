import { EN } from '../i18n/en';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
const FRAME_MS = 16;

class TextScramble {
  private el: HTMLElement;
  private queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  private frame = 0;
  private timer = 0;
  private resolve: () => void = () => {};

  constructor(el: HTMLElement) {
    this.el = el;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.textContent ?? '';
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => {
      this.resolve = resolve;
    });
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] ?? '';
      const to = newText[i] ?? '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }
    clearTimeout(this.timer);
    this.frame = 0;
    this.update();
    return promise;
  }

  private update = () => {
    let output = '';
    let complete = 0;
    for (const item of this.queue) {
      if (this.frame >= item.end) {
        complete++;
        output += item.to;
      } else if (this.frame >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        output += item.char;
      } else {
        output += item.from;
      }
    }
    this.el.textContent = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frame++;
      this.timer = window.setTimeout(this.update, FRAME_MS);
    }
  };
}

const scramblers = new WeakMap<HTMLElement, TextScramble>();
const originals = new WeakMap<HTMLElement, string>();

function leafTargets(el: HTMLElement): HTMLElement[] {
  const childEls = Array.from(el.children) as HTMLElement[];
  if (childEls.length === 0) return [el];
  return childEls.flatMap(leafTargets);
}

function topLevelTargets(): HTMLElement[] {
  const all = Array.from(document.querySelectorAll<HTMLElement>('[data-i18n], [data-i18n-scope]'));
  const outer = all.filter((el) => !all.some((other) => other !== el && other.contains(el)));
  return outer.flatMap(leafTargets);
}

function applyLang(lang: 'ru' | 'en') {
  for (const el of topLevelTargets()) {
    if (!originals.has(el)) {
      originals.set(el, el.textContent ?? '');
    }
    const ru = originals.get(el) ?? '';
    const target = lang === 'ru' ? ru : (el.dataset.i18nEn ?? EN[ru.trim()] ?? ru);
    let scrambler = scramblers.get(el);
    if (!scrambler) {
      scrambler = new TextScramble(el);
      scramblers.set(el, scrambler);
    }
    scrambler.setText(target);
  }
}

if (!(window as any).__scrambleWired) {
  (window as any).__scrambleWired = true;

  document.addEventListener('langchange', (event) => {
    const lang = (event as CustomEvent<{ lang: 'ru' | 'en' }>).detail.lang;
    applyLang(lang);
  });

  const initialLang = document.documentElement.dataset.lang;
  if (initialLang === 'en') {
    applyLang('en');
  }
}
