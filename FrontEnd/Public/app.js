fetch("http://localhost:3000/api/planetas")
    .then(response => response.json())
    .then(planetas => {
        const lista = document.getElementById("lista-planetas");

        planetas.forEach(planeta => {
            let item = document.createElement("li");
            item.innerHTML = `<strong>${planeta.nombre}</strong>: ${planeta.descripcion} ${planeta.distancia_sol} ${planeta.lunas} ${planeta.periodo_orbital} ${planeta.rotacion} ${planeta.atmosfera}`;
            lista.appendChild(item);
        });
    })
    .catch(error => console.error("Error al obtener los plane${planeta.descripcion}tas:", error));
