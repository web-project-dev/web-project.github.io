const heroText = document.querySelectorAll('.hero__body');
const metricsText = document.querySelectorAll('.metrics__list');
const resourcesText = document.querySelectorAll('.resources-preview');

function heroTextItems() {
    heroText.forEach(item => {
        item.classList.add('is-visible');
    });
}

function metricsTextItems() {
    metricsText.forEach(item => {
        item.classList.add('is-visible'); 
    });
}

function resourcesTextItems() {
    resourcesText.forEach(item => {
        item.classList.add('is-visible');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    heroTextItems();
    metricsTextItems();
    resourcesTextItems();
});