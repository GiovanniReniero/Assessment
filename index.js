document.addEventListener("click", (event) => {
  const isDropdownButton = event.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && event.target.closest("[data-dropdown]") != null) {
    return;
  }
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = event.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) {
      return;
    }
    dropdown.classList.remove("active");
  });
});

// TOGGLE MENU
const toggle_button = document.querySelector(".toggle-button");
const links = document.querySelectorAll(".link");

toggle_button.addEventListener("click", () => {
  console.log("Hey Gio!");
  links.forEach((link) => {
    link.classList.toggle("active");
  });
});

// Text Spin

const array = [
  "Business",
  "Corporate",
  "Tailored",
  "Scalable",
  "Affordable",
  "Effective",
];
// console.log(textSpin.innerHTML);

setInterval(() => {
  const textSpin = document.querySelector(".text-spin");
  const cText = textSpin.innerHTML;
  console.log(cText);
  const idx = array.indexOf(cText);
  const nextIdx = (idx + 1) % array.length;
  console.log(nextIdx);
  textSpin.innerHTML = array[nextIdx];
}, 3000);
