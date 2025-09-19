var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me imaginé que funcionaba así", time: 0 },
  { text: "no buscaba amor, sin embargo te encontré", time: 0.2 },
  { text: "Y un día te encontré, estaba vivo pero con vos comencé a vivir", time: 2.1 },
  { text: "Fuiste una bendición, me queda agradecer", time: 6 },
  { text: "Sos ese cuento del que no quiero saber final", time: 9.1 },
  { text: "Ese cometa que tuve suerte de presenciar", time: 12 },
  { text: "El mundo es feo y su pasado provocó ansiedad", time: 14.2 },
  { text: "Me iré al infierno pero en tierra", time: 18 },
  { text: "Si algún día de estos se hace gris tu cielo", time: 20.3 },
  { text: "Lo pintarás mirando un río", time: 23.1 },
  { text: "Las lágrimas y el frío te hicieron de hielo", time: 26.1 },
  { text: "Y daré la piel, pa' servir de abrigo", time: 29.1 },
  { text: "Y aunque el orgullo a veces ocultó mis miedo", time: 32.3 },
  { text: "Temo a caer y que no estés conmigo", time: 35.1 },
  { text: "Te ofrezco amor real de un corazón sincero", time: 37.2 },
  { text: "Y quema la llave que abrió el laberinto", time: 40.2 },
  { text: "Si algún día de estos se hace gris tu cielo", time: 43.1 },
  { text: "Lo pintarás mirando un río", time: 46.2 },
  { text: "Las lágrimas y el frío te hicieron de hielo", time: 50 },
  { text: "Y daré la piel, pa' servir de abrigo", time: 52.1 },
  { text: "Y aunque el orgullo a veces ocultó mis miedo", time: 53.9 },
  { text: "Temo a caer y que no estés conmigo", time: 59 },
  { text: "Te ofrezco amor real de un corazón sincero", time: 61.4 },
  { text: "Y quema la llave que abrió el laberinto", time: 65 },
 
];

function updateLyrics(){
    var time = Math.floor(audio.currentTime);
    var currentLine=lyricsData.find(
        (line)=>time >=line.time && time < line.time+3
    );

    if(currentLine){
      var fadeInDuration=0.1;
      var opacity=Math.min(1, (time -currentLine.time)/fadeInDuration);

      // Aplica el efecto de aparición
lyrics.style.opacity = opacity;
lyrics.innerHTML = currentLine.text;
} else {
// Restablece la opacidad y el contenido si no hay una línea actual
lyrics.style.opacity = 0;
lyrics.innerHTML = "";
}
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la animación */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}
  setTimeout(ocultarTitulo, 216000);