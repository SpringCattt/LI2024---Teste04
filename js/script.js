(function () {
    'use strict';
  
   
    const form = document.querySelector('.needs-validation');
  
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        alert('Mensagem enviada com sucesso!');
        clearForm();
      }
  
      form.classList.add('was-validated'); 
    }, false);
  })();
  
  function clearForm() {
    const form = document.getElementById('contactForm');
    form.reset(); 
    form.classList.remove('was-validated'); 
  }
  