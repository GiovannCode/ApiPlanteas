fetch("http://localhost:3000/api/planetas")
    .then(response => response.json())
    .then(planetas => {
        const cardContainer = document.getElementById("card-container");

        // Limpiar el contenedor antes de agregar los nuevos resultados
        cardContainer.innerHTML = ""; 

        // Mostrar cada planeta en una card
        planetas.forEach(planeta => {
            let card = document.createElement("div");
            card.classList.add("card");

            // Agregar la información del planeta en la card
            card.innerHTML = `
                <img src="images/${planeta.nombre.toLowerCase()}.jpg" alt="${planeta.nombre}">
                <h3>${planeta.nombre}</h3>
                <p><strong>Distancia al Sol:</strong> ${planeta.distancia_sol}</p>
                <p><strong>Lunas:</strong> ${planeta.lunas}</p>
                <p><strong>Período orbital:</strong> ${planeta.periodo_orbital}</p>
                <p><strong>Rotación:</strong> ${planeta.rotacion}</p>
                <p><strong>Atmósfera:</strong> ${planeta.atmosfera}</p>
            `;

            // Agregar la card al contenedor
            cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error al obtener los planetas:", error);
        document.getElementById("card-container").innerHTML = "<p>No se pudieron cargar los planetas.</p>";
    });
