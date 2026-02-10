const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const posisi = section.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            section.classList.add("show");
        }
    });
});
