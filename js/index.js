fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then(data => {
        const categoryList = document.getElementById('category-list');

        data.forEach(category => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <img src="${category.image}" class="card-img-top" alt="${category.name}">
                    <div class="card-body">
                        <h5 class="card-title">${category.name}</h5>
                    </div>
                </div>
            `;

            categoryList.appendChild(card);
        });
    })
    .catch(error => console.error('Error al obtener las categorías:', error));







