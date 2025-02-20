const button = document.querySelector(".card__btn");
const title = document.querySelector(".card__title");
const quote = document.querySelector(".card__quote");

const init = async () => {
  const data = await fetchQuote(71);
  updateView(data);
};

document.addEventListener("DOMContentLoaded", init);

button.addEventListener("click", async () => {
  const data = await fetchQuote();
  updateView(data);
});

function updateView(data) {
  title.textContent = `ADVICE #${data.id}`;
  quote.textContent = data.advice;
}

async function fetchQuote(slip_id) {
  let url = "https://api.adviceslip.com/advice";
  if (slip_id !== undefined) {
    url = `https://api.adviceslip.com/advice/${slip_id}`;
  }

  button.disabled = true;
  button.classList.add("card__btn--loading");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }
    const { slip: data } = await response.json();
    return data;
  } catch (error) {
    return { id: "error", advice: "Something went wrong! Try again." };
  } finally {
    button.disabled = false;
    button.classList.remove("card__btn--loading");
  }
}
