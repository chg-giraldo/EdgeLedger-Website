// Elementos HTML
const estilosDocumento = getComputedStyle(document.body); 
const barraNavegacion = document.getElementById('barra-navegacion');

// Variables
const alturaBarra = parseInt(estilosDocumento.getPropertyValue('--altura-barra-superior'));

// Eventos
window.onscroll = function () {
  if (window.scrollY > alturaBarra) {
    barraNavegacion.classList.remove('posicion-inicial');
    barraNavegacion.classList.add('posicion-desplazada');
  } else {
    barraNavegacion.classList.remove('posicion-desplazada');
    barraNavegacion.classList.add('posicion-inicial');
  }
}