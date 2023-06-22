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
