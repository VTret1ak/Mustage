window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger-active");
        menu.classList.toggle("menu-active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger-active");
            menu.classList.toggle("menu-active");
        });
    });
});
