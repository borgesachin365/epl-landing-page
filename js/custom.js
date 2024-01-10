//Offerings carousel slider
$('.offerings_slider').owlCarousel({
  center: true,
  loop: true,
  items: 3,
  margin:20,
  autoplay:false,
//   nav:true
});

//Awards carousel slider
$('.carousel-main').owlCarousel({
	items: 3,
	loop: true,
	autoplay: true,
	autoplayTimeout: 1500,
	margin: 20,
	nav: true,
	dots: false,
	navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
})

//Brands carousel slider
$('.brand-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:9
      }
    }
  })

