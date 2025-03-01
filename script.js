let esqueleto = "off"; // Estado inicial del esqueleto
let esqueletoStop = document.getElementById("esqueletoQuieto"); // Selecciona el div del esqueleto
let botonSonido = new Audio ("./sound/botonbailar.mp3")
let botonAudio  = new Audio ("./sound/audio.mp3")

function Bailar() {
    // Comprueba si el esqueleto está apagado
    if (esqueleto == "off") {
        esqueleto = "on"; // Cambia el estado a "on"
        esqueletoStop.classList.add("on"); // Añade clase para cambiar la imagen del esqueleto
        // Reproduce sonido al hacer clic
        esqueletoStop.addEventListener("click", () => {
            botonSonido.play();
        });
        // Reproduce el audio de fondo al hacer clic
        esqueletoStop.addEventListener('click', () => {
            botonAudio.play();
        });

        // console.log("on"); // Línea comentada para borrar
    } else {
        esqueleto = "off"; // Cambia el estado a "off"
        esqueletoStop.classList.remove("on"); // Elimina la clase para volver a la imagen inicial
        // Pausa el audio de fondo al hacer clic
        esqueletoStop.addEventListener('click', () => {
            botonAudio.pause();
        });

        // console.log("off"); // Línea comentada para borrar 
    }
}
