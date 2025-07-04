// --- Validación de formulario de contacto ---
// Este script valida el formulario de contacto y muestra mensajes de error debajo de cada campo.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("footer form");

  // Crea contenedores de error debajo de cada campo si no existen
  ["nombre", "email", "mensaje"].forEach(id => {
    let input = form.querySelector(`#${id}`);
    if (input && !input.nextElementSibling?.classList?.contains("error-msg")) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-msg";
      errorDiv.style.color = "#d32f2f";
      errorDiv.style.fontSize = "0.95em";
      errorDiv.style.marginBottom = "0.5em";
      input.insertAdjacentElement("afterend", errorDiv);
    }
  });

  // Validación al enviar el formulario
  form.addEventListener("submit", function (event) {
    let errores = 0;

    // Limpia mensajes de error previos
    form.querySelectorAll(".error-msg").forEach(div => div.textContent = "");

    // Validación de nombre
    const nombre = form.querySelector("#nombre");
    if (nombre.value.trim() === "") {
      nombre.nextElementSibling.textContent = "El nombre es obligatorio.";
      errores++;
    }

    // Validación de email
    const email = form.querySelector("#email");
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.nextElementSibling.textContent = "El correo electrónico no es válido.";
      errores++;
    }

    // Validación de mensaje
    const mensaje = form.querySelector("#mensaje");
    if (mensaje.value.trim() === "") {
      mensaje.nextElementSibling.textContent = "El mensaje no puede estar vacío.";
      errores++;
    }

    if (errores > 0) {
      event.preventDefault(); // Cancela el envío si hay errores
    } else {
      event.preventDefault(); // Quita esta línea si quieres enviar realmente el formulario
      form.reset();
      form.querySelectorAll(".error-msg").forEach(div => div.textContent = "");
      alert("¡Mensaje enviado correctamente!");
    }
  });
});