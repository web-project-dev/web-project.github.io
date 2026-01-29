// Находим ВСЕ ссылки навигации по их классам
const nav1 = document.querySelectorAll('.nav-1')
const nav2 = document.querySelectorAll('.nav-2')
const nav3 = document.querySelectorAll('.nav-3')
const nav4 = document.querySelectorAll('.nav-4')

// Функция для закрытия бургер-меню
function closeBurgerMenu() {
    const overlay = document.querySelector('.header__overlay')
    const burgerBtn = document.querySelector('.burger-button')
    
    if (overlay) overlay.classList.remove('is-active')
    if (burgerBtn) burgerBtn.classList.remove('is-active')
}

// Функция для плавного скролла
function smoothScrollTo(target) {
    const element = document.querySelector(target)
    if (!element) return
    
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    })
}

// Настраиваем обработчики для всех ссылок
function setupNavigation() {
    // Для .nav-1 → .hero
    nav1.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScrollTo('.hero')
            closeBurgerMenu()
        })
    })
    
    // Для .nav-2 → .stages
    nav2.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScrollTo('.stages')
            closeBurgerMenu()
        })
    })
    
    // Для .nav-3 → .prices
    nav3.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScrollTo('.prices')
            closeBurgerMenu()
        })
    })
    
    // Для .nav-4 → .reviews
    nav4.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScrollTo('.reviews')
            closeBurgerMenu()
        })
    })
}

// Запускаем после загрузки страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavigation)
} else {
    setupNavigation()
}