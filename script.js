// =====================================================
// AÑO DEL FOOTER
// =====================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================================
// MENÚ DE CELULAR
// =====================================================

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


// =====================================================
// INTRO ANIMADA DE PYMA
// =====================================================

const intro =
    document.getElementById("intro");


if (intro) {

    document.body.classList.add(
        "intro-active"
    );


    setTimeout(
        function () {

            intro.classList.add(
                "hide"
            );

            document.body.classList.remove(
                "intro-active"
            );

        },
        2100
    );


    setTimeout(
        function () {

            intro.remove();

        },
        2900
    );

}


// =====================================================
// ANIMACIONES AL HACER SCROLL
// =====================================================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );

                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -40px 0px"
        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);


// =====================================================
// MENSAJE DESPUÉS DE ENVIAR COTIZACIÓN
// =====================================================

const params =
    new URLSearchParams(
        window.location.search
    );


if (
    params.get("enviado") === "1"
) {

    const successMessage =
        document.getElementById(
            "successMessage"
        );


    if (successMessage) {

        successMessage.classList.add(
            "visible"
        );

    }


    // Quitamos ?enviado=1 de la URL
    // después de mostrar el mensaje.

    const cleanURL =
        window.location.pathname +
        "#cotizacion";


    window.history.replaceState(
        {},
        document.title,
        cleanURL
    );

}


// =====================================================
// FORMULARIO
// =====================================================

// El formulario se envía directamente
// mediante FormSubmit.
//
// IMPORTANTE:
// No utilizar event.preventDefault()
// porque impediría el envío del formulario.
