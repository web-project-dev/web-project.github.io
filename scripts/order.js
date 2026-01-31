

function initTelegramForm() {
    const succes = document.querySelector('.succes');
    const subButtons = document.querySelectorAll('.submit-button');
    const inputName = document.querySelector('.form-container__item-name');
    const inputPhone = document.querySelector('.form-container__item-phone');

    subButtons.forEach((subButton) => {
        subButton.addEventListener('click', function(e) {
            e.preventDefault();

            let message = 'Заявка с сайта\n' +
                'Имя: ' + inputName.value + '\n' +
                'Номер телефона: ' + inputPhone.value;

            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
            .then((res) => {
                succes.classList.remove('disp');
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                console.log('Скрипт выполнен');
            });
        });
    });
}

