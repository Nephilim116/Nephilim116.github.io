document.addEventListener('DOMContentLoaded', (event) => {
    const boton = document.getElementById('meinbutton');
    const tooltip = document.getElementById('tooltip');
  
    boton.addEventListener('mouseover', function() {
      tooltip.style.display = 'block';
      const rect = boton.getBoundingClientRect();
      tooltip.style.top = (rect.bottom + window.scrollY) + 'px';
      tooltip.style.left = (rect.left + window.scrollX + (rect.width - tooltip.offsetWidth) / 2) + 'px';
    });
  
    boton.addEventListener('mouseout', function() {
      tooltip.style.display = 'none';
    });
  });

  function crearPopup(contenido, idImagen) {
    return function() {
      // Comprobar si ya existe un pop-up y eliminarlo
      let existente = document.querySelector('.popup');
      if (existente) {
        document.body.removeChild(existente);
      }
  
      // Crear el contenedor del pop-up
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.style.position = 'fixed';
      popup.style.left = '50%';
      popup.style.top = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.backgroundColor = 'white';
      popup.style.padding = '20px';
      popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
      popup.style.zIndex = '1000';
  
      // Añadir el texto al pop-up
      const texto = document.createElement('p');
      texto.innerText = contenido;
      popup.appendChild(texto);
  
      // Añadir una imagen al pop-up
      const imagen = document.createElement('img');
      imagen.src = idImagen; // Reemplaza con la URL de tu imagen
      imagen.style.width = '100%';
      imagen.style.marginTop = '10px';
      popup.appendChild(imagen);
  
      // Botón para cerrar el pop-up
      const botonCerrar = document.createElement('button');
      botonCerrar.innerText = 'Cerrar';
      botonCerrar.style.marginTop = '10px';
      botonCerrar.addEventListener('click', function() {
        document.body.removeChild(popup);
      });
  
      popup.appendChild(botonCerrar);
      document.body.appendChild(popup);
    }
  }
  
  // Añadir event listeners a cada botón
  document.getElementById('popup2').addEventListener('click', crearPopup('Cheddarra', 'https://playguitar.com/wp-content/uploads/2011/08/cheeseguitar.jpg'));
  document.getElementById('popup3').addEventListener('click', crearPopup('Pistolarra', 'https://playguitar.com/wp-content/uploads/2011/08/coltpeacemaker-300x195.jpg'));
  document.getElementById('popup4').addEventListener('click', crearPopup('Guitagui', 'https://playguitar.com/wp-content/uploads/2011/08/mirror-guitar-175x300.jpg'));
  document.getElementById('joder').addEventListener('click', crearPopup('Defecaster', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAR1351yjTbTk0Xj-JLSMLMd7ZylJCCoLDw&s'));
  
  document.getElementById('fickdich').addEventListener('mouseover', function() {
    var tooltip = document.getElementById('ohno');
    tooltip.style.display = 'block';
    var rect = this.getBoundingClientRect();
    tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight) + 'px';
    tooltip.style.left = (rect.left + window.scrollX + (rect.width - tooltip.offsetWidth) / 2) + 'px';
  });
  
  document.getElementById('fickdich').addEventListener('mouseout', function() {
    document.getElementById('ohno').style.display = 'none';
  });
  


  
  
  