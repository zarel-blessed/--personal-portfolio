const hotdogIcon = document.querySelector(".hotdog-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".logo");

hotdogIcon.addEventListener("click", () => {
  logo.classList.toggle("change-form");
  hotdogIcon.classList.toggle("change-form");
  mobileMenu.classList.toggle("active");
});
