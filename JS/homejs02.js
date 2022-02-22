(function ($) {
    'use strict';
    // -----------------------------
    //  Count Up
    // -----------------------------
    function counter() {
      if ($('.counter').length !== 0) {
        var oTop = $('.counter').offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $('.counter').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          });
        });
      }
    }
    // -----------------------------
    //  On Scroll
    // -----------------------------
    $(window).scroll(function () {
      counter();
    });
  
  })(jQuery);
  