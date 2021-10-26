var position = 0;
window.addEventListener('scroll', function () {
  const top = document.body.getBoundingClientRect().top;
  if (top > position) window.dispatchEvent(new CustomEvent('scroll-top'))
  else window.dispatchEvent(new CustomEvent('scroll-down'));
  position = top;
});