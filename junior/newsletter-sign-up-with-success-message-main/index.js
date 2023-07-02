const submitButton = document.getElementById("submit");
const email = document.getElementById("mail");
const emailError = document.getElementById("email-error");
const successMessage = document.getElementById("success-message");
const signUp = document.getElementById("sign-up");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
  } else {
    emailError.classList.add("hidden");
    successMessage.classList.remove("hidden");
    signUp.classList.replace("flex", "hidden");
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Valid email required";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  }

  // Set the styling appropriately
  emailError.classList.remove("hidden");
}
