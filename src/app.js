const cardNumber = document.getElementById("card-number");
const numberInp = document.getElementById("cardnumber");
const nameInp = document.getElementById("cardholder-name");
const cardName = document.getElementById("card-name");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const monthInp = document.getElementById("cards-month");
const yearInp = document.getElementById("cards-year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");
const submitBtn = document.getElementById("submit-btn");
const compeleted = document.querySelector("thankyou-message");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
      nameInp.classList.add('error');
      nameInp.parentElement.classList.add("error-message")
    } else {
      nameInp.classList.remove("error");
      nameInp.parentElement.classList.remove("error-message");
    }
    if (!numberInp.value) {
      numberInp.classList.add('error')
      numberInp.parentElement.classList.add("error-message");
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("error")
    } else {
      numberInp.classList.remove("error");
      numberInp.parentElement.classList.remove("error-message");
    }
    if (!monthInp.value) {
      monthInp.classList.add("error")
      monthInp.parentElement.classList.add("error-message");
    } else {
      monthInp.classList.remove("error");
      monthInp.parentElement.classList.remove("error-message");
    }
    if (!yearInp.value) {
      yearInp.classList.add("error")
      yearInp.parentElement.classList.add("error-message");
    } else {
      yearInp.classList.remove("error");
      yearInp.parentElement.classList.remove("error-message");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("error")
      cvcInp.parentElement.classList.add("error-message");
    } else {
      cvcInp.classList.remove("error");
      cvcInp.parentElement.classList.remove("error-message");
    }
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value &&
      numberInp.value.length == 16
    ) {
      compeleted.classList.remove("completed");
      form.classList.add("completed");
    }
  
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);