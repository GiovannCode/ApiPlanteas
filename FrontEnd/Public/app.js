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
    function goToSlide(index) {
        const carousel = document.getElementById('carousel');
        const slides = document.querySelectorAll('.slide');
        const buttons = document.querySelectorAll('.buttons button');
    
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        buttons.forEach(button => button.classList.remove('active'));
        buttons[index].classList.add('active');
        
    }
    document.addEventListener("DOMContentLoaded", () => {
        goToSlide(0);
    });
    
    const numStars = 300;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "stars";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${8 + Math.random() * 8}s`; 
        star.style.animationDelay = `-${Math.random() * 8}s`; 
        document.body.appendChild(star);
    }