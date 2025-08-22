const images = document.querySelectorAll('.carousel-image');
const titulo = document.getElementById('titulo-texto');
const parrafo = document.getElementById('parrafo-texto');
const carousel = document.getElementById('carouselIMG');

const titulos = [
  'IMPERMANENCE',
  'Libelùla',
  'Near To The Autopsy',
  'Ningún Artista',
  'ERROR 505',
  'October Twenty Ninth',
  'One Break',
  'Planeta Errante',
  'The Primidos',
  'Rotten Pays',



];

const parrafos = [
  'Impermanence es una banda de progressive technical thrash metal que combina velocidad, técnica y estructuras complejas sin perder la fuerza del thrash clásico. Su estilo es preciso pero agresivo, con riffs retorcidos y cambios de ritmo inesperados. Las letras exploran temas como el paso del tiempo y la fragilidad humana, haciendo honor a su nombre. Impermanence es para quienes buscan metal intenso pero con cabeza.',
  'Libelùla es una banda de rock indie alternativo que mezcla melodías suaves con momentos de energía cruda. Su sonido va de lo íntimo a lo explosivo, con guitarras envolventes y letras cargadas de emoción. Con un estilo nostálgico pero fresco, Libélula busca conectar desde lo personal, creando paisajes sonoros que invitan a perderse y sentir. Ideal para quienes disfrutan del rock con alma y atmósfera.',
  'Near To The Autopsy apuesta por un rock alternativo intenso, con guitarras pesadas, voces cargadas de emoción y una energía que no baja nunca. Su sonido juega entre lo melódico y lo áspero, manteniendo siempre un tono oscuro y directo.Sus letras abordan conflictos internos, rupturas y contradicciones modernas, con una mirada cruda pero honesta. Es una banda que no busca complacer, sino sacudir.',
  'Ningún Artista mezcla la actitud rebelde del punk con los ritmos del regional mexicano, creando un estilo crudo, directo y sin filtros. Su sonido es rasposo, con guitarras distorsionadas y letras que hablan de calle, desamor y desmadre.Con una estética irreverente y un mensaje que no busca aprobación, la banda representa una nueva forma de protesta musical. Punk tumbado con alma norteña y corazón en llamas..',
  'ERROR 505 trae un rock directo, con riffs potentes y una energía que se siente en cada golpe de batería. Su sonido mezcla influencias clásicas con un toque moderno, logrando algo familiar pero fresco. Las letras hablan de caos digital, ansiedad y desconexión, todo con una actitud desafiante. ERROR 505 es ese mensaje que no carga, pero que se queda en la cabeza.',
  'October Twenty Ninth se mueve entre lo melancólico y lo esperanzador, con un sonido indie alternativo lleno de atmósferas suaves y letras introspectivas. Su música suena como un recuerdo que no quieres soltar. Con influencias del dream pop y el rock alternativo, crean paisajes sonoros que acompañan tanto una noche solitaria como un viaje sin rumbo. Ideal para quienes sienten mucho y callan más.',
  'One Break es una banda de rock que apuesta por la fuerza y la sencillez. Guitarras sólidas, ritmos pegajosos y una actitud sin pretensiones definen su sonido. Con letras que van al grano y una energía que se contagia, One Break demuestra que a veces solo se necesita un buen riff para encenderlo todo.',
  'Planeta Errante ofrece un pop alternativo fresco y lleno de color, con melodías pegajosas y letras que hablan de sueños, viajes y emociones cotidianas. Su sonido es ligero pero lleno de personalidad. Perfectos para quienes buscan música alegre pero con un toque distinto, Planeta Errante crea atmósferas que invitan a soñar despierto.',
  'The Primidos mezclan la energía del punk con la frescura del indie, creando canciones rápidas, directas y con mucho corazón. Su estilo es crudo pero contagioso, ideal para cantar a todo pulmón. Con letras que hablan de rebeldía y momentos cotidianos, The Primidos representan esa voz joven que no tiene miedo de decir lo que piensa.',
  'Rotten Pays trae un surf alternativo lleno de energía y buenas vibras, con guitarras reverberantes y ritmos que te transportan a la playa. Su sonido combina lo clásico del surf con toques modernos y experimentales. Ideal para quienes buscan música fresca, con un espíritu libre y un estilo que invita a relajarse y disfrutar del momento.',


];

let index = 0;

// Mostrar texto inicial
titulo.textContent = titulos[0];
parrafo.textContent = parrafos[0];

function cambiarImagen() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
  titulo.textContent = titulos[index];
  parrafo.textContent = parrafos[index];
}

carousel.addEventListener('click', cambiarImagen);


// Mostrar texto inicial
titulo.textContent = titulos[0];
parrafo.textContent = parrafos[0];

// Función para cambiar imagen y textos
function cambiarImagen() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
  titulo.textContent = titulos[index];
  parrafo.textContent = parrafos[index];
}

// Cambio al hacer click
carousel.addEventListener('click', cambiarImagen);


setInterval(cambiarImagen, 6000);
