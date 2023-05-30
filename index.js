function MySlider1__init() {
    const swiper = new Swiper('.my-slider-1 .swiper-container' , {
      navigation: {
        prevEl: '.my-slider-1__nav-button__left', 
        nextEl: '.my-slider-1__nav-button__right'
      },
      loop: true, 
      pagination: {
        el:'.my-slider-1__pagination',
        clickable: true,
        renderBullet: function(index, classMate) {
          const no = index + 1;
          const url = 'https://picsum.photos/id/' + no + '/100/100';
          
          return '<div class="' + classMate + '"><img class="block" src="' + url +'"></div>';
        }
      }
    });
  }
  
  MySlider1__init();
  
  function MySlider2__init() {
    $('.my-slider-2 ul > li').each(function(i, node) {
      gsap.from(node, {
        duration: 1,
        x: 400,
        opacity: 0,
        scrollTrigger: {
          scrub: true,
          trigger: node,
          start: "top 100%",
          end: "top 70%"
        }
      });
    });
  }
  
  MySlider2__init();