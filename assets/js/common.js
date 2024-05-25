const scrStn = document.querySelectorAll('.scroll_stn');
let scrStnY,scrStnUp,scrStnDown;
const btnTop = document.querySelector(".btn_goTop");

// Top button trigger
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    // wide_imgBox scroll animation
    if( scrollTop > 300) {
        $('.btn_goTop').css({
            opacity: 1,
        }, 100);
    } else {
        $('.btn_goTop').css({
            opacity: 0,
        }, 100);
    }
});

btnTop.addEventListener("click",function(){
    window.scrollTo({ top: "0", behavior: "smooth" });
})

// Scroll Trigger Vanilla Js
window.addEventListener('scroll',function(){
    for(let i=0; i<scrStn.length; i++){
        scrStnY = (scrStn[i].getBoundingClientRect().top + window.pageYOffset) - window.innerHeight;
        scrStnUp = scrStnY + (window.innerHeight/2 - window.innerHeight/4) <= window.pageYOffset;
        scrStnDown = scrStnY <= window.pageYOffset;
        if( scrStnUp ){
            scrStn[i].classList.add('active');
        }
    }
});


// Scroll Triger GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.from(".stn_pr .cont", {
    scrollTrigger: {
      trigger: '.stn_pr .cont',//객체기준범위
      start: "0% 90%",//시작 지점
      end: "100% 40%",//끝 지점
      // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
      scrub: 3,//부드러운 스크러빙
      // markers: true,//개발가이드선
    },
    scale:0.4,
    // opacity:0,
});
gsap.to(".contact01", {
    scrollTrigger: {
      trigger: '.contact01',//객체기준범위
      start: "0% 80%",//시작 지점
      end: "100% 10%",//끝 지점
      scrub: 3,//부드러운 스크러빙
    },
    y: -150,
});
gsap.to(".contact02", {
    scrollTrigger: {
      trigger: '.contact02',//객체기준범위
      start: "0% 80%",//시작 지점
      end: "100% 10%",//끝 지점
      scrub: 3,//부드러운 스크러빙
    },
    y: -150,
});
gsap.to(".contact03", {
    scrollTrigger: {
      trigger: '.contact03',//객체기준범위
      start: "0% 80%",//시작 지점
      end: "100% 10%",//끝 지점
      scrub: 3,//부드러운 스크러빙
    },
    y: -150,
});
gsap.to(".contact04", {
    scrollTrigger: {
      trigger: '.contact04',//객체기준범위
      start: "0% 80%",//시작 지점
      end: "100% 10%",//끝 지점
      scrub: 3,//부드러운 스크러빙
    },
    y: -150,
});
gsap.to(".contact05", {
    scrollTrigger: {
      trigger: '.contact05',//객체기준범위
      start: "0% 80%",//시작 지점
      end: "100% 10%",//끝 지점
      scrub: 3,//부드러운 스크러빙
    },
    y: -150,
});
gsap.to(".contact06", {
    scrollTrigger: {
      trigger: '.contact06',//객체기준범위
      start: "0% 80%",//시작 지점
      end: "100% 10%",//끝 지점
      scrub: 3,//부드러운 스크러빙
    },
    y: -150,
});


// swiper js
const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay : true,
    speed : 1300,
    loop : true,
    loopAdditionalSlides : 1,
    breakpoints: {
      500: {
        slidesPerView: 2,  //브라우저가 390보다 클 때
        autoplay : false,
        loop : false,
        freeMode : true,
      },
    },
});


// Send Email
$(document).ready(function () {
    // form submit
    $("#contact-form").on("submit", function (event) {
      event.preventDefault();
      
      // formData 넣어주고
      const formData = new FormData(this);
      
      // 파라미터 조건들 넣어줘야함
      // ID나 Key들은 각자 다르기때문에 EmailJS에서 확인하고 기입
      formData.append('service_id', 'service_0wbduns');
      formData.append('template_id', 'template_4yxqs8x');
      formData.append('user_id', 'f2Kxpg-8XqbadkoKK');
  
      $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
      })
        .done(function () {
          alert('메일을 성공적으로 발송했습니다.\n검토 후 빠른 시일 내로 답변 드리겠습니다.');
        })
        .fail(function (error) {
          alert("메일 발송에 실패했습니다." + JSON.stringify(error));
        });
    });
});


// Smooth Scroll
// class Scrooth {
//     constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
//       this.element = element;
//       this.distance = strength;
//       this.acceleration = acceleration;
//       this.deceleration = deceleration;
//       this.running = false;
  
//       this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
//       this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
//       this.scroll = this.scroll.bind(this);
//     }
  
//     scrollHandler(e) {
//       e.preventDefault();
  
//       if (!this.running) {
//         this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//         this.running = true;
//         this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//         this.isDistanceAsc = true;
//         this.scroll();
//       } else {
//         this.isDistanceAsc = false;
//         this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//       }
//     }
  
//     scroll() {
//       if (this.running) {
//         this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//         Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
//         Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
  
//         this.top += this.currentDistance;
//         this.element.scrollTo(0, this.top);
        
//         requestAnimationFrame(this.scroll);
//       }
//     }
// }
// const scroll = new Scrooth({
//     element: window,
//     strength: 20, //스크롤속도
//     acceleration: 1.5, //가속
//     deceleration: 0.975, //감속
// });