$( document ).ready(function() {

  $(document.body).animate({opacity: 1}, 300);

  AOS.init();

  $(window).scroll(function() {
    if($(document).scrollTop() > 0) {
      $('.footer').css('position', 'static')
    } else {
      $('.footer').css('position', 'fixed')
    }
  });
  

});