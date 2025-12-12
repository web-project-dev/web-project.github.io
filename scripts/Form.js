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
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.formElement = this.rootElement.querySelector(this.selectors.form)
        this.closeFormButtonElement = this.rootElement.querySelector(this.selectors.closeFormButton)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.applicationsButtonElements = this.rootElement.querySelectorAll(this.selectors.applicationsButton)
        this.bindElements()
    }

    onApplicationsButtonClick = () => {
        this.formElement.classList.add(this.stateClasses.isActive)
        this.overlayElement.classList.add(this.stateClasses.isActive)
        document.documentElement.classList.add(this.stateClasses.isLock) 
    }

    offApplicationsButtonClick = () => {
        this.formElement.classList.remove(this.stateClasses.isActive)
        this.overlayElement.classList.remove(this.stateClasses.isActive)
        document.documentElement.classList.remove(this.stateClasses.isLock) 
    }

    bindElements() {
        // Обработчики для всех кнопок с data-js-applications
        this.applicationsButtonElements.forEach(button => {
            button.addEventListener('click', this.onApplicationsButtonClick)
        })
        
        this.overlayElement.addEventListener('click', this.offApplicationsButtonClick)
        this.closeFormButtonElement.addEventListener('click', this.offApplicationsButtonClick)
    }
}

export default Form;