const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const cardResult = document.querySelector('.card-result');
const rating = document.querySelectorAll('.rating-choice');
const submitBtn = document.querySelector('.card-btn');
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
    alert('Select an option!');
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
