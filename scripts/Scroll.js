const nav1 = document.querySelectorAll('.nav-home');
const nav2 = document.querySelectorAll('.nav-services');
const nav3 = document.querySelectorAll('.nav-clients');
const nav4 = document.querySelectorAll('.nav-contacts');

nav1.forEach(item => {
    item.onclick = function() {
        document.querySelector('.home').scrollIntoView({ behavior: 'smooth', block: 'end' });
    };
})


nav2.forEach(item => {
    item.onclick = function() {
        document.querySelector('.services').scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
})

nav3.forEach(item => {
    item.onclick = function() {
        document.querySelector('.clients').scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
})

nav4.forEach(item => {
    item.onclick = function() {
        document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth', block: 'end' });
    };
})
