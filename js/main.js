const formElement = document.querySelector('#form-element');
const usernameElement = document.querySelector('#username');
let message = document.querySelector('.message');

const regEx = /^[a-zA-Z0-9]{6,12}$/;


formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputVal = usernameElement.value;

    if (regEx.test(inputVal)) {
        message.textContent = "Ma'lumot to'g'ri kiritildi";
    }

    else {
        message.textContent = "Ma'lumot noto'g'ri kiritildi. Ma'lumot 6 tadan 12 tagacha bo'lishi va katta va kichik harflar hamda 0 dan 9 gacha raqamlar ishtirok etishi kerak."
    }
})

//live input validation 

formElement.addEventListener('keyup', (e) => {
    if (regEx.test(e.target.value)) {
        usernameElement.setAttribute('class', 'success')
        setTimeout(() => {
            message.textContent = ' ';
        }, 3000);
    }

    else {
        usernameElement.setAttribute('class', 'error')
        setTimeout(() => {
            message.textContent = ' ';
        }, 3000);
    }

})
