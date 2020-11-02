// const btn = document.querySelector('.slider-buttons')
// window.addEventListener(`resize` `callback` , () => {
//     if (window.innerWidth < 768){
//        document.querySelector('.swiper-container').append(btn);
//        callback(resize);
//     }
//     else {
//        document.querySelector('.slider-top').append(btn);
       
//     }
//  });

const btn = document.querySelector('.slider-buttons')
onResize()
window.addEventListener(`resize` , () => {
 onResize()
 });

function onResize(){
      if (window.innerWidth < 768){
       document.querySelector('.swiper-container').append(btn);
    }
    else {
       document.querySelector('.slider-top').append(btn);
    }
}