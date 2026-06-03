const trickButton = document.querySelector(".trick");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

if (trickButton && nav) {
    // Abre/fecha o menu no mobile.
    trickButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

if (header) {
    // Troca o fundo do header quando a página é rolada.
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            return;
        }

        header.classList.remove("scrolled");
    });
}
