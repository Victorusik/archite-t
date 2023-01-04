let imgPlaceNode = document.querySelector(`#img-place`);
let sectionNode = document.querySelector(`#section-img`);
let textNode = document.querySelector(`#bottom-text`);
let textMobNode = document.querySelector(`#mob-bottom-text`);

let leftBtn = document.querySelector(`#left`);
let rightBtn = document.querySelector(`#right`);

let colorBack = document.querySelector(`.bc`);

let text0 = `
karimoku case study <br> 2018
`;
let text1 = `
    self-made <br>
    2018
`;
let text2 = `
    menu<br> 2018
`;

let title0 = `
Dining table
`;

let title1 = `
Tune sofa
`;

let title2 = `
Plinth sink
`;

let img0 = `
<img class="img" src="images/table.webp" alt="table">
`;

let img1 = `
<img class="img" src="images/sofa.webp" alt="sofa">
`;

let img2 = `
<img class="img" src="images/sink.webp" alt="sink">

`;

let sec2 = `
<div class="box-1 border-right">
    
</div>       
<div id="img-place" class="box-1">
            ${img2}
        </div>
            <div class="box-1 border-left flex-col-end mob-order-1">
                <article class="article m-xl">
                    <h2 class="article__title">
                    ${title2}
                    </h2>
                    <footer class="article__footer">
                        <p class="article__text">${text2}</p>
                    </footer>
                </article>
            </div>
            <div class="box-1 flex-col-space-between border-left">
                <h3 class="designer-description m-xl">Lead designer <br> Frederik Werner</h3>
                <aside class="aside m-xl"><a href="">See more about Frederik</a></aside>
            </div>
            
`;

let page = 0;

let sec1 = `
<div id="img-place" class="box-22">
                    ${img1}
                </div>
                <div class="box-1 border-left flex-col-end mob-order-1">
                    <article class="article m-xl">
                        <h2 class="article__title">
                            ${title1}
                        </h2>
                        <footer class="article__footer">
                            <p class="article__text">${text1}</p>
                        </footer>
                    </article>
                </div>
                <div class="box-1 flex-col-space-between border-left">
                    <h3 class="designer-description m-xl">Lead designer <br> Frederik Werner</h3>
                    <aside class="aside m-xl"><a href="">See more about Frederik</a></aside>
                </div>
`;

let sec0 = `
<div id="img-place" class="box-22">
                    ${img0}
                </div>
                <div class="box-1 border-left flex-col-end mob-order-1">
                    <article class="article m-xl">
                        <h2 class="article__title">
                            ${title0}
                        </h2>
                        <footer class="article__footer">
                            <p class="article__text">${text0}</p>
                        </footer>
                    </article>
                </div>
                <div class="box-1 flex-col-space-between border-left">
                    <h3 class="designer-description m-xl">Lead designer <br> Frederik Werner</h3>
                    <aside class="aside m-xl"><a href="">See more about Frederik</a></aside>
                </div>
`;

let footerText0 = `Playing with the dimensions of the dining table, we've experimented with the balance
between lightness and heaviness, making it paper-thin when seen from some angles
and more robust from others, emphasizing the materials.`;

let footerText1 = `Tune is a sound absorbing seating collection
designed by Norm architects for Zilenzio. The
Sofa has a clad sound absorbing shell that’s
combined with soft cushions that follow the
smooth and clean lines of the sofa.`;

let footerText2 = `Bespoke-made marble plinths stand as elegant
centerpieces; minimal yet sophisticated
elements elevating the spaces with their rich
material character.`;


let ArrowL = document.querySelector(`.btn__arrow-left`);
let ArrowR = document.querySelector(`.btn__arrow-right`);

let btnText = document.querySelector(`.btn__text`);

leftBtn.addEventListener(`click`, function () {

    if (page > 0) {
        page--;
    }

    switch (page) {
        case 0:
            colorBack.style.backgroundColor = `#e3ceb4`;

            sectionNode.classList.remove(`appear-anim-right`);
            sectionNode.classList.add(`appear-anim-left`);
            textNode.classList.remove(`appear-anim-right`);
            textNode.classList.add(`appear-anim-left`);

            sectionNode.innerHTML = sec0;
            textMobNode.innerHTML = footerText0;
            textNode.innerHTML = footerText0;
            leftBtn.disabled = true;    
            ArrowL.classList.remove(`btn_translate-left`);
            break;
        case 1:
            colorBack.style.backgroundColor = `#fbab3b94`;
            sectionNode.classList.remove(`appear-anim-left`);
            sectionNode.classList.add(`appear-anim-right`);
            textNode.classList.remove(`appear-anim-left`);
            textNode.classList.add(`appear-anim-right`);
            sectionNode.innerHTML = sec1;
            textMobNode.innerHTML = footerText1;
            textNode.innerHTML = footerText1;
            rightBtn.disabled = false;
            break;

    }   

});

rightBtn.addEventListener(`click`, function () {
    if (page < 2) {
        page++;
    }
    switch (page) {
        case 1:
            colorBack.style.backgroundColor = `#fbab3b94`;
            sectionNode.classList.remove(`appear-anim-left`);
            sectionNode.classList.add(`appear-anim-right`);
            textNode.classList.remove(`appear-anim-left`);
            textNode.classList.add(`appear-anim-right`);
            sectionNode.innerHTML = sec1;
            textNode.innerHTML = footerText1;
            textMobNode.innerHTML = footerText1;
            leftBtn.disabled = false;
            break;
        case 2:
            colorBack.style.backgroundColor = `#fecab894`;
            sectionNode.classList.remove(`appear-anim-right`);
            sectionNode.classList.add(`appear-anim-left`);
            textNode.classList.remove(`appear-anim-right`);
            textNode.classList.add(`appear-anim-left`)
            sectionNode.innerHTML = sec2;
            textNode.innerHTML = footerText2;
            rightBtn.disabled = true;
            textMobNode.innerHTML = footerText2;
            ArrowR.classList.remove(`btn_translate-rigth`);
            break;
    }

});