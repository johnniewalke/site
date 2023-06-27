////////////////////////// Inicio - Slide Show HOME
// Obtém todos os elementos com a classe 'slide'
const slides = document.querySelectorAll('.slide');

// Define o índice inicial e adiciona a classe 'active' ao primeiro slide
let currentSlideIndex = 0;
slides[currentSlideIndex].classList.add('active');

// Função para avançar para o próximo slide
function nextSlide() {
  slides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.add('active');
}

// Função para iniciar o slideshow automaticamente
function startSlideshow() {
  setInterval(nextSlide, 2000); // Muda de slide a cada 2 segundos
}

// Inicia o slideshow
startSlideshow();
////////////////////////// Fim - Slide Show HOME


////////////////////////// Inicio - Slide Show Clientes
// Obtém todos os elementos com a classe 'slide_cliente'
const slidesClientes = document.querySelectorAll('.slide_cliente');

// Define o índice inicial e adiciona a classe 'active' ao primeiro slide
let currentSlideIndexClientes = 0;
slidesClientes[currentSlideIndexClientes].classList.add('active');

// Função para avançar para o próximo slide
function nextSlideClientes() {
  slidesClientes[currentSlideIndexClientes].classList.remove('active');
  currentSlideIndexClientes = (currentSlideIndexClientes + 1) % slidesClientes.length;
  slidesClientes[currentSlideIndexClientes].classList.add('active');
}

// Função para iniciar o slideshow automaticamente
function startSlideshowClientes() {
  setInterval(nextSlideClientes, 2000); // Muda de slide a cada 2 segundos
}

// Inicia o slideshow
startSlideshowClientes();
////////////////////////// Fim - Slide Show Clientes

////////////////////////// Carrossel
const carousel = document.querySelector('.logo-carousel');
const carouselSlides = Array.from(carousel.getElementsByClassName('logo-slide'));
const carouselSlideWidth = carouselSlides[0].offsetWidth;
const carouselNumVisibleSlides = 4;
let carouselCurrentPosition = 0;

carousel.style.width = `${carouselSlideWidth * carouselNumVisibleSlides}px`;

function rotateCarouselSlides() {
  const currentCarouselSlide = carouselSlides[carouselCurrentPosition];
  const nextCarouselSlidePosition = (carouselCurrentPosition + carouselNumVisibleSlides) % carouselSlides.length;
  const nextCarouselSlide = carouselSlides[nextCarouselSlidePosition];

  currentCarouselSlide.classList.remove('active');
  nextCarouselSlide.classList.add('active');

  carouselCurrentPosition = nextCarouselSlidePosition;
}

setInterval(rotateCarouselSlides, 10000);
////////////////////////// Fim - Carrossel