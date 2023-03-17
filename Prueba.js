function myFunction(botonid, solid) {
    var x = document.getElementById(solid);
    var y = document.getElementById(botonid);
    if (x.style.display == 'block') {
      x.style.display = 'none';
      y.innerHTML='Mostrar Solución'
      y.classList.remove('b2')
      y.classList.add('b1')
    } else {
      x.style.display = 'block';
      y.innerHTML='Ocultar Solución'
      y.classList.remove('b1')
      y.classList.add('b2')
    }
  }