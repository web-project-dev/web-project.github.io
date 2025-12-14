import scrollLock from './scrollLock.js'

class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-overlay]',
        burgerButton: '[data-js-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
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
        scrollLock.lock()
    }

    closeBurger() {
        this.overlayElement.classList.remove(this.stateClasses.isActive)
        this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
        scrollLock.unlock()
    }

    bindElements() {
        this.burgerButtonElement.addEventListener('click', this.toggleBurger)
        this.overlayElement.addEventListener('click', this.closeBurger)
    }
}

export default Header