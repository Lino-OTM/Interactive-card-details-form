//Front card components
const cardNumber     = document.querySelector(".card-section__front-card-number"),
      cardHolder     = document.querySelector(".card-section__front-card-cardholder"),
      cardMonth      = document.querySelector(".card-section__front-card-month"),
      cardYear       = document.querySelector(".card-section__front-card-year"),
//Back card components
      cardCvc        = document.querySelector(".card-section__back-card-cvc"),
//Inputs
      cardForm       = document.querySelector(".form-section__form"),
      nameInput      = document.querySelector(".form-section__cardholder-input"),
      numberInput    = document.querySelector(".form-section__card-number-input"),
      monthInput     = document.querySelector(".form-section__card-exp-date-input"),
      yearInput      = document.querySelector(".form-section__card-month-year-input"),
      cvcInput       = document.querySelector(".form-section__card-cvc-input"),
      submitBtn      = document.querySelector(".form-section__submit-btn"),
//Errors
      nameError      = document.querySelector(".form-section__name-error"),
      numberError    = document.querySelector(".form-section__card-number-error"),
      dateError      = document.querySelectorAll(".form-section__details-error"), // Posicion 1 y 2
// Completed state
      completedState = document.querySelector(".form-section__completed-container");

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameValue = nameInput.value.length;
  let numberValue = numberInput.value.length;
  let monthValue = monthInput.value.length;
  let yearValue = yearInput.value.length;
  let cvcValue = cvcInput.value.length;

  if(nameValue >= 2 && numberValue >= 16 && monthValue >= 2 && yearValue >= 2 && cvcValue >= 3) {
    cardForm.style.display = "none";
    completedState.style.display = "flex";
  }

  // Name input error
  if (nameValue < 2) {
    nameInput.classList.add("border-error");
    nameError.style.opacity = 1;
  } else {
    nameInput.classList.remove("border-error");
    nameError.style.opacity = 0;
  }

  // Number input error
  if (numberValue < 16) {
    numberInput.classList.add("border-error");
    numberError.style.opacity = 1;
  } else {
    numberInput.classList.remove("border-error");
    numberError.style.opacity = 0;
  }

  // Month and Year error
  if (monthValue < 2 || yearValue < 2) {
    dateError[0].style.opacity = 1;
  } else {
    dateError[0].style.opacity = 0;
  }

  // Month input error
  if (monthValue < 2) {
    monthInput.classList.add("border-error");
  } else {
    monthInput.classList.remove("border-error");
  }

  // Year input error
  if (yearValue < 2) {
    yearInput.classList.add("border-error");
  } else {
    yearInput.classList.remove("border-error");
  }

  // CVC input error
  if (cvcValue < 3) {
    cvcInput.classList.add("border-error");
    dateError[1].style.opacity = 1;
  } else {
    cvcInput.classList.remove("border-error");
    dateError[1].style.opacity = 0;
  }
});

// Función para evitar que se escriban numeros en el input del nombre.
// El maxLength del input esta puesto como atributo en el HTML.
nameInput.addEventListener("keydown", (e) => {
  let nameRegex = /[a-zA-Z ]/;

  if (!e.key.match(nameRegex)) {
    e.preventDefault();
  }
});

// Funcion para permitir que solo se escriban numeros en el input de los numeros (Y se utilizen las flechas y backspace).
const validateNumber = (e) => {
  numberRegex = /[0-9]/;
  if (
    !e.key.match(numberRegex) &&
    e.key != "Backspace" &&
    e.key != "ArrowLeft" &&
    e.key != "ArrowRight"
  ) {
    e.preventDefault();
  }
};

numberInput.addEventListener("keydown", validateNumber);
monthInput.addEventListener("keydown", validateNumber);
yearInput.addEventListener("keydown", validateNumber);
cvcInput.addEventListener("keydown", validateNumber);

const setName = () => {
  cardHolder.innerHTML = nameInput.value;
};

const setNumber = () => {
  cardNumber.innerHTML = numberInput.value;
};

const setMonth = () => {
  cardMonth.innerHTML = monthInput.value;
};

const setYear = () => {
  cardYear.innerHTML = yearInput.value;
};

const setCvc = () => {
  cardCvc.innerHTML = cvcInput.value;
};
nameInput.addEventListener("keyup", setName);
numberInput.addEventListener("keyup", setNumber);
monthInput.addEventListener("keyup", setMonth);
yearInput.addEventListener("keyup", setYear);
cvcInput.addEventListener("keyup", setCvc);

numberInput.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  numberInput.value = inputValue
    .replace(/\s/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();
});
