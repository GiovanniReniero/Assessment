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
console.log(toggle_button);
const links = document.querySelectorAll(".link");
// console.log(links);

toggle_button.addEventListener("click", () => {
  console.log("Hey Gio!");
  links.forEach((link) => {
    link.classList.toggle("active");
  });
});
