'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const number = document.getElementById('number');
    const date = document.getElementById('date');
    const pin = document.getElementById('pin');

    const cardNumber = document.getElementById('cardNumber');
    const cardName = document.getElementById('cardName');
    const cardDate = document.getElementById('cardDate');

    const nameError = document.getElementById('nameError');
    const numberError = document.getElementById('numberError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Error inputs
        const errorInputs = () => {
            name.style.border = '1px solid red';
        };

        const resetErrors = () => {
            name.style.border = ''; 
        };

        let isValid = true;

        // Validamos los campos
        if(!name.value.trim()) {
            nameError.textContent = "Can't be blank";
            errorInputs();
            isValid = false;
        } else if(!isValidName(name.value.trim())) {
            nameError.textContent = "Can't be blank";
            errorInputs();
        } else {
            nameError.textContent = '';
            cardName.innerHTML = name.value.trim();
            resetErrors();
        };

        name.addEventListener('input', () => {
            nameValue = name.value.trim();

            if (nameValue === '') {
                cardName.innerHTML = "Jane Appleseed";
                nameError.textContent = "Can't be blank";
                name.style.border = '1px solid red';
            } else if(!isValidName(nameValue)) {
                cardName.innerHTML = nameValue;
                nameError.textContent = "Can't be blank";
                name.style.border = '1px solid red';
            } else {
                cardName.innerHTML = nameValue;
                nameError.textContent = '';
                name.style.border = '';
            };
            
        });

        function isValidName(name) {
            const nameRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
            return nameRegex.test(name);
        };

        function isValidnumber(number) {
            const numberRegex = /^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;
            return numberRegex.test(number);
        };

    // Quitamos el foco si los campos están llenos
    name.addEventListener('change', resetErrors);
        





        





















































    });

















































});