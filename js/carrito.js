// --- Carrito de compra funcional para cursos ---
// Este script gestiona el carrito, confirmaciones y avisos de duplicados.

document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM relacionados con el carrito
  const cartBtn = document.getElementById("cart-btn");
  const cartPanel = document.getElementById("cart-panel");
  const closeCart = document.getElementById("close-cart");
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const checkoutBtn = document.getElementById("checkout-btn");
  let carrito = []; // Array para almacenar los cursos seleccionados

  // Mostrar el panel del carrito al hacer clic en el botón del header
  cartBtn.addEventListener("click", () => cartPanel.style.display = "flex");

  // Ocultar el panel del carrito al hacer clic en la X
  closeCart.addEventListener("click", () => cartPanel.style.display = "none");

  // Agregar cursos al carrito con confirmación y aviso si ya está agregado
  document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const nombre = this.dataset.nombre;
      const precio = parseInt(this.dataset.precio, 10);
      // Buscar si el curso ya está en el carrito
      const idx = carrito.findIndex(item => item.nombre === nombre);

      if (idx >= 0) {
        mostrarMensaje(`El curso "${nombre}" ya está agregado al carrito.`);
        return;
      }

      // Confirmación antes de agregar
      if (confirm(`¿Estás seguro de agregar el curso "${nombre}" al carrito por $${precio.toLocaleString()}?`)) {
        carrito.push({ nombre, precio, cantidad: 1 });
        mostrarMensaje(`${nombre} agregado al carrito`);
        actualizarCarrito();
      }
    });
  });

  // Eliminar un curso del carrito al hacer clic en el botón de eliminar
  cartList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      const nombre = e.target.dataset.nombre;
      carrito = carrito.filter(item => item.nombre !== nombre);
      actualizarCarrito();
    }
  });

  // Finalizar compra: muestra el total y limpia el carrito
  checkoutBtn.addEventListener("click", function () {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert("¡Gracias por tu compra!\nTotal: $" + carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toLocaleString());
    carrito = [];
    actualizarCarrito();
    cartPanel.style.display = "none";
  });

  // Actualiza la lista del carrito, el total y el contador
  function actualizarCarrito() {
    cartList.innerHTML = "";
    let total = 0, count = 0;
    carrito.forEach(item => {
      total += item.precio * item.cantidad;
      count += item.cantidad;
      cartList.innerHTML += `
        <li>
          <span>${item.nombre} x${item.cantidad}</span>
          <span>$${(item.precio * item.cantidad).toLocaleString()} 
            <button class="remove-item" data-nombre="${item.nombre}" title="Quitar">🗑️</button>
          </span>
        </li>`;
    });
    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = count;
    if (carrito.length === 0) {
      cartList.innerHTML = "<li>El carrito está vacío.</li>";
    }
  }

  // Muestra un mensaje visual breve al agregar o advertir
  function mostrarMensaje(msg) {
    let aviso = document.createElement("div");
    aviso.textContent = msg;
    aviso.style.position = "fixed";
    aviso.style.top = "80px";
    aviso.style.right = "30px";
    aviso.style.background = "#1e3a5f";
    aviso.style.color = "#fff";
    aviso.style.padding = "0.7em 1.5em";
    aviso.style.borderRadius = "8px";
    aviso.style.zIndex = "2000";
    aviso.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
    aviso.style.fontWeight = "bold";
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 1800);
  }
});