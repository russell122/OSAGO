"use strict";

jQuery(document).ready(function ($) {
  var swiper = new Swiper('.top__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    } // autoplay: {
    // 	delay: 5000,
    // },

  });
});
window.addEventListener('DOMContentLoaded', function () {});