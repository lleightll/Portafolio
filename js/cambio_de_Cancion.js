const canciones = [
  'https://open.spotify.com/embed/track/5h1Y6eMbKqGue5NfhhspcS?utm_source=generator&theme=0',
  'https://open.spotify.com/embed/track/2bIAoIqZx8XOKW258KYe6w?utm_source=generator',
  'https://open.spotify.com/embed/track/5fwsSUF962QGnfFlRZN4YH?utm_source=generator',
  'https://open.spotify.com/embed/track/45gdnb4VTtVrii9ngnPyND?utm_source=generator',
  'https://open.spotify.com/embed/track/0W8EscbrPH0RcfN53eEMj1?utm_source=generator',
  'https://open.spotify.com/embed/track/3C0DlELj0j1ewy87eXg2Jv?utm_source=generator',
  'https://open.spotify.com/embed/track/3BEjsPctuRV0nec2zFWcia?utm_source=generator',
];

let indice = 0;

function mostrar() {
  const carousel = document.getElementById('carousel');
  let wrapper = document.querySelector('.cards-wrapper');

  // Crear wrapper para mover todo el grupo si no existe
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.classList.add('cards-wrapper');

    // Mover las cards actuales al wrapper
    while (carousel.firstChild) {
      wrapper.appendChild(carousel.firstChild);
    }
    carousel.appendChild(wrapper);
  }

  // Crear cards si no existen
  if (wrapper.children.length === 0) {
    canciones.forEach((url) => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `<iframe src="${url}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
      wrapper.appendChild(div);
    });
  }

  // Actualizar clases active y side
  for (let i = 0; i < wrapper.children.length; i++) {
    const card = wrapper.children[i];
    card.className = 'card'; // reset

    if (i === indice) {
      card.classList.add('active');
    } else if (
      i === (indice - 1 + canciones.length) % canciones.length ||
      i === (indice + 1) % canciones.length
    ) {
      card.classList.add('side');
    }
  }

  // Pausar todos los iframes excepto el activo
  for (let i = 0; i < wrapper.children.length; i++) {
    const iframe = wrapper.children[i].querySelector('iframe');
    if (i !== indice && iframe) {
      const src = iframe.src;
      iframe.src = '';   // pausa forzando recarga
      iframe.src = src;  // restablece el iframe
    }
  }

  // Calcular desplazamiento para centrar la card activa
  const cardWidth = wrapper.children[0].offsetWidth + 1; // ancho card + gap
  const carouselWidth = carousel.offsetWidth;
  // Calcula el desplazamiento para centrar la card activa en el carrusel
  const desplazamiento = -indice * cardWidth + (carouselWidth - cardWidth) / 6;

  wrapper.style.transition = 'transform 0.5s ease';
  wrapper.style.transform = `translateX(${desplazamiento}px)`;
}

function siguiente() {
  indice = (indice + 1) % canciones.length;
  mostrar();
}

function anterior() {
  indice = (indice - 1 + canciones.length) % canciones.length;
  mostrar();
}

mostrar();
