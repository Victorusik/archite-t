let btnNodeL = document.querySelector(`#left`);
let btnNodeR = document.querySelector(`#right`);
let ArrowLeft = document.querySelector(`.btn__arrow-left`);
let ArrowRight = document.querySelector(`.btn__arrow-right`);



btnNodeL.addEventListener(`mousemove`, function(){
    ArrowLeft.classList.add(`btn_translate-left`);
});

btnNodeR.addEventListener(`mousemove`, function(){
    ArrowRight.classList.add(`btn_translate-rigth`);
});

btnNodeL.addEventListener(`mouseleave`, function(){
    ArrowLeft.classList.remove(`btn_translate-left`);
});

btnNodeR.addEventListener(`mouseleave`, function(){
    ArrowRight.classList.remove(`btn_translate-rigth`);
});
