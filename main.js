function on() {
  document.getElementById('overlay').style.display = 'block';
}
function off() {
  document.getElementById('overlay').style.display = 'none';
}
document.querySelector('#menu').addEventListener('click', () => on());
document.querySelector('.close-icon').addEventListener('click', () => off());
document.querySelectorAll('.text-a').forEach((item) => {
  item.addEventListener('click', () => off());
});