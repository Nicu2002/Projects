// set animation menu for burger click
const navSlide = ()=> {
    const burger = document.querySelector("#burger");
    
    burger.addEventListener("click", () => {
        $(".header__menu").toggleClass("inactive__navigation");
            
    });
}

navSlide();

//carousel slider images
const prevBtn = document.querySelector("#prev__btn");
const nextBtn = document.querySelector("#next__btn");

const carouselSlide = document.querySelector(".gallery__container");
const carouselImages = document.querySelectorAll(".gallery__container img");
const carouselFirst = document.querySelector("#carousel__slide")

let counter = 0;
const size = carouselSlide.offsetWidth;
        nextBtn.addEventListener("click", ()=> {
            counter++;
            if(counter < 10) {
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            else {
                counter--;
            }
        });
        
        prevBtn.addEventListener("click", ()=> {
            counter--;
            if(counter >= 0) {
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            else {
                counter++;
            }
        });
