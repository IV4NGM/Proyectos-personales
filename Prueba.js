function myFunction() {
    var x = document.getElementById('sol');
    var y = document.getElementById('botonsolucion');
    if (x.style.display == 'block') {
      x.style.display = 'none';
      y.innerHTML='Mostrar Solución'
      y.classList.remove('button2')
      y.classList.add('button')
    } else {
      x.style.display = 'block';
      y.innerHTML='Ocultar Solución'
      y.classList.remove('button')
      y.classList.add('button2')
    }
  }