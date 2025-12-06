document.addEventListener("DOMContentLoaded", function() {
  const pedidoForm = document.querySelector(".pedido-form");
  const pedidoSuccess = document.getElementById("pedidoSuccess");
  if (pedidoForm) {
    pedidoForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (pedidoSuccess) pedidoSuccess.style.display = "block";
      pedidoForm.reset();
    });
  }

  const reservaForm = document.querySelector(".reserva-form");
  const reservaSuccess = document.getElementById("reservaSuccess");
  if (reservaForm) {
    reservaForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (reservaSuccess) reservaSuccess.style.display = "block";
      reservaForm.reset();
    });
  }
});