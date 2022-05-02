const openMenu = document.querySelector(".header--menu");
const closeMenu = document.querySelector(".closeIcon");
const activeMenu = document.querySelector(".header--navbar");
const featuresSubmenu = document.querySelector(".featuresSubmenu");
const companySubmenu = document.querySelector(".companySubmenu");

[openMenu, closeMenu].forEach((e) => {
  e.addEventListener("click", () => {
    activeMenu.classList.toggle("menuActive");
    document.querySelector(".overlay").classList.toggle("hidden");
  });
});

[featuresSubmenu, companySubmenu].forEach((e) => {
  e.addEventListener("mouseover", () => {
    const arrowIcon = e.firstElementChild;
    e.children[1].classList.remove("hidden");

    //if (arrowIcon.getAttribute("src").includes("down")) {
    arrowIcon.setAttribute("src", "./images/icon-arrow-up.svg");
    //} else {
    //arrowIcon.setAttribute("src", "./images/icon-arrow-down.svg");
    //}
  });
});

[featuresSubmenu, companySubmenu].forEach((e) => {
  e.addEventListener("mouseout", () => {
    const arrowIcon = e.firstElementChild;
    e.children[1].classList.add("hidden");

    //if (arrowIcon.getAttribute("src").includes("down")) {
    //arrowIcon.setAttribute("src", "./images/icon-arrow-up.svg");
    //} else {
    arrowIcon.setAttribute("src", "./images/icon-arrow-down.svg");
    //}
  });
});
