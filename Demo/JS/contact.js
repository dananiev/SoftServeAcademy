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