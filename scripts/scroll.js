const nav1 = document.querySelectorAll('.nav-1')
const nav2 = document.querySelectorAll('.nav-2')
const nav3 = document.querySelectorAll('.nav-3')
const nav4 = document.querySelectorAll('.nav-4')

const burgerButton = document.querySelector('.burder-button')
const burgerOverlay = document.querySelector('.header-overlay') 


nav1.forEach(item => {
    item.onclick = function() {
        document.querySelector('.hero').scrollIntoView({ behavior: 'smooth', block: 'start' });
        burgerOverlay.classList.remove('is-active')
        burgerButton.classList.remove('is-active')
    };
})

nav2.forEach(item => {
    item.onclick = function() {
        document.querySelector('.stages').scrollIntoView({ behavior: 'smooth', block: 'start' });
        burgerOverlay.classList.remove('is-active')
        burgerButton.classList.remove('is-active')
    };
})

nav3.forEach(item => {
    item.onclick = function() {
        document.querySelector('.prices').scrollIntoView({ behavior: 'smooth', block: 'start' });
        burgerOverlay.classList.remove('is-active')
        burgerButton.classList.remove('is-active')
    };
})

nav4.forEach(item => {
    item.onclick = function() {
        document.querySelector('.reviews').scrollIntoView({ behavior: 'smooth', block: 'center' });
        burgerOverlay.classList.remove('is-active')
        burgerButton.classList.remove('is-active')
    };
})