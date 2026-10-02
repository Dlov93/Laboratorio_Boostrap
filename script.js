const colores = ["green", "blue", "red"];

// Devuelve uno de los 3 colores al azar
function colorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}

// Aplica un color aleatorio a cada h5 de la página
function aplicarColores() {
    document.querySelectorAll("h5").forEach(function (h5) {
        h5.style.color = colorAleatorio();
    });
}

document.addEventListener("click", function (evento) {
    // Clic en cualquier h5: todos cambian de color
    if (evento.target.closest("h5")) {
        aplicarColores();
    }

    // Clic en una imagen: se escucha la palabra
    const imagen = evento.target.closest("img[data-palabra]");
    if (imagen && "speechSynthesis" in window) {
        const voz = new SpeechSynthesisUtterance(imagen.dataset.palabra);
        voz.lang = "es-ES";
        speechSynthesis.cancel();
        speechSynthesis.speak(voz);
    }
});
