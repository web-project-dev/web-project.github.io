import scrollLock from './scrollLock.js'

class Header {
    selectors = {
        root: '.header',
        overlay: '.header__overlay',
        burgerButton: '.burger-button',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        
        if (!this.overlayElement || !this.burgerButtonElement) return
        
        this.bindElements()
    }

    toggleBurger = () => {
        const isActive = this.overlayElement.classList.contains(this.stateClasses.isActive)

        if (isActive) {
            this.closeBurger()
        } else {
            this.openBurger()
        }
    }

    openBurger() {
        this.overlayElement.classList.add(this.stateClasses.isActive)
        this.burgerButtonElement.classList.add(this.stateClasses.isActive)
        if (scrollLock && scrollLock.lock) scrollLock.lock()
    }

    closeBurger() {
        this.overlayElement.classList.remove(this.stateClasses.isActive)
        this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
        if (scrollLock && scrollLock.unlock) scrollLock.unlock()
    }

    bindElements() {
        this.burgerButtonElement.addEventListener('click', this.toggleBurger)
        
        // Закрытие при клике на оверлей
        this.overlayElement.addEventListener('click', (e) => {
            if (e.target === this.overlayElement) {
                this.closeBurger()
            }
        })
        
        // Закрытие при клике на ссылки внутри оверлея
        const overlayLinks = this.overlayElement.querySelectorAll('a')
        overlayLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeBurger()
            })
        })
    }
}

export default Header