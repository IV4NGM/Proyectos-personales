

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
  if(document.getElementById('input') && document.getElementById('input').value){
  // create a new div element
  const newDiv = document.createElement("div");

  newDiv.classList.add('comentarios')

  // and give it some content
  var myInput=document.getElementById('inputautor')
  if(myInput && myInput.value){
  var newContent = document.createTextNode('Autor: '+document.getElementById('inputautor').value+'\n'+new Date().toLocaleString()+'\n\n'+document.getElementById('input').value);
  }else{
  var newContent = document.createTextNode('Autor: Desconocido\n'+new Date().toLocaleString()+'\n\n'+document.getElementById('input').value);  
  }
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("Comentarios");
  currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
  document.getElementById('input').value=''
  document.getElementById('inputautor').value=''
  }else{
    alert('Escribe un comentario antes de enviar.')
  }
}

let inputcolor
window.addEventListener("load", startup, false);
function startup() {
  inputcolor = document.getElementById("inputcolor")
  inputcolor.addEventListener("input", changeColor, false);
}


function changeColor() {
  document.body.style.backgroundColor=document.getElementById('inputcolor').value;
}
function resetColor() {
  document.body.style.backgroundColor='rgb(254, 254, 193)';
  document.getElementById("inputcolor").value='#FEFEC1';
}
