const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // mouse wheel scrolling
  mousewheel: {
    sensitivity: 1
  },
  
  autoHeight: true,
  
});
