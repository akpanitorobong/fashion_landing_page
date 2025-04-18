$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      autoplaySpeed: 500,
      autoplayTimeout: 1000,
    },
    500: {
      items: 2,
      autoplaySpeed: 1000,
      autoplayTimeout: 1500,
    },
    600: {
      items: 3,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
    },
    800: {
      items: 4,
      autoplaySpeed: 2000,
      autoplayTimeout: 2000,
    },
    1200: {
      items: 5,
      autoplaySpeed: 2000,
      autoplayTimeout: 3000,
    },
  },
});
