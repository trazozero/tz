document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portafolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remueve la clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Mostrar solo las imágenes del filtro seleccionado
            portfolioItems.forEach(item => {
                if (filter === "all") {
                    item.style.display = "flex";  // Muestra todas las imágenes
                } else if (item.classList.contains(filter)) {
                    item.style.display = "flex";  // Muestra solo la categoría seleccionada
                } else {
                    item.style.display = "none";  // Oculta las demás imágenes
                }
            });
        });
    });
});
