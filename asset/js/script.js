const navbar = document.querySelector(".nav-container");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      this.window.scrollY || this.document.documentElement.scrollTop;

    if (currentScroll > 0) {
      navbar.classList.add("sticky-top");
    } else {
      navbar.classList.remove("sticky-top");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  false
);

navOpen.addEventListener("click", function () {
  navbar.classList.add("active");
  navClose.classList.remove("d-none");
  this.classList.add("d-none");
});

navClose.addEventListener("click", function () {
  navbar.classList.remove("active");
  navOpen.classList.remove("d-none");
  this.classList.add("d-none");
});
