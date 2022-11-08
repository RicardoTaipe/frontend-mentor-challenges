const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const cardResult = document.querySelector('.card-result');
const rating = document.querySelectorAll('.rating-choice');
const submitBtn = document.querySelector('.card-btn');
const snackBar = document.getElementById("snackbar");
let selectedValue = -1;

rating.forEach((choice) => {
  choice.onclick = () => {
    selectedValue = +choice.innerHTML;

    choice.classList.add('selected');

    resetButtons();
  };
});

submitBtn.onclick = () => {
  if (selectedValue === -1) {
    showSnackbar('Select an option!');
    return;
  }
  hide(cardFront);
  hide(cardBack);
  cardResult.innerHTML = `You selected ${selectedValue} out of 5`;
};

cardBack.onclick = () => {
  hide(cardFront);
  hide(cardBack);
};

function showSnackbar(message) {
  snackBar.innerHTML = message
  snackBar.classList.toggle("show")
  setTimeout(() => { snackBar.classList.toggle("show"); }, 2000);
}

function resetButtons() {
  rating.forEach((choice, index) => {
    if (index !== selectedValue - 1) {
      choice.classList.remove('selected');
    }
  });
}

function hide(element) {
  element.classList.toggle('hide');
}
