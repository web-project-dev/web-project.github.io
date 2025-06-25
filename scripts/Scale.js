export function initScale() {
    const imgScale = document.querySelector('.home__information-certificate-img')
    const overlay = document.querySelector('.overlay')

    imgScale.onclick = function() {
        imgScale.classList.add('is-active');
        overlay.style.display = 'block';
    }

    overlay.onclick = function() {
        overlay.style.display = 'none';
        imgScale.classList.remove('is-active')
    }
}