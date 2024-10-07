document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel-images ul');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;

  function nextItem() {
    if (currentIndex < totalItems - 1) currentIndex++;
    else currentIndex = 0;

    updateCarousel();
  }

  function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
  }

  setInterval(nextItem, 7000);
});
