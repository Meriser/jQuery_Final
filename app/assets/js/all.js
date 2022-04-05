$(document).ready(function () {
  // 下拉式選單
  $('.dropdown').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
    $(this).parent().siblings().find('.dropdown-list').slideUp();
    $(this).parent().siblings().find('.dropdown').removeClass('active');
  });

  // Swiper 輪播器
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    speed: 1500,
    loop: true,

    autoplay: {
      delay: 2500,
    },
    effect: "coverflow",

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Lightbox 燈箱
  lightbox.option({
    resizeDuration: 500,
    wrapAround: true,
  });

  // Scroll to top 效果
  $(".scroll-top a").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  // 到一定高度顯示 Scroll to top 按鈕
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scroll-top a').fadeIn();
    } else {
      $('.scroll-top a').fadeOut();
    }
  });
});