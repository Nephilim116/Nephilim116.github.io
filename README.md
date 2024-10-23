
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Top 5 guitarras</title>
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: lightgray;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
   h3 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(255, 255, 255);
    font-size: xx-large;
  }
  h1{
    color: black
  }
  nav {
    background-color: gray;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    height: 55px;
    width: 100%;
    border-bottom: 3px dashed black; /* Franja divisoria en el nav */
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav li {
    margin-right: 20px;
  }
  nav li:last-child {
    margin-right: 0;
  }
  header {
    background-color: black;
    color: yellow;
    text-align: center;
    width: 100%;
    line-height: 100px;
  }
  footer {
    background-color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: azure;
    text-align: center;
    height: 70px;
    line-height: 70px;
    margin-top: auto; /* Mantener el footer en la parte inferior */
  }
  .contenedor {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  article {
    flex: 1;
    text-align: left;
    padding: 15px;
    background-color: white;
  }
  .article {
    color: black;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid purple; /* Franja divisoria entre artículos */
  }
  .article:first-child {
    border-top: none; /* Evitar franja adicional en el primer artículo */
  }
  aside {
    position: fixed;
    right: 0;
    top: 0;
    background-color: skyblue;
    width: 20%;
    padding: 15px;
    height: calc(100vh - 70px); /* Restar la altura del footer */
    color: black;
    overflow-y: auto;
  }
  .clearfix {
    clear: both;
  }
  #tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
#shet {
  display: flex;
  width: 80%;
  height: 430px;
  margin: 0px;
  padding: 0px;
}  
section img {
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: .8;
  transition: .5 ease;
}
section img:hover{
  cursor: crosshair;
  width:300px;
  opacity: 1;
  filter: contrast(120%)
}
    </style>
    <link href="broma.py">
    <!--Primer proyecto personal mio, deseadme suerte-->
</head>
<body>
    <div id= 'container'>
        <header>
            <h1>Hoy presentamos: Top 5 guitarras</h1>
        </header>
        <hr>
        <nav>
            <ul>
                <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj9uZOm0JOJAxVjSDABHa8mJ9YQtwJ6BAgREAI&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DYGVQ-eg2FWo&usg=AOvVaw2UwbIQ7pe_epgFxmZA76Du&opi=89978449">Fuente 1</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ?si=wxstFcTZFNEBtayq">Press it</a></li>
                <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj9uZOm0JOJAxVjSDABHa8mJ9YQtwJ6BAgREAI&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DYGVQ-eg2FWo&usg=AOvVaw2UwbIQ7pe_epgFxmZA76Du&opi=89978449">Fuente 3</a></li>
                <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj9uZOm0JOJAxVjSDABHa8mJ9YQtwJ6BAgREAI&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DYGVQ-eg2FWo&usg=AOvVaw2UwbIQ7pe_epgFxmZA76Du&opi=89978449">Fuente 4</a></li>
                <li><a href="https://youtu.be/RIsjU6jHO5Y?si=2zk3I2IraYR72rxw">Fuente: miami me lo confirmo</a></li>
            </ul>
        </nav>
        <div class = "clearfix">
            <hr>
            <section id = "content">
                <article class = 'article'>
                    <h2>NUMERO UNO: guitarra cucaracha</h2>
                    <p><i>En esta ocasión podemos apreciar una guitarra avistada en una calle con una forma peculiar, la forma de un 
                        insecto que todos amamos. Adjuntamos prueba...
                    </i></p>
                    <div class="contenedor">
                        <button id="meinbutton">
                        cucatarra
                    </button>
<span id="tooltip" style="display: none;"><img src="cucatarra.jpg"></span>
</div>
                </article>
                <article class = 'article'>
                    <h2>NUMERO DOOS: guitarra QUEESOOO</h2>
                    <p><i>presentamos la guitarra queso, con amor</i></p>
                    <div id="popup2">
                        <button>More cheez</button>
                    </div>
                </article>
                <article class="article">
                    <h2>NUMERO TREES: Guitarra pistola</h2>
                    <p>Por si las moscas dicen</p>
                    <button id="popup3">
                        PUM
                    </button>
                </article>
                <article class="article">
                    <h2>NUMERO CUATROO: Guitagui</h2>
                    <p><i>En esta ocasión podeos apreciar una peculiar guitarra la cual empieza como una 'gui', continua 'ta' pero culmina de nuevo con 'GUI'</i></p>
                    <button id="popup4">
                        Watafac
                    </button>
                </article>
                <article>
                    <h2>QUINTA Y ULTIMAAAAA LA PODEROSISIMA DEFECASTER</h2>
                    <p>Hecha por Lucho, un saludo y sin mas comentarios</p>
                    <button id = "joder">
                        Uyuyuy que desgracia
                    </button>
                </article>
                <article class="article">
                    <h1>Las guitarras:</h1>
                    <p>Dejamos las imágenes de estas y más guitarras en una linda galería, sin más que añadir, adiós.</p>
                </article>
            </section>
        </div>
        <aside>
            <h1><i>Deje sus comentarios</i></h1>
            <form>
                <label>Deje su nombre</label>
                <input type="text"><br>
                <label>Deje su Email</label>
                <input type="url"> <br>
                <label>Ahora si, deje sus comentarios al respecto</label><br>
                <input type="text">
                <button id="fickdich">
                    Enviar comentarios  
                </button>
                <span id="ohno" style="display: none;">JDSFJKDSAJK DE VERDAD CREIA QUE YO IBA A LEER SUS COMENTARIOS</span>
            </form>
        </aside>
         <section id="shet">
            <img src="cucatarra.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/cheeseguitar.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/coltpeacemaker-300x195.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/mirror-guitar-175x300.jpg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAR1351yjTbTk0Xj-JLSMLMd7ZylJCCoLDw&s">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/ANGEL_Classic_V-300x131.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/bfoot-hand1-116x300.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/Broad-Sword-300x224.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/hands-DeGennaro1.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/lego-guitar-300x223.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/Loveheart-triple-guitar.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/mcswain-car-guitar-1967-Stephen-McSwain-300x121.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/Melon-guitar-300x183.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/pacman-smosh-185x300.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/Pikasso-musicgadgets.jpg">
            <img src="https://playguitar.com/wp-content/uploads/2011/08/Poodle-Guitar.jpg">
         </section>
        <footer>
            <b>Esta estupidez de página fue creada por: J. Duarte</b>
        </footer>
    </div>
    <script>
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
    </script>
</body>
</html>
