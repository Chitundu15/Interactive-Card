function displayDetailsOnDesktop(event){
    event.preventDefault();
    let holderName = document.querySelector("#user-name-desktop")
    let cardHolderInput = document.querySelector("#holder-name-desktop")
    let monthInput = document.querySelector("#month-desktop");
    let yearInput = document.querySelector("#year-desktop");
    let monthAndYear = document.querySelector("#month-year-desktop")
    let cardNumber = document.querySelector("#account-number-desktop")
    let cardNumberInput = document.querySelector("#card-number-desktop")
    holderName.innerHTML = `${cardHolderInput.value}`;
    let date =`${monthInput.value}/${yearInput.value}`;
    alert(date)
    monthAndYear.innerHTML = date;
    cardNumber.innerHTML = cardNumberInput.value;
}
let button = document.querySelector("#form-on-desktop")
button.addEventListener("submit", displayDetailsOnDesktop)