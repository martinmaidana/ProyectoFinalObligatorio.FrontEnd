// Crea el encabezado
const header = document.createElement('header');
header.innerHTML = `
     <header class="header">
        <div class="container">
            <nav class="nav">
                <img src="path-to-logo.png" alt="Tienda de Café Logo" class="logo">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#" class="nav-link">Nuestro café</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Tutoriales</a></li>
                   
                    <li class="nav-item"><a href="#" class="nav-link">Nuestro menú</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Trabajá con nosotros</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Franquicias</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>
`;

// Crea el pie de página
const footer = document.createElement('footer');
footer.innerHTML = `
 <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-inner">
                        <div class="footer-wrapper">
                            <div class="footer-row">
                                <img src="img\mate-yerba.jpg" alt="Logo Footer" class="footer-logo">
                                <div class="footer-columns">
                                    <div class="footer-column">
                                        <div class="footer-list">
                                            <h5 class="footer-list-title">Contenidos</h5>
                                            <ul class="footer-list-items">
                                                <li class="footer-list-item"><a href="#">Inicio</a></li>
                                                <li class="footer-list-item"><a href="#">Nuestro MATE</a></li>
                                               
                                                <li class="footer-list-item"><a href="#">Nuestro menú</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="footer-column">
                                        <div class="footer-list">
                                            <h5 class="footer-list-title">Necesitás Ayuda</h5>
                                            <ul class="footer-list-items">
                                                <li class="footer-list-item"><a href="#">Tutoriales</a></li>
                                                <li class="footer-list-item"><a href="#">Trabajá en TDM</a></li>
                                                <li class="footer-list-item"><a href="#">Franquicias</a></li>
                                                <li class="footer-list-item"><a href="#">Contacto</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="newsletter-column">
                                        <div class="newsletter-wrapper">
                                            <h5 class="newsletter-title">SUSCRIBITE A NUESTRO NEWSLETTER</h5>
                                            <form class="newsletter-form">
                                                <input type="email" placeholder="Tu email" class="newsletter-input">
                                                <button type="submit" class="newsletter-button">Suscribirme</button>
                                            </form>
                                            <h5 class="social-title">CONECTATE CON NOSOTROS</h5>
                                            <div class="social-icons">
                                                <a href="#" class="social-icon">
                                                    <img src="img/mate-yerba.jpg" alt="Facebook" class="social-icon-image">
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <img src="img/mate-yerba.jpg" alt="Instagram" class="social-icon-image">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
`;

window.onload = function() {
  // Obtiene todas las etiquetas <body> de las páginas
  const bodies = document.querySelectorAll('body');

  // Agrega el encabezado y el pie de página a cada página
  bodies.forEach((body) => {

    // Crea un nuevo elemento de enlace para el CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/styles.css';

    // Agrega el enlace al documento
    body.appendChild(link);

    // Agrega el encabezado y el pie de página a la página
    body.insertBefore(header.cloneNode(true), body.firstChild);
    body.appendChild(footer.cloneNode(true));
  });
};