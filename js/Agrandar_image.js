document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.simple-carousel img');
  const container = document.getElementById('image-container');
  const bigImage = document.getElementById('big-image');
  const closeBtn = document.getElementById('close-btn');

  imgs.forEach(img => {
    img.onclick = () => {
      bigImage.src = img.src;
      bigImage.alt = img.alt;
      container.classList.add('active');
    };
  });

  closeBtn.onclick = () => {
    container.classList.remove('active');
    bigImage.src = '';
    bigImage.alt = '';
  };

  // Cerrar al hacer click fuera de la imagen
  container.onclick = (e) => {
    if (e.target === container) {
      container.classList.remove('active');
      bigImage.src = '';
      bigImage.alt = '';
    }
  };
});
