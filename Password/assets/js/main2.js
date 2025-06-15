function verificarPassword() {
  const digito1 = document.getElementById("digit1").value;
  const digito2 = document.getElementById("digit2").value;
  const digito3 = document.getElementById("digit3").value;

  const password = digito1 + digito2 + digito3;
  const mensaje = document.getElementById("mensaje");

  if (password === "911") {
    mensaje.textContent = "Acceso permitido: ¡Bienvenido/a al Club de Fans - Nivel 1!";
    mensaje.style.color = "lightgreen";
  } else if (password === "714") {
    mensaje.textContent = "Acceso permitido: ¡Bienvenido/a al Club de Fans - Nivel 2!";
    mensaje.style.color = "lightgreen";
  } else {
    mensaje.textContent = "Acceso denegado: código incorrecto.";
    mensaje.style.color = "salmon";
  }
}
