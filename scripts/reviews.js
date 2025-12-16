
const list = document.getElementById('reviewsList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.reviews__item');

let index = 0;
const total = slides.length;

function updateSlider() {
list.style.transform = 'translateX(-' + (index * 100) + '%)';
prevBtn.disabled = index === 0;
nextBtn.disabled = index === total - 1;
}

prevBtn.addEventListener('click', function () {
if (index > 0) {
    index--;
    updateSlider();
}
});

nextBtn.addEventListener('click', function () {
if (index < total - 1) {index++;
    updateSlider();
}
});

updateSlider();