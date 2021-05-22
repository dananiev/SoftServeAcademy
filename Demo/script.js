// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})




// Read More, Read Less function
const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText === 'Read More') {
        readMoreBtn.innerText = 'Read Less';
    } else {
        readMoreBtn.innerText = 'Read More';
    }
})




// Gallery Slider Function
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show previous image
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next image
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();




// Show Scroll Top Function
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener('click', () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
})




// Home Page Text Animation
const textAnimation = document.querySelector(".text-animation");
const strTextAnimation = textAnimation.textContent;
const splitTextAnimation = strTextAnimation.split("");

textAnimation.textContent = "";

for (let i = 0; i < splitTextAnimation.length; i++) {
  textAnimation.innerHTML += "<span>" + splitTextAnimation[i] +  "</span>";
}

let char = 0;
let timer = setInterval(textFade, 50);

function textFade() {
  const span = textAnimation.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if (char === splitTextAnimation.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}



// Light/Dark Toggle Button
const checkbox = document.getElementById('checkbox');
const aboutPage = document.getElementById('about');

checkbox.addEventListener('change', () => {
    aboutPage.classList.toggle('dark');
})