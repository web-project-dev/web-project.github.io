export function initSlider() {
    const slider1 = document.querySelector('.hero__slider-1');
    const slider2 = document.querySelector('.hero__slider-2');

    setTimeout(() => {        
        slider1.style.transform = 'translateX(-100%)';
        slider2.style.transform = 'translateX(-100%)';
    }, 4000); 
    
    setInterval(() => {
        slider1.style.transform = 'translateX(0)';
        slider2.style.transform = 'translateX(0)';
        
        setTimeout(() => {        
            slider1.style.transform = 'translateX(-100%)';
            slider2.style.transform = 'translateX(-100%)';
        }, 4000); 
    }, 8000)
}