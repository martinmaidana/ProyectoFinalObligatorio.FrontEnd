// Crea el encabezado
const header = document.createElement('header');
header.innerHTML = `
    <header class="header">
        <div class="header-container">
            <nav class="nav">
              <a href="index.html">
                <img src="img/palabra_MATE.png" alt="Tienda de MATE Logo" class="logo">
              </a>  
                <ul class="nav-list">
                    <li class="nav-item"><a href="tienda.html" class="nav-link">Nuestros Mates</a></li>
                    <li class="nav-item"><a href="tutoriales.html" class="nav-link">Tutoriales</a></li>
                    <li class="nav-item"><a href="menu-tienda.html" class="nav-link">Nuestro menú</a></li>
                    <li class="nav-item"><a href="trabaja-en-tdc.html" class="nav-link">Trabajá con nosotros</a></li>
                    <li class="nav-item"><a href="franquicias.html" class="nav-link">Franquicias</a></li>
                    <li class="nav-item"><a href="contacto.html" class="nav-link">Contacto</a></li>
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
                            <img src="img/palabra_MATE.png" alt="Logo Footer" class="footer-logo">
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
                                            <li class="footer-list-item"><a href="menu-tienda.html">Tutoriales</a></li>
                                            <li class="footer-list-item"><a href="trabaja-en-tdc.html">Trabajá en TDM</a></li>
                                            <li class="footer-list-item"><a href="franquicias.html">Franquicias</a></li>
                                            <li class="footer-list-item"><a href="contacto.html">Contacto</a></li>
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
                                            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
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
`;

window.onload = function() {
  const body = document.body;

  // Verifica si el header ya existe antes de agregarlo
  if (!document.querySelector('.header')) {
    body.insertBefore(header, body.firstChild);
  }

  // Verifica si el footer ya existe antes de agregarlo
  if (!document.querySelector('.footer')) {
    body.appendChild(footer);
  }

  
  // Carga Font Awesome
  const fontAwesomeScript = document.createElement('script');
  fontAwesomeScript.src = 'https://kit.fontawesome.com/668f014530.js';
  fontAwesomeScript.crossOrigin = 'anonymous';
  document.head.appendChild(fontAwesomeScript);
};
