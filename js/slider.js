const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    //   loop: true,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,

      }
    }
  })