const restaurants = [
    { name: "La Cocina de Socorro", description: "Restaurante tipico costeño.", address: "El Socorro Plan 123 Calle 321", image: "https://degusta-pictures-hd.b-cdn.net/9_1364_r_0.jpg?v=2187" },

    { name: "El Mantel Rojo", description: "Café & Brunch.", address: "Calle 678 Cra 24", image: "https://marketplace.canva.com/EAF8OQTDry0/1/0/1600w/canva-logo-restaurante-circular-blanco-y-negro-yoLE4F7rTeQ.jpg" },
    
    { name: "Eat Weston", description: "Restaurante Vegano.", address: "Diagonal 31 calle 24", image: "https://webslima.net/wp-content/uploads/logos-de-comida-vegetariana.jpg" },

    { name: "Catering", description: "Comida Rapida.", address: "Centro Comercial IUD Local 201", image: "https://img.freepik.com/vector-premium/diseno-logotipo-alimentos-restaurantes_1016155-13405.jpg" }

  ];

  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('results');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = '';

    restaurants
    .filter(restaurant => restaurant.name.toLowerCase().includes(query))
    .forEach(restaurant => {
        resultsContainer.innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-48 object-cover">
        <div class="p-4">
        <h3 class="text-xl font-bold mb-2">${restaurant.name}</h3>
                <p class="text-gray-600 mb-2">${restaurant.description}</p>
                <p class="text-gray-700"><strong>Dirección:</strong> ${restaurant.address}</p>
              </div>
            </div>
          `;
    });
  });


