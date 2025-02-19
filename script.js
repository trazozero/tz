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
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let images = []; // Guardará todas las imágenes del portafolio
let currentIndex = 0; // Índice de la imagen actual

// Capturar todas las imágenes dentro de la galería
document.querySelectorAll(".portafolio-item img").forEach((img, index) => {
    images.push(img.src);
    img.addEventListener("click", function () {
        openModal(index);
    });
});

// Función para abrir el modal y mostrar la imagen seleccionada
function openModal(index) {
    modal.style.display = "flex";
    modalImg.src = images[index];
    currentIndex = index;
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Funciones para cambiar imagen
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Ciclo infinito
    modalImg.src = images[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Ciclo infinito
    modalImg.src = images[currentIndex];
}

// Eventos de los botones
closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

// Control con teclas del teclado
document.addEventListener("keydown", function (e) {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
            showPrevImage();
        } else if (e.key === "ArrowRight") {
            showNextImage();
        } else if (e.key === "Escape") {
            closeModal();
        }
    }
});

// Cerrar modal si se hace clic fuera de la imagen
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

