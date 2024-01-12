//Offerings carousel slider
$(".our-offerings-slider").owlCarousel({
  loop: true,
  center: true,
  autoplay:true,
  margin: 25,
  responsiveClass: true,
  autoplayTimeout: 3000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    680: {
      items: 2,
      nav: false,
      loop: false
    },
    1000: {
      items: 3,
      nav: true
    }
  }
});

//Awards carousel slider
$('.awards-carousel').owlCarousel({
	items: 3,
	loop: true,
	autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
	margin: 20,
	nav: true,
	dots: false,
})

//Brands carousel slider
$('.brand-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
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
  });


//Modal on window load
  $(window).on('load',function(){
    var delayMs =100; 
    setTimeout(function(){
        $('#myModal').modal('show');
    }, delayMs);
});




