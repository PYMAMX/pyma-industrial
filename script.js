// ======================================
// AÑO AUTOMÁTICO
// ======================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ======================================
// MENÚ PARA CELULAR
// ======================================

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("active");
        });
    });
}


// ======================================
// FORMULARIO DE COTIZACIÓN
// ======================================

// El formulario se envía mediante FormSubmit.
//
// IMPORTANTE:
// No usamos event.preventDefault() porque eso
// impediría que el formulario se envíe realmente.
//
// Los correos de destino están configurados
// directamente en el index.html.
