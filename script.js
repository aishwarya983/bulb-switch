const scene = document.getElementById('scene');
const button = document.getElementById('switchBtn');
const label = document.getElementById('statusLabel');

button.addEventListener('click', () => {
  scene.classList.toggle('on');
  label.textContent = scene.classList.contains('on') ? 'ON' : 'OFF';
});