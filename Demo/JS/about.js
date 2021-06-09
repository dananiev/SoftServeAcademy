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


// Light/Dark Toggle Button
const checkbox = document.getElementById('checkbox');
const aboutPage = document.getElementById('li-about');

checkbox.addEventListener('change', () => {
    aboutPage.classList.toggle('dark');
})