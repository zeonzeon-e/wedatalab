new Swiper('.swiper', {
    autoplay: {
      delay: 5000
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })

new Swiper('.SolutionSwiper',  {
  autoplay: {
    delay: 5000
  },
  effect : 'coverflow',
  loop: true,
  speed : 600,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.Solution-button-prev',
    nextEl: '.Solution-button-next'
  }
})

new Swiper('.clientsSwiper',  {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }

  // autoplay: {
  //   delay: 5000
  // },
  // spaceBetween: 10,
  // loop: true,
  // slidesPerView: 1,
  // centeredSlides: true,
})