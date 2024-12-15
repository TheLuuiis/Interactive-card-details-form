'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const number = document.getElementById('number');
    const dateInputs = document.querySelectorAll('.date');
    const pin = document.getElementById('pin');

    const cardNumber = document.getElementById('cardNumber');
    const cardName = document.getElementById('cardName');
    const cardDate = document.getElementById('cardDate');
    const cardPin = document.getElementById('cardPin');
    const cardPinDate = document.getElementById('cardPinDate'); 

    const nameError = document.getElementById('nameError');
    const numberError = document.getElementById('numberError');
    const dateError = document.getElementById('dateError');
    const pinError = document.getElementById('pinError');

    function isValidName(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    }

    function isValidNumber(number) {
        const numberRegex = /^[0-9\s]{16,19}$/;
        return numberRegex.test(number);
    }

    function isValidMonth(month) {
        return /^[0-9]{2}$/.test(month) && parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12;
    }

    function isValidYear(year) {
        return /^[0-9]{2}$/.test(year);
    }

    function isValidCVC(cvc) {
        const cvcRegex = /^\d{3}$/;
        return cvcRegex.test(cvc);
    }

    name.addEventListener('input', () => {
        const nameValue = name.value.trim();

        if (nameValue === '') {
            cardName.innerHTML = "Jane Appleseed";
            nameError.textContent = "Can't be blank";
            name.style.border = '1px solid red';
        } else if (!isValidName(nameValue)) {
            cardName.innerHTML = nameValue;
            nameError.textContent = 'Invalid format, letters only';
            name.style.border = '1px solid red';
        } else {
            cardName.innerHTML = nameValue;
            nameError.textContent = '';
            name.style.border = '';
        }
    });

    number.addEventListener('input', () => {
        const numberValue = number.value.trim();

        if (numberValue === '') {
            cardNumber.innerHTML = "0000 0000 0000 0000"; 
            numberError.textContent = "Can't be blank";
            number.style.border = '1px solid red';
        } else if (!isValidNumber(numberValue)) {
            cardNumber.innerHTML = numberValue;
            numberError.textContent = 'Invalid format, numbers only';
            number.style.border = '1px solid red';
        } else {
            const formattedNumber = numberValue.replace(/\s+/g, '').replace(/(.{4})/g, '$1 ').trim();
            cardNumber.innerHTML = formattedNumber;
            numberError.textContent = '';
            number.style.border = '';
        }
    });

    dateInputs.forEach((input) => {
        input.addEventListener('input', () => {
            const month = document.querySelector('input[placeholder="MM"]').value.trim();
            const year = document.querySelector('input[placeholder="YY"]').value.trim();

            if (month === '' || !isValidMonth(month)) {
                dateError.textContent = "Invalid month format";
                input.style.border = '1px solid red';
            } else if (year === '' || !isValidYear(year)) {
                dateError.textContent = "Invalid year format";
                input.style.border = '1px solid red';
            } else {
                dateError.textContent = '';
                input.style.border = '';
            };

            cardDate.innerHTML = `${month || '00'}/${year || '00'}`;
        });
    });

    pin.addEventListener('input', () => {
        const pinValue = pin.value.trim();
    
        if (pinValue === '') {
            cardPinDate.textContent = '000'; 
            pinError.textContent = "Can't be blank";
            pin.style.border = '1px solid red';
        } 
        else if (!isValidCVC(pinValue)) {
            cardPinDate.textContent = pinValue; 
            pinError.textContent = 'Invalid format, numbers only';
            pin.style.border = '1px solid red';
        } 
        else {
            cardPinDate.textContent = pinValue;
            pinError.textContent = '';
            pin.style.border = ''; 
        };
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        const nameValue = name.value.trim();
        if (!nameValue) {
            nameError.textContent = "Can't be blank";
            name.style.border = '1px solid red';
            isValid = false;
        } else if (!isValidName(nameValue)) {
            nameError.textContent = 'Invalid format, letters only';
            name.style.border = '1px solid red';
            isValid = false;
        } else {
            nameError.textContent = '';
            name.style.border = '';
        }

        const numberValue = number.value.trim();
        if (!numberValue) {
            numberError.textContent = "Can't be blank";
            number.style.border = '1px solid red';
            isValid = false;
        } else if (!isValidNumber(numberValue)) {
            numberError.textContent = 'Invalid format, numbers only';
            number.style.border = '1px solid red';
            isValid = false;
        } else {
            numberError.textContent = '';
            number.style.border = '';
        }

        dateInputs.forEach((input) => {
            const month = document.querySelector('input[placeholder="MM"]').value.trim();
            const year = document.querySelector('input[placeholder="YY"]').value.trim();

            if (month === '' || !isValidMonth(month)) {
                dateError.textContent = "Invalid month format";
                input.style.border = '1px solid red';
                isValid = false;
            } else if (year === '' || !isValidYear(year)) {
                dateError.textContent = "Invalid year format";
                input.style.border = '1px solid red';
                isValid = false;
            } else {
                dateError.textContent = '';
                input.style.border = '';
            }
        });

        const pinValue = pin.value.trim();
        if (!pinValue) {
            pinError.textContent = "Can't be blank";
            pin.style.border = '1px solid red';
            isValid = false;
        } else if (!isValidCVC(pinValue)) {
            pinError.textContent = 'Invalid format, numbers only';
            pin.style.border = '1px solid red';
            isValid = false;
        } else {
            pinError.textContent = '';
            pin.style.border = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    });
});