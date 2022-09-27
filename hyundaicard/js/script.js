//menu
$('.tablet-appBtn-wrap').on('click', function(){
    $('.tablet-menu').css('left','-100%');
    $('.tablet-appBtn-wrap .appbarCloseBt').css('left',0);
});
$('.menu_icon').on('click', function(){
    $('.tablet-menu').css('left',0);
    $('.header .menu_icon').css('left','100%');
});

//main banner
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//app-store
  var swiper2 = new Swiper(".mySwiper2", {
  
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },

  });
  $('.swiper-slide').on('mouseover', function(){
    swiper.autoplay.stop();
  });
  $('.swiper-slide').on('mouseout', function(){
    swiper.autoplay.start();
  });

  //EVENT
  var swiper = new Swiper(".Event_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination3",
      type: "fraction",
    }
  });

  