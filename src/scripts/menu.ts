let menuIsOpen = false;

const toogleMenu = (): void => {
  const menu = document.querySelector(".menu-dropdown");

  if (!menuIsOpen) {
    menu?.classList.remove("hidden");
    menuIsOpen = true;
  } else {
    menu?.classList.add("hidden");
    menuIsOpen = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".hamburger");
  menu?.addEventListener("click", toogleMenu);
});