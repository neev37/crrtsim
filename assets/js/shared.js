/* NephSim — shared helpers */

// Live range slider fill (sets --pct CSS variable for webkit gradient)
function bindRangeFill(input) {
  const update = () => {
    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || 100;
    const val = parseFloat(input.value);
    const pct = ((val - min) / (max - min)) * 100;
    input.style.setProperty('--pct', pct + '%');
  };
  input.addEventListener('input', update);
  update();
}

// Auto-bind any range slider on the page
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type="range"]').forEach(bindRangeFill);
});

// Number formatting helpers
const fmt = {
  int: (n) => Number.isFinite(n) ? Math.round(n).toString() : '—',
  one: (n) => Number.isFinite(n) ? n.toFixed(1) : '—',
  two: (n) => Number.isFinite(n) ? n.toFixed(2) : '—',
  pct: (n) => Number.isFinite(n) ? n.toFixed(1) + '%' : '—',
};

// Segmented control
function bindSegmented(container, onChange) {
  const btns = container.querySelectorAll('button');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    onChange(b.dataset.value);
  }));
}

// Color a result number based on thresholds
function colorize(el, value, { good, warn }) {
  el.classList.remove('is-good', 'is-warn', 'is-bad');
  if (!Number.isFinite(value)) return;
  if (value <= good) el.classList.add('is-good');
  else if (value <= warn) el.classList.add('is-warn');
  else el.classList.add('is-bad');
}

window.NephSim = { bindRangeFill, fmt, bindSegmented, colorize };
