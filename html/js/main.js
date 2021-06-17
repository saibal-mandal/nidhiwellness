//loader
$(window).load(function() {
    $('.loader').delay(400).fadeOut(200);
	});	
// ------------------------------------------
/*==stiky menu js==*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
});
// ---------------------------------------------
//scroll to top	
$(window).scroll(function(){
	if($(this).scrollTop()>250){
		$('.scrollup').fadeIn();
	}else{
		$('.scrollup').fadeOut();
		}
	});
$('.scrollup').click(function(){
	$("html, body").animate({scrollTop:0}, 600);
	return false;
	});	
// ----------------------------------------------
// header-section...
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-nav');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/*dropdown js*/
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

 // owl-carousel banner 
$('#banner-slider').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        smartSpeed: 2550,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

// owl-carousel testi-slider 
$('#testi-slider').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

// owl-carousel blog-slider
$('#owldemo4').owlCarousel({
        loop: true,
        nav: true,
        margin:10,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });

// owl-carousel course-slider
$('#owldemo5').owlCarousel({
        loop: true,
        nav: true,
        margin:10,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });

// owl-carousel evnts-slider
$('#owldemo3').owlCarousel({
        loop: true,
        nav: true,
        margin:10,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });


// wow-js....
AOS.init();