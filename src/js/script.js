$( document ).ready(function() {

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

  if($('.slider').length) {
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
  
  function getcsstransform(obj)
  {
    var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    
    var TType="undefined",
        rotateX = 0,
        rotateY = 0,
        rotateZ = 0;
        
    var matrix = obj.css("-webkit-transform") ||
      obj.css("-moz-transform") ||
      obj.css("-ms-transform") ||
      obj.css("-o-transform") ||
      obj.css("transform");
    if (matrix!==undefined && matrix !== 'none')
    {
      // if matrix is 2d matrix
      TType="2D";
      if (matrix.indexOf('matrix(') >= 0)
      {
        var values = matrix.split('(')[1].split(')')[0];
        if (isIE)  //case IE
        {
          angle = parseFloat(values.replace('deg', STR_EMPTY));
        }else
        {
          values = values.split(',');
          var a = values[0];
          var b = values[1];
          var rotateZ = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        }
      }else
      {
        // matrix is matrix3d
        TType="3D";
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var sinB = parseFloat(values[8]);
        var b = Math.round(Math.asin(sinB) * 180 / Math.PI);
        var cosB = Math.cos(b * Math.PI / 180);
        var matrixVal10 = parseFloat(values[9]);
        var a = Math.round(Math.asin(-matrixVal10 / cosB) * 180 / Math.PI);
        var matrixVal1 = parseFloat(values[0]);
        var c = Math.round(Math.acos(matrixVal1 / cosB) * 180 / Math.PI);
        rotateX = a;
        rotateY = b;
        rotateZ = c;
      }
    }
  
    return  { TType: TType, rotateX: rotateX,  rotateY: rotateY,  rotateZ: rotateZ };
  };
  
  $('.cube-wrapper').hover(function() {
      
    mAngle = getcsstransform($(".rubiks-cube"));
    $('.rubiks-cube').addClass('default')
    $('.rubiks-cube').css('-webkit-transform','rotateX('+mAngle.rotateX+'deg) rotateY('+mAngle.rotateY+'deg) rotateZ('+mAngle.rotateZ+'deg)')
    $('.rubiks-cube.default').animate({  textIndent: 0 }, {
      step: function(now,fx) {
        $(this).css({
          '-webkit-transform':'rotateX('+26+'deg) rotateY('+-42+'deg) rotateZ('+3+'deg)',
          '-moz-transform':'rotateX('+26+'deg) rotateY('+-42+'deg) rotateZ('+3+'deg)',
          '-ms-transform':'rotateX('+26+'deg) rotateY('+-42+'deg) rotateZ('+3+'deg)',
          '-o-transform':'rotateX('+26+'deg) rotateY('+-42+'deg) rotateZ('+3+'deg)',
          'transform':'rotateX('+26+'deg) rotateY('+-42+'deg) rotateZ('+3+'deg)'}); 
      },
  });    
  }, function() {
    $('.rubiks-cube').removeAttr('style');
    $('.rubiks-cube').removeClass('default')    
  })

  $('.rubiks-cube .detail:nth-child(1)').hover(function() {
    $('a.cube-link.second').fadeIn()
  },
  function() {
    $('a.cube-link.second').fadeOut()
  })

  $('.rubiks-cube .detail:nth-child(1)').on('click', function(e) {
    $('html, body').animate({
      scrollTop: $('#consulting-10').offset().top
    }, 500);
    return false;
  });

  $('.rubiks-cube .detail:nth-child(3)').hover(function() {
    $('a.cube-link.first').fadeIn()
  },
  function() {
    $('a.cube-link.first').fadeOut()
  })

  $('.rubiks-cube .detail:nth-child(3)').on('click', function(e) {
    $('html, body').animate({
      scrollTop: $('#consulting-1').offset().top
    }, 500);
    return false;
  });

  $('.rubiks-cube .detail:nth-child(20)').hover(function() {
    $('a.cube-link.third').fadeIn()
  },
  function() {
    $('a.cube-link.third').fadeOut()
  })

  $('.rubiks-cube .detail:nth-child(20)').on('click', function(e) {
    $('html, body').animate({
      scrollTop: $('#consulting-7').offset().top
    }, 500);
    return false;
  });

});