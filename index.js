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

    const nameError = document.getElementById('nameErrror');
    const numberError = document.getElementById('numberError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        // Validamos los campos
        if(!name.test.trim()) {
            nameError.textContent = 'Can t be blank';
            errorInputs();
            isValid = false;
        } else if() {

        }

        // Validamos las expresiones regulares.
        function isValidlastName(name) {
            const nameRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
            return nameRegex.test(name);
        };

        function isValidnumber(number) {
            const numberRegex = /^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;
            return numberRegex.test(number);
        };

    // Error inputs
    const errorInputs = () => {
        name.style.border = '1px solid red';
    };

    const resetErrors = () => {
        name.style.border = ''; 
    };

    // Quitamos el foco si los campos están llenos
    name.addEventListener('change', resetErrors);
        





        





















































    });

















































});