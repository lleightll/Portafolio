document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  // Abrir/cerrar el menú al hacer clic en el botón
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evitar que el clic en el botón se propague y cierre el menú inmediatamente
    sidebar.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });
});
