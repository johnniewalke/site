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
  