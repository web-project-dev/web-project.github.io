document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.stages__list-item');
    const arrows = document.querySelectorAll('.stages-arrow'); 
    
    listItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Закрываем все остальные элементы
            listItems.forEach((otherItem, otherIndex) => {
                if (otherItem !== this) {
                    const otherHidden = otherItem.querySelector('.stages__list-item-hidden');
                    otherHidden.classList.remove('active');
                    otherItem.classList.remove('active');
                    arrows[otherIndex]?.classList.remove('active'); 
                }
            });
            
            // Открываем/закрываем текущий
            const hiddenText = this.querySelector('.stages__list-item-hidden');
            hiddenText.classList.toggle('active');
            this.classList.toggle('active');
            arrows[index]?.classList.toggle('active'); 
        });
    });
});