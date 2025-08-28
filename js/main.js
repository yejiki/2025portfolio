$(document).ready(function(){
  AOS.init();


  const main_swiper = new Swiper('.main-swiper', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 500,


    loop: true,
    direction: "vertical",
    spaceBetween: 30,
});



//intro-list
const intro_list = new Swiper('.intro-list', {
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
  },
  loop: true,
  speed: 10000,

  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: false,

  breakpoints: { 
    390: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    574: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const intro_list_se = new Swiper('.intro-list-se', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true, 
  },
  loop: true,
  speed: 10000,

  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: false, 

  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    574: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


//intro cursor
const cursorImage = document.querySelector("#cursor-image");

// 마우스 이동 시 위치 업데이트
document.addEventListener("mousemove", (e) => {
  cursorImage.style.left = e.clientX - cursorImage.offsetWidth / 2 + "px";
  cursorImage.style.top = e.clientY - cursorImage.offsetHeight / 2 + "px";
});

// hover-area에 마우스 올렸을 때 이미지 표시
const hoverAreas = document.querySelectorAll(".hover-area");
hoverAreas.forEach((hoverArea) => {
  hoverArea.addEventListener("mouseenter", (e) => {
    const imageSrc = e.target.getAttribute("data-cursor-image");
    cursorImage.style.backgroundImage = `url('${imageSrc}')`;
    cursorImage.style.opacity = 1;
  });

  hoverArea.addEventListener("mouseleave", () => {
    cursorImage.style.opacity = 0;
  });
});






  //탭메뉴
  const project_keyword = new Swiper('.project-keyword', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    freeMode: true,
    centeredSlides: false,
    centeredSlidesBounds: true,
    breakpoints: {
    390: {
      spaceBetween: 10,
    },
    574: {
      spaceBetween: 15,
    },
    1024: {
      spaceBetween: 20,
    },
  },
});



  $(".project-img ul li").not(":first").hide();
  $(".project-keyword ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $(".project-img ul li").eq(aa).fadeIn().siblings().hide();
  });

  $(document).ready(function () {
  $(".project-item").hover(
    function () {
      $(this).find(".box-hover").stop(true, true).fadeIn(300);
    },
    function () {
      $(this).find(".box-hover").stop(true, true).fadeOut(300);
    }
  );
});




// skill


  var swiper = new Swiper(".swiper-container", {
    loopedSlides: 8,
    //loop: true,
    slidesPerView: "auto",
    freeMode: true,
    
    mousewheel: {
      releaseOnEdges: true,
    },
    
  });

  var thumb = document.querySelectorAll(".thumbContainer");

  thumb.forEach(function(image, index) {
    var delay = index * 90;
    image.classList.add("fadeInSlide");
    image.style.animationDelay = delay + "ms";
  });


  $(document).ready(function() {
  $('.f-gotop').hover(
    function() {
      // 마우스를 올렸을 때
      $('.gotp-hv').stop(true).fadeIn(200);
      $('.gotp').stop(true).fadeOut(200);
    },
    function() {
      // 마우스를 뗐을 때
      $('.gotp').stop(true).fadeIn(200);
      $('.gotp-hv').stop(true).fadeOut(200);
    }
  );
});





  
//끝
});