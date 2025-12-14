class ScrollLock {
    lockCount = 0

    lock() {
        this.lockCount += 1
        document.documentElement.classList.add('is-lock')
    }

    unlock() {
        this.lockCount -= 1

        if (this.lockCount <= 0) {
            this.lockCount = 0
            document.documentElement.classList.remove('is-lock')
        }
    }
}

export default new ScrollLock()