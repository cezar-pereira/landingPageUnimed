let offsetCarousel = document.querySelector('#offset-carousel');

// let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let sizeScreen = window.screen.width;
let isMobile = sizeScreen <= 1200 ? true : false ;
console.log(sizeScreen);
let carouselMobile = document.querySelector('#carousel-mobile');
let carouselDesktop = document.querySelector('#carousel-desktop');

let currentCarousel = 0;
let carousel = isMobile ? carouselMobile : carouselDesktop;
let carouselButtonBack = document.querySelector('#carousel-button-back');

showHideGroupItem();
createListCircles();
markCircles();

if(isMobile){
    console.log('is mobile');
}

function nextCarousel(){
    if(currentCarousel == carousel.children[0].children.length - 1){
        currentCarousel = 0;
        carouselButtonBack.className = 'carousel-button-back-disabled';
    }else {
        currentCarousel++;
        carouselButtonBack.className = 'carousel-button-back-enabled';
    }
    showHideGroupItem();
    markCircles();
    offsetCarousel.scrollIntoView();
}

function backCarousel() {
    if(currentCarousel == 0)
        return;
    else{
        currentCarousel--;
        if(currentCarousel == 0)
            carouselButtonBack.className = 'carousel-button-back-disabled';
        showHideGroupItem();
    }
    markCircles();
    offsetCarousel.scrollIntoView();
}

function showHideGroupItem() {
    for (let index = 0; index < carousel.children[0].children.length; index++) {
        if(currentCarousel == index)
            carousel.children[0].children[index].style.display = 'block';
        else
            carousel.children[0].children[index].style.display = 'none';  
    }
}

function createListCircles(){
    let containerCircles = carousel.children[2];

    for (let index = 1; index <= carousel.children[0].children.length; index++) {
        const div = document.createElement('div');
        div.className = 'carousel-circle-disabled';
        containerCircles.appendChild(div);
    }
}

function markCircles(){
    let containerCircles = carousel.children[2];
    for (let index = 0; index < containerCircles.children.length; index++) {
        if(index == currentCarousel)
            containerCircles.children[index].className = 'carousel-circle-activated';
        else    
            containerCircles.children[index].className = 'carousel-circle-disabled';
    }
}