document.addEventListener("DOMContentLoaded", () => {
    //formularz rejestracyjny

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const emailAdress = document.getElementById("emailAdress");
    const DOB = document.getElementById("DOB");

    //errory
    const nameErr = document.getElementById("wrongName");
    const surnameErr = document.getElementById("wrongSurname");
    const DOBErr = document.getElementById("wrongDOB");
    const emailErr = document.getElementById("wrongEmailAdress");



    //Funkcje pomocnicze walidacji
    const nameRegex = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ\s-]+$/;
    function checkName(name) {
        return nameRegex.test(name.value);
    }

    function checkSurname(surname) {
        return nameRegex.test(surname.value);
    }

    function checkDOB(DOB) {
        return DOB.value !== "";
    }

    function checkEmailAdress(emailAdress) {
        return emailAdress.validity.valid;
    }

    //walidacja danych
    function validateForm() {
        let isValid = true;

        if (!checkName(name)) {
            nameErr.textContent = "Dopuszczalne są jedynie litery, w tym polskie znaki oraz myślniki";
            isValid = false;
        } else {
            nameErr.textContent = "";
        }

        if (!checkSurname(surname)) {
            surnameErr.textContent = "Dopuszczalne są jedynie litery, w tym polskie znaki oraz myślniki";
            isValid = false;
        } else {
            surnameErr.textContent = "";
        }

        if (!checkDOB(DOB)) {
            DOBErr.textContent = "Data urodzenia jest wymagana";
            isValid = false;
        } else {
            DOBErr.textContent = "";
        }

        // Walidacja adresu e-mail (opcjonalny)
        if (!checkEmailAdress(emailAdress)) {
            emailErr.textContent = "Wprowadź poprawny adres e-mail (xxxxxx@xxx.xx).";
            isValid = false;
        } else {
            emailErr.textContent = "";
        }

        return isValid;
    }

    // Funkcja modyfikująca zawartość strony
    function updateContent() {
        const userData = document.getElementById("userData");
        const userContent = `
        Nazwa użytkownika: ${name.value + " " + surname.value}<br>
        Adres e-mail: ${emailAdress.value}<br>
        Data urodzenia: ${DOB.value}
      `;
        userData.innerHTML = userContent;
    }

    // Obsługa wysłania formularza
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Zatrzymanie domyślnego działania
        if (validateForm()) {
            updateContent();
        }
    });
});