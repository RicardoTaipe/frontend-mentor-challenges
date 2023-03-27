const data = [
  {
    image: "images/image-tanya.jpg",
    thought:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job    of my dreams and so excited about the future.",
    name: "Tanya Sinclair",
    position: "UX Engineer",
  },
  {
    image: "images/image-john.jpg",
    thought:
      "If you want to lay the best foundation possible I'd recommend taking this    course. The depth the instructors go into is incredible. I now feel so     confident about starting up as a professional developer.",
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
  },
];

const avatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const position = document.getElementById("position");
const thought = document.getElementById("thought");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let userIndex = 0;

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    updateData(--userIndex);
  } else if (event.key == "ArrowRight") {
    updateData(++userIndex);
  }
});
next.addEventListener("click", () => {
  updateData(++userIndex);
});

prev.addEventListener("click", () => {
  updateData(--userIndex);
});

function updateData(index) {
  if (data.length === index) {
    userIndex = 0;
  } else if (index < 0) {
    userIndex = data.length - 1;
  }
  avatar.src = data[userIndex].image;
  thought.innerHTML = data[userIndex].thought;
  position.innerHTML = data[userIndex].position;
  userName.innerHTML = data[userIndex].name;
}
