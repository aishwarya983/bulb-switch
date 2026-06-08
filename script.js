const scene = document.getElementById('scene');
const btn = document.getElementById('switchBtn');
const label = document.getElementById('statusLabel');

btn.addEventListener('click', () => {
  scene.classList.toggle('on');
  label.textContent = scene.classList.contains('on') ? 'ON' : 'OFF';
});