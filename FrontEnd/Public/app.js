fetch("http://localhost:3000/api/planetas")
    .then(response => response.json())
    .then(planetas => {
        // Obtiene todas las cards de los planetas
        const cards = document.querySelectorAll(".carousel .slide");

        // Recorre cada card y asigna la información del planeta correspondiente
        let planetasArray = Object.values(planetas); // Convierte el objeto en array
        cards.forEach((card, index) => {
            if (index < planetasArray.length) { // Asegura que haya datos suficientes
                let planeta = planetasArray[index];

                // Busca el elemento donde irá la información dentro de la card
                let label = card.querySelector(".label, .label-2, .label-3, .label-4, .label-5, .label-6, .label-7, .label-8, .label-9");
                
                if (label) {
                    label.innerHTML = `
                        <strong>${planeta.nombre}</strong><br>
                        ${planeta.descripcion}<br>
                        🌞 Distancia al Sol: ${planeta.distancia_sol}<br>
                        🌕 Lunas: ${planeta.lunas}<br>
                        ⏳ Periodo Orbital: ${planeta.periodo_orbital}<br>
                        🔄 Rotación: ${planeta.rotacion}<br>
                        🌫 Atmósfera: ${planeta.atmosfera}
                    `;
                }
            }
        });
    })
    .catch(error => console.error("Error al obtener los planetas:", error));


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