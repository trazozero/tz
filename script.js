document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remueve la clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Filtra los elementos
            portfolioItems.forEach(item => {
                if (filter === "all") {
                    item.style.display = "block";
                } else {
                    item.classList.contains(filter) ? item.style.display = "block" : item.style.display = "none";
                }
            });
        });
    });
});
