$( document ).ready(function() {

  $("body").css("opacity", "1");

  AOS.init();

  $('.lazy').Lazy({
    effect: "fadeIn",
    effectTime: 500,
  });

  $(window).scroll(function() {
    if($(document).scrollTop() > 0) {
      $('.footer').css('position', 'static')
    } else {
      $('.footer').css('position', 'fixed')
    }
  });
  
  $('.cube-link').on('click', function(e) {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

});