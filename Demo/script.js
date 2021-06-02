// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})



const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })

  navLi.forEach( li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  })
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
    return timer;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}



// Light/Dark Toggle Button
const checkbox = document.getElementById('checkbox');
const aboutPage = document.getElementById('li-about');

checkbox.addEventListener('change', () => {
    aboutPage.classList.toggle('dark');
})




// Counting Remaining Characters in Textarea Function
const myTextArea = document.querySelector('.contact-in-textarea');
const remainingChars = document.querySelector('#count-remaining-characters');
const maxChars = 250;

myTextArea.addEventListener('input', () => {
  const remaining = maxChars - myTextArea.value.length;
  const color = remaining < maxChars * 0.1 ? 'red' : null; 

  remainingChars.textContent = `${remaining} characters remaining`;
  remainingChars.style.color = color;
})

function eraseText() {
  myTextArea.value = '';
}
eraseText();




// Academics Flip Functions
$("#advertising").on("click", () => {
  $("#advertising").toggleClass("flipping");
});

$("#entertainment-design").on("click", () => {
  $("#entertainment-design").toggleClass("flipping");
});

$("#environmental-design").on("click", () => {
  $("#environmental-design").toggleClass("flipping");
});

$("#film").on("click", () => {
  $("#film").toggleClass("flipping");
});

$("#fine-art").on("click", () => {
  $("#fine-art").toggleClass("flipping");
});

$("#graphic-design").on("click", () => {
  $("#graphic-design").toggleClass("flipping");
});

$("#illustration").on("click", () => {
  $("#illustration").toggleClass("flipping");
});

$("#interaction-design").on("click", () => {
  $("#interaction-design").toggleClass("flipping");
});

$("#photography").on("click", () => {
  $("#photography").toggleClass("flipping");
});

$("#product-design").on("click", () => {
  $("#product-design").toggleClass("flipping");
});

$("#transportation-design").on("click", () => {
  $("#transportation-design").toggleClass("flipping");
});