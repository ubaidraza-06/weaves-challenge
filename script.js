// Toast
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// Mobile nav
function toggleNav() {
  const nav = document.querySelector('nav');
  const btn = document.querySelector('.nav-toggle');
  if (!nav || !btn) return;
  const open = nav.classList.toggle('is-open');
  document.body.classList.toggle('nav-open', open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
function closeNav() {
  const nav = document.querySelector('nav');
  const btn = document.querySelector('.nav-toggle');
  if (!nav || !nav.classList.contains('is-open')) return;
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  }
}

// Finder Quiz
let currentStep = 0;
function nextStep(n) {
  document.getElementById('step' + currentStep).style.display = 'none';
  if (n <= 2) {
    document.getElementById('step' + n).style.display = 'block';
    document.getElementById('dot' + currentStep).classList.remove('active');
    document.getElementById('dot' + currentStep).classList.add('done');
    document.getElementById('dot' + n).classList.add('active');
    currentStep = n;
  }
}
function selectOpt(el, step) {
  document.querySelectorAll('#' + step + ' .finder-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}
function showResults() {
  setTimeout(() => {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('dot2').classList.remove('active');
    document.getElementById('dot2').classList.add('done');
    document.getElementById('finderResults').classList.add('visible');
    showToast('✦ Matched! Showing your personalised results.');
  }, 400);
}
function resetFinder() {
  document.getElementById('finderResults').classList.remove('visible');
  for (let i = 0; i <= 2; i++) {
    const stepEl = document.getElementById('step' + i);
    if (stepEl) stepEl.style.display = i === 0 ? 'block' : 'none';
    const dot = document.getElementById('dot' + i);
    if (dot) {
      dot.classList.remove('active', 'done');
      if (i === 0) dot.classList.add('active');
    }
  }
  currentStep = 0;
  document.querySelectorAll('.finder-opt').forEach(o => o.classList.remove('selected'));
}

// Magnifier (mouse + touch)
function positionMagnifier(clientX, clientY) {
  const canvas = document.getElementById('explorerCanvas');
  const mag = document.getElementById('magnifier');
  if (!canvas || !mag) return;
  const rect = canvas.getBoundingClientRect();
  let x = clientX - rect.left;
  let y = clientY - rect.top;
  x = Math.max(0, Math.min(x, rect.width));
  y = Math.max(0, Math.min(y, rect.height));
  mag.style.left = x + 'px';
  mag.style.top = y + 'px';
}
function moveMagnifier(e) {
  positionMagnifier(e.clientX, e.clientY);
}
function showMagnifier() { document.getElementById('magnifier').style.display = 'block'; }
function hideMagnifier() { document.getElementById('magnifier').style.display = 'none'; }

let currentSwatchColor = '#A07B50';
function setExplorerSwatch(btn, color) {
  document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentSwatchColor = color;
  const base = document.getElementById('explorerBase');
  const cells = base.querySelectorAll('.weave-cell');
  cells.forEach((cell, i) => {
    const alpha = i % 3 === 0 ? 0.5 : i % 2 === 0 ? 0.35 : 0.25;
    cell.style.background = hexToRgba(color, alpha);
  });
  const inner = document.getElementById('magnifierInner');
  inner.style.background = `repeating-linear-gradient(0deg, ${hexToRgba(color, 0.9)} 0px, ${hexToRgba(color, 0.7)} 4px, ${hexToRgba(color, 0.9)} 4px, ${hexToRgba(color, 0.85)} 8px), repeating-linear-gradient(90deg, transparent 0px, transparent 2px, ${hexToRgba('#000', 0.15)} 2px, ${hexToRgba('#000', 0.15)} 4px)`;
}
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// Product tabs
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('panel-active'));
  if (btn) btn.classList.add('tab-active');
  document.getElementById('tab-' + name).classList.add('panel-active');
}

// Product color/size
function activeSwatch(el) {
  document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}
function activeSizeBtn(el) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active-size'));
  el.classList.add('active-size');
}

// Quantity
let qty = 1;
function changeQty(d) {
  qty = Math.max(1, qty + d);
  document.getElementById('qtyNum').textContent = qty;
}

// Thumbnails
function setThumb(el, c1, c2) {
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active-thumb'));
  el.classList.add('active-thumb');
  const img = document.getElementById('mainProductImg');
  const cells = img.querySelectorAll('.product-weave-line');
  cells.forEach((cell, i) => {
    const alpha = i % 3 === 0 ? 0.5 : i % 2 === 0 ? 0.35 : 0.25;
    cell.style.background = i % 2 === 0 ? hexToRgba(c1, alpha) : hexToRgba(c2, alpha * 0.8);
  });
}

// Pay
function selectPay(el) {
  document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected-pay'));
  el.classList.add('selected-pay');
}

// Tags
function toggleTag(el) {
  document.querySelectorAll('.occasion-tag').forEach(t => t.classList.remove('tag-active'));
  el.classList.add('tag-active');
  const filter = el.getAttribute('data-occasion') || 'all';
  document.querySelectorAll('.order-item').forEach(item => {
    if (filter === 'all') {
      item.style.display = '';
    } else {
      item.style.display = item.getAttribute('data-occasion') === filter ? '' : 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const firstSwatch = document.querySelector('.swatch-btn.active');
  if (firstSwatch) {
    const hex = firstSwatch.getAttribute('data-hex') || '#A07B50';
    setExplorerSwatch(firstSwatch, hex);
  }

  const primaryNav = document.getElementById('primary-nav');
  if (primaryNav) {
    primaryNav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }
  const navLogo = document.querySelector('a.nav-logo');
  if (navLogo) navLogo.addEventListener('click', closeNav);

  const canvas = document.getElementById('explorerCanvas');
  if (canvas) {
    canvas.addEventListener('touchstart', function (e) {
      if (e.touches.length) {
        showMagnifier();
        positionMagnifier(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
    canvas.addEventListener('touchmove', function (e) {
      if (e.touches.length) {
        positionMagnifier(e.touches[0].clientX, e.touches[0].clientY);
        e.preventDefault();
      }
    }, { passive: false });
    canvas.addEventListener('touchend', hideMagnifier, { passive: true });
    canvas.addEventListener('touchcancel', hideMagnifier, { passive: true });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeNav();
  });
});
