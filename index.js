function MySlider1__init() {
    var swiper = new Swiper(".my-slider-1 .swiper-container", {
      slidesPerView: 1,
      navigation: {
        prevEl: ".my-slider-1__nav-button--left",
        nextEl: ".my-slider-1__nav-button--right"
      },
      pagination: {
        el: ".my-slider-1__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          const no = index + 1;
          const url = "https://picsum.photos/id/" + no + "/100/100";
          return (
            '<div class="' +
            className +
            '"><img class="block" src="' +
            url +
            '"></div>'
          );
        }
      },
      loop: true
    });
  }
  
  MySlider1__init();
  
  function ProdList__init() {
    $(".prod-list > ul > li").each(function (i, node) {
      gsap.from(node, {
        duration: 1,
        x: 400,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
          start: "top 100%",
          end: "top 70%",
          trigger: node,
          markers: true,
          scrub: true
        }
      });
    });
  }
  
  ProdList__init();
  