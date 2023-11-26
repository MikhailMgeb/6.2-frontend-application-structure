const buttonCount = document.querySelector('.button-count');
let count = 0;

buttonCount.addEventListener('click', () => {
  count += 1;
  buttonCount.textContent = count;
});
