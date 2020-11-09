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

      // if the target of the click isn't the container nor a descendant of the container
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

  $('.rubiks-cube').hover(function() {
    $('.cube-wrapper').removeClass('rotate')
  },
  function() {
    $('.cube-wrapper').addClass('rotate')
  })

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop-100 && elementTop < viewportBottom-100;
  };
  // TODO: refactor this code
  if($('.line.marketing').length) {
    $(window).on('resize scroll', function() {
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

});






// animation

// var lastMouseX = 0,
// 	lastMouseY = 0;
// var rotX = 0,
// 	rotY = 0;

// $(document).on("mousedown", function(ev) {
// 	lastMouseX = ev.clientX;
// 	lastMouseY = ev.clientY;
// 	$(document).on("mousemove", mouseMoved);
// });
// $(document).on("mouseup", function() {
// 	$(document).off("mousemove", mouseMoved);
// });

// function mouseMoved(ev) {
// 	var deltaX = ev.pageX - lastMouseX;
// 	var deltaY = ev.pageY - lastMouseY;

// 	lastMouseX = ev.pageX;
// 	lastMouseY = ev.pageY;

// 	rotY -= deltaX * 0.3;
// 	rotX += deltaY * 0.3;

// 	$(".rubiks-cube").css("transform", "translateZ( -100px) rotateX( " + -rotX + "deg) rotateY(" + -rotY + "deg)");
// }


// $('.rubiks-cube-1 .detail:nth-child(11) .front').attr('id', 'hey')

// // swipe
// class Swipe {
// 	constructor(elem, options = {}) {
// 		this.elem = elem;
// 		this.minDistance = options.minDistance || 100;
// 		this.maxTime = options.maxTime || 500;
// 		this.corners = options.corners || false;
// 		this.addListeners();
// 		this.events = {
// 			live:[], 
// 			after:[]
// 		};
// 		Swipe.directions().forEach(direction => this.events[direction] = []);
// 	}
	
// 	static directions() {
// 		return ['left', 'right', 'up', 'down', 'leftup', 'leftdown', 'rightup', 'rightdown'];
// 	}
	
// 	static position(e) {
// 		return {x: e.pageX, y: e.pageY};
// 	}
	
// 	static getOffsets(e, startPos) {
// 		const newPos = Swipe.position(e);
// 		return {
// 		  x: newPos.x - startPos.x,
// 		  y: newPos.y - startPos.y
// 		};
// 	}
	
// 	static getDirections(offsets, corners) {
// 		const directions = {};
// 		directions.left  = offsets.x <= 0 ? Math.abs(offsets.x) : 0;
// 		directions.right = offsets.x >= 0 ? Math.abs(offsets.x) : 0;
// 		directions.up    = offsets.y <= 0 ? Math.abs(offsets.y) : 0;
// 		directions.down  = offsets.y >= 0 ? Math.abs(offsets.y) : 0;
			
// 		if (corners) {
// 		  directions.leftup    = (Math.abs((directions.left + directions.up))    / 1.5);
// 		  directions.leftdown  = (Math.abs((directions.left + directions.down))  / 1.5);
// 		  directions.rightup   = (Math.abs((directions.right + directions.up))   / 1.5);
// 		  directions.rightdown = (Math.abs((directions.right + directions.down)) / 1.5);
// 		}
		
// 		return directions;
// 	}
	
// 	static order(directions) {
// 		return Object.keys(directions).sort((a, b) => directions[b] - directions[a]);
// 	}
	
// 	addEventListener(evt, bc) {
// 		const keys = Object.keys(this.events);
// 		if (keys.indexOf(evt) !== -1) {
// 		  this.events[evt].push(bc);
// 	    const i = this.events.length - 1;
// 		  return {
// 		    clear: () => {
// 			    this.events[i] = undefined;
// 		    }
// 	    };
// 		} else {
// 			throw new Error("Event is not valid, use " + keys.join(", "));
// 		}
// 	}
	
// 	down(e) {
// 		e.preventDefault();
// 		this.didDown = true;
// 		this.startTime = Date.now();
// 		this.startPos = Swipe.position(e);
// 	}
	
// 	move(e) {
// 		e.preventDefault();
// 		if (!this.didDown) {
// 			return;
// 		}
// 	  this.didSwipe = true;
		
// 		if (this.events.live.length > 0) {
// 		  const offsets  = Swipe.getOffsets(e, this.startPos);
// 		  const directions = Swipe.getDirections(offsets, this.corners);	
// 		  const direction = Swipe.order(directions)[0];
//       const distance = directions[direction];
// 		  this.events.live.forEach(evt => {
// 		    if (typeof evt === "function") {
// 		      evt(direction, distance, e);
// 		    }
// 		  });
// 		}
// 	}
	
// 	up(e) {
// 		e.preventDefault();
// 		this.didDown = false;
// 		if (!this.didSwipe) {
// 			return;
// 		}
// 		this.didSwipe = false;
			
// 		const elapsedTime = Date.now() - this.startTime;
// 		if (elapsedTime <= this.maxTime) {
// 	    const offsets  = Swipe.getOffsets(e, this.startPos);
// 	    const directions = Swipe.getDirections(offsets, this.corners);	
// 	    const direction = Swipe.order(directions)[0];
// 	    const distance = directions[direction];
			
// 	    if (distance >= this.minDistance) {
// 			  this.events.after.forEach(evt => {
// 	        if (typeof evt === "function") {
// 	          evt(direction, distance);
//           }
//         });
// 			  this.events[direction].forEach(evt => {
// 	        if (typeof evt === "function") {
// 	          evt(distance);
//           }
//         });
// 		  }
// 	  }				
// 	}
	
// 	addListeners() {	
// 	  this.elem.addEventListener("touchstart", e => this.down(e));
// 	  this.elem.addEventListener("mousedown", e => this.down(e));
// 	  this.elem.addEventListener("touchmove", e => this.move(e));
// 	  document.addEventListener("mousemove", e => this.move(e));
// 	  this.elem.addEventListener("touchend", e => this.up(e));
// 	  document.addEventListener("mouseup", e => this.up(e));
// 	}
// }
// currentElem = ''
// //CODE FOR ANIMATION
// const box2 = document.querySelector('.rubiks-cube-1 .detail:nth-child(2)');
// // const classes = Swipe.directions();
// // const elem = box.firstChild;

// const runAnimation = direction => {
//   $(currentElem).addClass('swipe-right')
// 	// elem.innerHTML = direction;
// 	// elem.classList.remove.apply(elem.classList, classes);
// 	// setTimeout(() => elem.classList.add(direction), 1);
// };

// //SWIPE INITIALIZATION
// const swipe = new Swipe(box2, {
// 	corners: true,
//   minDistance: 50,
// });
// let afterEvent = swipe.addEventListener("after", (direction) => {
// 	runAnimation(direction);
// });
// let liveEvent = swipe.addEventListener("live", (direction, dis, evt) => {
//   console.log($(currentElem))
//   if(!currentElem) {
//     currentElem = evt.srcElement.parentElement
//   }
// });
// //REMOVE EVENT WITH evt.clear();


// var colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'],
// 		pieces = document.getElementsByClassName('piece');

// // Returns j-th adjacent face of i-th face
// function mx(i, j) {
// 	return ([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;
// }

// function getAxis(face) {
// 	return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
// }

// // Moves each of 26 pieces to their places, assigns IDs and attaches stickers
// function assembleCube() {
// 	function moveto(face) {
// 		id = id + (1 << face);
// 		pieces[i].children[face].appendChild(document.createElement('div'))
// 			.setAttribute('class', 'sticker ' + colors[face]);
// 		return 'translate' + getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
// 	}
// 	for (var id, x, i = 0; id = 0, i < 26; i++) {
// 		x = mx(i, i % 18);
// 		pieces[i].style.transform = 'rotateX(0deg)' + moveto(i % 6) +
// 			(i > 5 ? moveto(x) + (i > 17 ? moveto(mx(x, x + 2)) : '') : '');
// 		pieces[i].setAttribute('id', 'piece' + id);
// 	}
// }

// function getPieceBy(face, index, corner) {
// 	return document.getElementById('piece' +
// 		((1 << face) + (1 << mx(face, index)) + (1 << mx(face, index + 1)) * corner));
// }

// // Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
// function swapPieces(face, times) {
// 	for (var i = 0; i < 6 * times; i++) {
// 		var piece1 = getPieceBy(face, i / 2, i % 2),
// 				piece2 = getPieceBy(face, i / 2 + 1, i % 2);
// 		for (var j = 0; j < 5; j++) {
// 			var sticker1 = piece1.children[j < 4 ? mx(face, j) : face].firstChild,
// 					sticker2 = piece2.children[j < 4 ? mx(face, j + 1) : face].firstChild,
// 					className = sticker1 ? sticker1.className : '';
// 			if (className)
// 				sticker1.className = sticker2.className,
// 				sticker2.className = className;
// 		}
// 	}
// }

// // Animates rotation of the face (by clockwise if cw), and then swaps stickers
// function animateRotation(face, cw, currentTime) {
// 	var k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1),
// 			qubes = Array(9).fill(pieces[face]).map(function (value, index) {
// 				return index ? getPieceBy(face, index / 2, index % 2) : value;
// 			});
// 	(function rotatePieces() {
// 		var passed = Date.now() - currentTime,
// 				style = 'rotate' + getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)';
// 		qubes.forEach(function (piece) {
// 			piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
// 		});
// 		if (passed >= 300)
// 			return swapPieces(face, 3 - 2 * cw);
// 		requestAnimationFrame(rotatePieces);
// 	})();
// }

// // Events
// function mousedown(md_e) {
// 	var startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number),
// 			element = md_e.target.closest('.element'),
// 			face = [].indexOf.call((element || cube).parentNode.children, element);
// 	function mousemove(mm_e) {
// 		if (element) {
// 			var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
// 			if (gid && gid.input.includes('anchor')) {
// 				mouseup();
// 				var e = element.parentNode.children[mx(face, Number(gid) + 3)].hasChildNodes();
// 				animateRotation(mx(face, Number(gid) + 1 + 2 * e), e, Date.now());
// 			}
// 		} else pivot.style.transform =
// 			'rotateX(' + (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + 'deg)' +
// 			'rotateY(' + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + 'deg)';
// 	}
// 	function mouseup() {
// 		document.body.appendChild(guide);
// 		scene.removeEventListener('mousemove', mousemove);
// 		document.removeEventListener('mouseup', mouseup);
// 		scene.addEventListener('mousedown', mousedown);
// 	}

// 	(element || document.body).appendChild(guide);
// 	scene.addEventListener('mousemove', mousemove);
// 	document.addEventListener('mouseup', mouseup);
// 	scene.removeEventListener('mousedown', mousedown);
// }

// document.ondragstart = function() { return false; }
// window.addEventListener('load', assembleCube);
// scene.addEventListener('mousedown', mousedown);


// var cube;

// function setSize(n)
// {
// 	cube.setParam({size: n});
// }

// function shuffle(animation)
// {
// 	cube.shuffle(50,animation);
// }

// function reset()
// {
// 	cube.reset();
// }

// function zoomIn()
// {
// 	cube.setParam({zoom: cube.zoom*1.2});
// }

// function zoomOut()
// {
// 	cube.setParam({zoom: cube.zoom/1.2});
// }

// function zoomFit()
// {
// 	cube.setParam({zoom: 1});
// }

// function setShiny(n)
// {
// 	cube.setParam({shiny: n});
// }

// function undo()
// {
// 	cube.undo();
// }

// function start()
// {
// cube = new RubikCube(document.getElementById("canvas"), {size: 5});
// }