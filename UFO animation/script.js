var pathEls = document.querySelectorAll('path');

anime({
  targets: 'pathEl',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});
