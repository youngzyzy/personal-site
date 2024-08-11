document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".mobile-menu-toggle");
  const mobileList = document.querySelector(".mobile-menu-list");
  hamburgerBtn.addEventListener("click", () => {
    mobileList.classList.toggle("active");
  });
});
