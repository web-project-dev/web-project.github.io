class FallingStars {
    constructor() {
        this.container = document.querySelector('.stars');
        this.spawnChance = 0.3;
        this.minSize = 20;
        this.maxSize = 60;
        this.spawnInterval = 100;
        
        this.init();
    }
    
    init() {
        setInterval(() => this.trySpawnStar(), this.spawnInterval);
    }
    
    trySpawnStar() {
        if (Math.random() < this.spawnChance) {
            this.createStar();
        }
    }
    
    createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * (this.maxSize - this.minSize) + this.minSize;
        
        // Случайная позиция в пределах видимой области (0-100vw, 0-100vh)
        const startX = Math.random() * 80; // 0-100% от ширины
        const startY = Math.random() * 100; // 0-100% от высоты
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${startX}vw`; // Используем vw для ширины
        star.style.top = `${startY}vh`;  // Используем vh для высоты
        
        this.container.appendChild(star);
        
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 1500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FallingStars();
});