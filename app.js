
function openCakes(){
    let inside = document.getElementById("inside");
    if(inside.style.display === "none"){
        inside.style.display = "block";
        inside.style.display = "inline-block";  
    }else{
        inside.style.display = "none";
    }
}

function openCupcakes() {
  let moreCupcakesDiv = document.querySelector(".moreCupcakes");
  if (moreCupcakesDiv.style.display === "none") {
    moreCupcakesDiv.style.display = "inline-block";
} else {
    moreCupcakesDiv.style.display = "none";
  }
}


function openCoffeeDrinks() {
    let moreImagesDiv = document.getElementById("moreImages");
    if (moreImagesDiv.style.display === "none") {
      moreImagesDiv.style.display = "block";
      moreImagesDiv.style.display = "inline-block";
      moreImagesDiv.style.fontSize = "20px";
      moreImagesDiv.style.fontWeight = "bold";
    } else {
      moreImagesDiv.style.display = "none";
    }
}

function show(){
    alert("Thanks for your Input");
}

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}







