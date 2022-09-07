// AOS套件
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point，建議120-150
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms，建議400-800
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
// swiper套件-你想要學習的 程式 ，都在這裡
let swiper = new Swiper(".renderSwiper", {
  // 每個視圖的幻燈片數
  slidesPerView: "auto",
  // 移動幻燈片之間的距離
  // 與margin的css屬性衝突
  spaceBetween: 1,
  // 當滑鼠懸停在 Swiper 上時，
  // 將顯示"抓取"光標
  grabCursor: true,
  // 分頁 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper套件-專屬你的學習課程超過 3000 位學員得到了 程式超能力
swiper = new Swiper('.shareSwiper', {
  // 分頁   
  pagination: {
    el: '.swiper-pagination',
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  // 滾動條
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
  // 淡入淡出
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});



