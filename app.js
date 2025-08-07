// Genera un número secreto entre 1 y 10
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

// Variables globales
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

// Asigna texto a un elemento HTML por su ID
function asignarTextoElemento(id, texto) {
  const elementoHTML = document.getElementById(id);
  if (elementoHTML) {
    elementoHTML.innerHTML = texto;
  } else {
    console.warn(`Elemento con id "${id}" no encontrado.`);
  }
}

// Verifica el intento del usuario
function verificarIntento() {
  const inputUsuario = document.getElementById("valorUsuario");
  const numeroDelUsuario = parseInt(inputUsuario.value);

  // Validación de entrada
  if (isNaN(numeroDelUsuario) || numeroDelUsuario < 1 || numeroDelUsuario > 10) {
    asignarTextoElemento("mensaje", "⚠️ Ingresa un número válido entre 1 y 10.");
    inputUsuario.value = "";
    return;
  }

  // Comparación con el número secreto
  if (numeroDelUsuario === numeroSecreto) {
    asignarTextoElemento("mensaje", `🎉 ¡Correcto! Adivinaste en ${intentos} intento(s).`);
  } else {
    const pista = numeroDelUsuario > numeroSecreto
      ? "🔽 El número secreto es menor."
      : "🔼 El número secreto es mayor.";
    asignarTextoElemento("mensaje", pista);
    intentos++;
  }

  inputUsuario.value = "";
}

// Reinicia el juego
function reiniciarJuego() {
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  asignarTextoElemento("mensaje", " Juego reiniciado. Ingresa un número del 1 al 10.");
  console.log("Número secreto (debug):", numeroSecreto); // Puedes quitar esto si no lo necesitas
}


