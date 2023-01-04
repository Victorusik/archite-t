let btnBurgerNode = document.querySelector(`.btn-burger`);
let menuNodeP = document.querySelector(`.menu-p`);
let menuNodeD = document.querySelector(`.menu-d`);
let btnIc = document.querySelector(`.btn-burger__icon`);
let link = document.querySelectorAll(`.link`);

btnBurgerNode.addEventListener(`click`, function () {
    if (menuNodeP.classList.contains(`op-0`)) {


        menuNodeP.classList.remove(`op-0`);
        menuNodeP.classList.remove(`z-ind-l`);
        menuNodeP.classList.remove(`anim-btn-2`);
        menuNodeP.classList.add(`anim-btn-1`);

        btnIc.classList.add(`btn-burger__icon_active`)

        menuNodeD.classList.add(`op-0`);
    }
    else {


        menuNodeD.classList.remove(`op-0`);

        btnIc.classList.remove(`btn-burger__icon_active`)

        menuNodeP.classList.remove(`anim-btn-1`);
        menuNodeP.classList.add(`anim-btn-2`);
        menuNodeP.classList.add(`op-0`);
    }

    for (let i = 0; i < link.length; i++) {
        if(link[i].classList.contains(`link_disabled`)){
            link[i].tabIndex = 0;
            link[i].classList.toggle(`link_disabled`);
        }
        else {
            link[i].tabIndex = -1;
            link[i].classList.toggle(`link_disabled`);
        }
    }
});