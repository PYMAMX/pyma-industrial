// ======================================
// AÑO AUTOMÁTICO
// ======================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// ======================================
// MENÚ PARA CELULAR
// ======================================

const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");


if (menuButton && mobileNav) {

    menuButton.addEventListener(
        "click",
        function () {

            mobileNav.classList.toggle(
                "active"
            );

        }
    );


    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNav.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}



// ======================================
// FORMULARIO DE COTIZACIÓN
// ======================================

const quoteForm =
    document.getElementById("quoteForm");


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nombre =
                document
                    .getElementById("nombre")
                    .value
                    .trim();


            const empresa =
                document
                    .getElementById("empresa")
                    .value
                    .trim();


            const telefono =
                document
                    .getElementById("telefono")
                    .value
                    .trim();


            const correo =
                document
                    .getElementById("correo")
                    .value
                    .trim();


            const mensaje =
                document
                    .getElementById("mensaje")
                    .value
                    .trim();



            const solicitud = `

SOLICITUD DE COTIZACIÓN - PYMA

Nombre:
${nombre}

Empresa:
${empresa || "No especificada"}

Teléfono:
${telefono}

Correo:
${correo || "No especificado"}

Descripción del proyecto:

${mensaje}

            `;



            console.log(
                solicitud
            );


            alert(
                "Gracias, " +
                nombre +
                ". La información de tu solicitud fue preparada correctamente."
            );

        }
    );

}
