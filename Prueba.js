

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


function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  newDiv.classList.add('comentarios')

  // and give it some content
  const newContent = document.createTextNode(document.getElementById('input').value);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("Comentarios");
  document.body.insertBefore(newDiv, currentDiv.nextSibling);
  document.getElementById('input').value=''
}

