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
  
  $('.read-more').on('click', function() {    
    let elem = $(this).parent().find('.read-more').text();
    if (elem == 'читать ещё') {
      $(this).parent().find('.read-more').text('скрыть');
      $(this).parent().find('.hidden-text').slideDown();
    } else {
      $(this).parent().find('.read-more').text('читать ещё');
      $(this).parent().find('.hidden-text').slideUp();
    }
  });

  $(".slider.clients").slick({
    autoplay: true,
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a class="dot">' + (i+1) + '</a>';
            },
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{ 
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        } 
    }]
});

$(".slider.portfolio").slick({
  // autoplay: true,
  dots: true,
  customPaging : function(slider, i) {
  var thumb = $(slider.$slides[i]).data();
  return '<a class="dot">' + (i+1) + '</a>';
          },
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [{ 
      breakpoint: 1600,
      settings: {
          slidesToShow: 3,
      } 
  }]
});

});