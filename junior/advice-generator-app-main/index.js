const button = document.querySelector('.card-btn');
const title = document.querySelector('.card-title');
const quote = document.querySelector('.quote');

fetchQuote(71)
  .then((data) => {
    updateView(data);
  })
  .catch(() => {});

button.addEventListener('click', async () => {
  fetchQuote()
    .then((data) => {
      updateView(data);
    })
    .catch(() => {});
});

function updateView(data) {
  title.innerHTML = `ADVICE #${data.id}`;
  quote.innerHTML = data.advice;
}

async function fetchQuote(slip_id) {
  let url = 'https://api.adviceslip.com/advice';

  if (slip_id !== undefined) {
    url = `https://api.adviceslip.com/advice/${slip_id}`;
  }
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const { slip: data } = await response.json();
  return data;
}
