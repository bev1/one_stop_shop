$( document ).ready(function() {
  $(document).ready(function () {
    $("form").on("submit", function(event) {
      event.preventDefault();
      let action = $(this).attr("action")
      let formData = $(this).serialize()
      $(".response-message").hide('slow')
      $.post(action, formData, (responseContent) => {
        $(".response-message").show('slow')
        $(".response-message").html('Thanks for your reply');
        $("#contactSubmit").attr('disabled', 'disabled')
      }).fail(function (){
        $(".response-message").show('slow')
        $(".response-message").html('Sorry smth went wrong :( Try later !');
      })
    });
  });


  let scrollBtn = document.createElement("div")
  scrollBtn.style.display = 'none'
  scrollBtn.classList.add("scrollToTopButton")
  scrollBtn.addEventListener("click", function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })
  document.body.appendChild(scrollBtn)

  setTimeout(() => {
    $("body").css("opacity", "1");    
  }, 1000);

  AOS.init();

  $('.lazy').Lazy({
    effect: "fadeIn",
    effectTime: 500,
  });

  $(window).scroll(function() {
    if($(document).scrollTop() > 0) {
      $('.footer').css('position', 'static')
      $('.scrollToTopButton').show()
    } else {
      $('.footer').css('position', 'fixed')
      $('.scrollToTopButton').hide()
    }
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      $('.scrollToTopButton').addClass('jump')
    } else {
      $('.scrollToTopButton').removeClass('jump')
    }
  });
  
  $('.cube-link').on('click', function(e) {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  $('.langs .current').on('click', function(e) {
    if($('.langs').hasClass('active')) {
      $('.langs').removeClass('active');
      $('.langs .list').fadeOut();
    } else {
      $('.langs').addClass('active');
      $('.langs .list').fadeIn();
    }
  });

  $(document).mouseup(function(e) 
  {
      const container = $('.langs .current');
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
        $('.langs').removeClass('active');
        $('.langs .list').fadeOut();
      }
  });
  
  $('.read-more').on('click', function() {    
    let elem = $(this).parent().find('.read-more').text();
    if (elem == 'читать ещё') {
      $(this).parent().find('.read-more').text('скрыть');
      $(this).parent().find('.hidden-text').slideDown();
    } else if(elem == 'скрыть') {
      $(this).parent().find('.read-more').text('читать ещё');
      $(this).parent().find('.hidden-text').slideUp();
    }
    if (elem == 'Read more') {
      $(this).parent().find('.read-more').text('Hide');
      $(this).parent().find('.hidden-text').slideDown();
    } else if(elem == 'Hide') {
      $(this).parent().find('.read-more').text('Read more');
      $(this).parent().find('.hidden-text').slideUp();
    }
    if (elem == 'اقرأ أكثر') {
      $(this).parent().find('.read-more').text('إخفاء');
      $(this).parent().find('.hidden-text').slideDown();
    } else if(elem == 'إخفاء') {
      $(this).parent().find('.read-more').text('اقرأ أكثر');
      $(this).parent().find('.hidden-text').slideUp();
    }
  });

  if($('.slider').length) {
    $(".slider.clients.ltr").slick({
      autoplay: true,
      dots: true,
      customPaging : function(slider, i) {
      const thumb = $(slider.$slides[i]).data();
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
  $(".slider.clients.rtl").slick({
    autoplay: true,
    dots: true,
    customPaging : function(slider, i) {
    const thumb = $(slider.$slides[i]).data();
    return '<a class="dot">' + (i+1) + '</a>';
            },
    infinite: true,
    rtl: true,
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
  
  $(".slider.portfolio.ltr").slick({
    autoplay: true,
    dots: true,
    customPaging : function(slider, i) {
    const thumb = $(slider.$slides[i]).data();
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
    },
    { 
      breakpoint: 800,
      settings: {
          slidesToShow: 2,
      } 
    },
    { 
      breakpoint: 420,
      settings: {
          slidesToShow: 1,
      } 
    }]
  });
  
  $(".slider.portfolio.rtl").slick({
    autoplay: true,
    dots: true,
    customPaging : function(slider, i) {
    const thumb = $(slider.$slides[i]).data();
    return '<a class="dot">' + (i+1) + '</a>';
            },
    infinite: true,
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{ 
        breakpoint: 1600,
        settings: {
            slidesToShow: 3,
        } 
    },
    { 
      breakpoint: 800,
      settings: {
          slidesToShow: 2,
      } 
    },
    { 
      breakpoint: 420,
      settings: {
          slidesToShow: 1,
      } 
    }]
  });
  }

  $.fn.isInViewport = function() {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop-100 && elementTop < viewportBottom-100;
  };
  // TODO: refactor this code
  if($('.line.marketing').length) {
    $(window).on('resize scroll load', function() {
      if($('.line.marketing').isInViewport()) {
        $('.line.marketing').addClass('visible');
      } else {
        $('.line.marketing').removeClass('visible');
      }
      if($('.line.web').isInViewport()) {
        $('.line.web').addClass('visible');
      } else {
        $('.line.web').removeClass('visible');
      }
      if($('.line.branding').isInViewport()) {
        $('.line.branding').addClass('visible');
      } else {
        $('.line.branding').removeClass('visible');
      }
      if($('.line.admin').isInViewport()) {
        $('.line.admin').addClass('visible');
      } else {
        $('.line.admin').removeClass('visible');
      }
      if($('.line.crypto').isInViewport()) {
        $('.line.crypto').addClass('visible');
      } else {
        $('.line.crypto').removeClass('visible');
      }
      if($('.line.real').isInViewport()) {
        $('.line.real').addClass('visible');
      } else {
        $('.line.real').removeClass('visible');
      }
    });
  }

  $('.modal').on("hidden.bs.modal", function (e) {
      if ($('.modal:visible').length) { 
          $('body').addClass('modal-open');
      }
  });

  $('#form').on("shown.bs.modal", function (e) {
        if($('.modal-backdrop').length > 1) {
          $('.modal-backdrop').first().css('z-index', '1050')
        }  
    console.log($('.modal-backdrop').first())
  });

  $('#form').on("hidden.bs.modal", function (e) {
        if($('.modal-backdrop').length < 2) {
          $('.modal-backdrop').first().css('z-index', '1040')
        }  
    console.log($('.modal-backdrop').first())
  });

});