const navigation = document.querySelector(".navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");
  const attribute = visibility === "false" ? true : false;
  navigation.setAttribute("data-visible", attribute);
  navToggle.setAttribute("aria-expanded", attribute);
});
