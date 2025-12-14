import scrollLock from './scrollLock.js'

class Form {
    selectors = {
        root: '[data-js-body]',
        form: '[data-js-form]',
        applicationsButton: '[data-js-applications]',
        closeFormButton: '[data-js-close-form]',
        overlay: '[data-js-overlay]' 
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.formElement = this.rootElement.querySelector(this.selectors.form)
        this.closeFormButtonElement = this.rootElement.querySelector(this.selectors.closeFormButton)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.applicationsButtonElements = this.rootElement.querySelectorAll(this.selectors.applicationsButton)
        this.bindElements()
    }

    openForm = () => {
        this.formElement.classList.add(this.stateClasses.isActive)
        this.overlayElement.classList.add(this.stateClasses.isActive)
        scrollLock.lock()
    }

    closeForm = () => {
        this.formElement.classList.remove(this.stateClasses.isActive)
        this.overlayElement.classList.remove(this.stateClasses.isActive)
        scrollLock.unlock()
    }

    bindElements() {
        this.applicationsButtonElements.forEach(button => {
            button.addEventListener('click', this.openForm)
        })

        this.closeFormButtonElement.addEventListener('click', this.closeForm)
        this.overlayElement.addEventListener('click', this.closeForm)
    }
}

export default Form