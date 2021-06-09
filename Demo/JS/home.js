// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})




// Highlight Active Page Navbar
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




// Show Scroll Top Function
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener('click', () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
})