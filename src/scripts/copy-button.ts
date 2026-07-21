const FEEDBACK_MS = 3000;
const timers = new WeakMap<HTMLElement, number>();

function feedbackText(): string {
  return document.documentElement.dataset.lang === 'en' ? 'Copied' : 'Скопировано';
}

async function handleCopyClick(button: HTMLElement) {
  const value = button.dataset.copy;
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
  } catch {
    return;
  }

  const label = button.querySelector<HTMLElement>('.text-button');
  if (!label) return;

  const existingTimer = timers.get(button);
  if (existingTimer) window.clearTimeout(existingTimer);
  if (!button.dataset.originalLabel) {
    button.dataset.originalLabel = label.textContent ?? '';
  }

  label.textContent = feedbackText();

  const timer = window.setTimeout(() => {
    label.textContent = button.dataset.originalLabel ?? '';
    delete button.dataset.originalLabel;
    timers.delete(button);
  }, FEEDBACK_MS);
  timers.set(button, timer);
}

if (!(window as any).__copyButtonWired) {
  (window as any).__copyButtonWired = true;
  document.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLElement>('[data-copy]');
    if (button) handleCopyClick(button);
  });
}
