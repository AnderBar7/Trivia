function verificarRespuesta() {

    const trivia = document.forms["prueba"];
    let puntosAcertados = 0;
    let puntosFallidos = 0;
    
    console.log(trivia["Estructura"].value);
    if (trivia["Estructura"].value === ""
        || trivia["Diseño"].value === ""
        || trivia["Lenguaje"].value === ""
        || trivia["Programacion"].value === "") {
        alert("Complete las preguntas");
    
    } else {
        if (trivia["Estructura"].value === "Marcado de hipertexto") {
            puntosAcertados++;
        } else {
            puntosFallidos++;
        }

        if (trivia["Diseño"].value === "Lenguaje de programacion") {
            puntosAcertados++;
        } else {
            puntosFallidos++;
        }

        if (trivia["Lenguaje"].value === "Agregar caracteristicas interactivas") {
            puntosAcertados++;
        } else {
            puntosFallidos++;
        }

        if (trivia["Programacion"].value === "Document Object Model") {
            puntosAcertados++;
        } else {
            puntosFallidos++;
        }

        if (trivia["Interfaz"].value === "Editar código fuente de programación") {
            puntosAcertados++;
        } else {
            puntosFallidos++;
        }

        alert("Tiene " + puntosAcertados + " puntos correctos " + puntosFallidos + " puntos incorrectos")

    }
}