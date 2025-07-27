document.addEventListener('DOMContentLoaded', ()=> {
const buttons = document.querySelectorAll('.button');

const lastClickedHref = localStorage.getItem('lastClickedHref');

if (lastClickedHref) {
buttons.forEach(button => { 
if (button.getAttribute('href') === lastClickedHref) {
button.ClassList.add('active');
}
});
}

buttons.forEach(button => {
button.addEventListener ('click', () => {
const href = button.getAttribute('href');
localStorage.setItem('lastClickedHref', href);
});
});
});


