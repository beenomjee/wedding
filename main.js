// header nav
const openNav = (payload) => {
  payload === "open"
    ? (document.querySelector(".header .nav").style.left = "0px")
    : (document.querySelector(".header .nav").style.left = "-280px");
};

// hero image toggle
const heroImages = document.querySelectorAll(".hero > img");
const heroImagesButtons = document.querySelectorAll(".hero .navigators button");
const changeHeroImage = (num) => {
  heroImages.forEach((currentEl, index) => {
    if (index === num) {
      currentEl.style.display = "inline-block";
      heroImagesButtons[index].classList.add("active");
    } else {
      currentEl.style.display = "none";
      heroImagesButtons[index].classList.remove("active");
    }
  });
};
changeHeroImage(0);
// hero menu
const menus = document.querySelectorAll(".hero .box .buttons div .menu ");
const MenuData = [false, false, false];
const openHeroMenu = (num) => {
  menus.forEach((currentEl, index) => {
    if (index === num && !MenuData[index]) {
      currentEl.style.display = "flex";
      MenuData[index] = true;
    } else {
      currentEl.style.display = "none";
      MenuData[index] = false;
    }
  });
};

Array.from(
  document.querySelectorAll(".hero .box .buttons .menu button")
).forEach((btn) => {
  btn.addEventListener("click", () => {
    openHeroMenu(-1);
  });
});
