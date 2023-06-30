const dayError = document.querySelector("#day-error");
const monthError = document.querySelector("#month-error");
const yearError = document.querySelector("#year-error");
const dayText = document.querySelector("label[for=day]");
const monthText = document.querySelector("label[for=month]");
const yearText = document.querySelector("label[for=year]");
const daysResult = document.querySelector("#days-result");
const monthsResult = document.querySelector("#months-result");
const yearsResult = document.querySelector("#years-result");
const form = document.getElementById("form");

const isValidRange = (min, max, value) => value >= min && value <= max;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { day: dayInput, month: monthInput, year: yearInput } = form;

  validateInputField(dayError, dayText, dayInput, {
    "The field is required": dayInput.value,
    "Must be a valid day": isValidRange(1, 31, dayInput.value),
  });

  validateInputField(monthError, monthText, monthInput, {
    "The field is required": monthInput.value,
    "Must be a month": isValidRange(1, 12, monthInput.value),
  });

  validateInputField(yearError, yearText, yearInput, {
    "The field is required": yearInput.value,
    "Must be in the past": new Date().getFullYear() >= Number(yearInput.value),
  });

  if (yearInput.value && monthInput.value && dayInput.value) {
    showResult(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
  }
});

function showResult(date) {
  const todayDate = moment(); //todays date
  const birthdayDate = moment(date);
  if (!birthdayDate.isValid) {
    showError(dayError, dayText, dayInput, "Must be a valid date");
    showError(monthError, monthText, monthInput, "");
    showError(yearError, yearText, yearInput, "");
    return;
  }
  const diffTime = moment.preciseDiff(birthdayDate, todayDate, true);
  yearsResult.textContent = diffTime.years;
  monthsResult.textContent = diffTime.months;
  daysResult.textContent = diffTime.days;
}

function showError(error, text, input, message) {
  error.classList.remove("hidden");
  error.textContent = message;
  text.classList.add("text-red");
  input.classList.add("border-red");
}

function validateInputField(error, text, input, isValid) {
  for (const message in isValid) {
    if (!isValid[message]) {
      showError(error, text, input, message);
      break;
    } else {
      error.classList.add("hidden");
      text.classList.remove("text-red");
      input.classList.remove("border-red");
    }
  }
}
