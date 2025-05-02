const buttonElement = document.querySelector('button');
const modal =document.getElementById('model');


buttonElement.addEventListener('click',() => {
    modal.style.top = '25%'
})
modal.addEventListener('click',() => {
    modal.style.top = '-65%'
    modal.style.transition = '1s'
})