// script.js

// Validação do formulário de contato
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos do formulário.');
      return false;
    }
  
    return true;
  }

////////////////////////// Inicio - Slide Show
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
////////////////////////// Fim - Slide Show