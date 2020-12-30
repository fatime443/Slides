'use strict'
var sliderWidth = document.querySelector('.slider').clientWidth;
var sliderLength = document.querySelectorAll('.slider ul li').length;
var imgWidth = sliderWidth*sliderLength;
var sliderUl = document.querySelector('ul');
sliderUl.style.width =imgWidth + 'px';

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var currentSlide = 0;

var dot = document.querySelector('.dots');
for(var i=0; i<sliderLength; i++){
    var newDots = document.createElement('div');
    newDots.className='dot-item'
    newDots.setAttribute('data-slide',i);
    dot.appendChild(newDots)
    newDots.onclick=function(){
        currentSlide=this.getAttribute("data-slide");
        sliderUl.style.left=-(currentSlide*sliderWidth)+'px';
    }
}


// var dots = document.querySelectorAll('.dot-item');

// for(var i=0; i<dots.length; i++){
//     dots[i].onclick=function(){
//         var dotI=this.getAttribute('data-slide');
//         currentSlide = dotI
//         sliderUl.style.left=-(currentSlide*sliderWidth)+'px';
//     }
    
// }

nextBtn.onclick = function(){
    NextSlide();
}
prevBtn.onclick = function(){
    PrevSlide();
}


function NextSlide(){
    currentSlide ++;
    if(currentSlide == sliderLength){
        currentSlide = 0;
    }
    sliderUl.style.left = -(currentSlide*sliderWidth)+'px'
}

function PrevSlide(){
    currentSlide --;
    if(currentSlide == -1){
        currentSlide = sliderLength-1
    }
    sliderUl.style.left = -(currentSlide*sliderWidth)+'px'

}
console.log(sliderWidth)


// setInterval(function(){
//     NextSlide()
// },2000)
