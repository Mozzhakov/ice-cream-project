const swiper = new Swiper('.swiper-gallery', {
  effect: 'fade',
  centeredSlides: true,
  loop: true,
  loopedSlides: 3,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  }
});
