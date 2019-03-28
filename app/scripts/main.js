$( document ).ready(function() {
    $('#offerte-owl').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<i class="mdi mdi-arrow-left" aria-hidden="true"></i>','<i class="mdi mdi-arrow-right" aria-hidden="true"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    })

    var slider = $('#main-slide').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: ['',''],
      dots:false,
      // autoplay:true,
      // autoplayTimeout:5000,
      // autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          992:{
              items:1
          }
      }
    })

    $('#main-slide-prev').click(function(){
      slider.trigger('prev.owl.carousel')
    })

    $('#main-slide-next').click(function(){
      slider.trigger('next.owl.carousel')
    })
})


// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
