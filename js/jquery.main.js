// page init
$(document).ready(function() {
	initTransparentMenuToggler();
	getBackgroundImage();
	initFixedScrollBlock();
	initCarousel();
	initSlideShow();
	initLightbox();
	initMobileNav();
	initBackgroundResize();
	initSameHeight();
	initLogoList();
	initPillNavAnimations();
});

function initPillNavAnimations() {
	$('.pills a').each(function() {
		var $this = $(this);
		$this.on('click', function(event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($this.attr('href')).offset().top - 90
			}, 700);
		});
	});
}

function initLogoList() {
	var listItem = $('.logo-list-item img');
	listItem.each(function() {
		var $this = $(this);
		var bwImage = $this.attr('src');
		var colourImage = $this.data('colour');
		$this.hover(function() {
			$this.attr('src', colourImage);
		}, function() {
			$this.attr('src', bwImage);
		});
	})
}

function getBackgroundImage() {
	var elm = $('.section-solutions-solution.negative');

	elm.each(function() {
		var image = $(this).data('bg-image');

		$(this).css('background', 'url("' + image + '")');
	})
}

// Transparent menu toggler
function initTransparentMenuToggler() {

    var menu = jQuery('.transparent-toggle'),
        logo = menu.find('img.img-colour');

	logo.attr('src', '/images/logo-tr.png');

    jQuery(window).scroll(function() {
        if(jQuery(document).scrollTop() < 100) {
            if(!menu.hasClass('transparent')) {
                menu.addClass('transparent');
            }
            logo.attr('src', '/images/logo-tr.png');
        }
        if(jQuery(document).scrollTop() > 100) {
            if(menu.hasClass('transparent')) {
                menu.removeClass('transparent');
            }
            logo.attr('src', '/images/logo.png');
        }
    });
}

// scroll gallery init
function initCarousel() {
	jQuery('.gallery').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: 'div.slide',
		btnPrev: 'a.btn-prev',
		btnNext: 'a.btn-next',
		autoRotation: false,
		switchTime: 3000,
		animSpeed: 500
	});
}

// fade gallery init
function initSlideShow() {
	jQuery('.slideshow').fadeGallery({
		slides: '.slide',
		btnPrev: 'a.btn-prev',
		btnNext: 'a.btn-next',
		generatePagination: '.pagination',
		event: 'click',
		autoRotation: true,
		switchTime: 3000,
		animSpeed: 500
	});
}

// fancybox modal popup init
function initLightbox() {
	jQuery('a.lightbox').fancybox({
		autoHeight: true,
		padding: 15,
		loop: false,
		helpers: {
			overlay: {
				css: {
					background: 'rgba(0, 0, 0, 0.65)'
				}
			}
		},
		afterLoad: function(current, previous) {
			// handle custom close button in inline modal
			if(current.href.indexOf('#') === 0) {
				jQuery(current.href).find('a.close').off('click.fb').on('click.fb', function(e){
					e.preventDefault();
					jQuery.fancybox.close();
				});
			}
		}
	});
}

// mobile menu init
function initMobileNav() {
	jQuery('body').mobileNav({
		menuActiveClass: 'active',
		menuOpener: '.opener-menu'
	});
}

// initialize fixed blocks on scroll
function initFixedScrollBlock() {
	jQuery('#wrapper').fixedScrollBlock({
		slideBlock: '#header'
	});
}

// stretch background to fill blocks
function initBackgroundResize() {
	jQuery('.visual').each(function() {
		ImageStretcher.add({
			container: this,
			image: 'img'
		});
	});
}

// align blocks height
function initSameHeight() {
	jQuery('.three-boxes').sameHeight({
		elements: '.box',
		flexible: true,
		multiLine: true
	});
	jQuery('.section-about').sameHeight({
		elements: '.post',
		flexible: true,
		multiLine: true
	});
}