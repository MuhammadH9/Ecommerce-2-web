const productsContainer = document.getElementById('products-container');
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            `;
            productCard.addEventListener('click', () => {
                window.open(`product.html?id=${product.id}`, '_blank');
            });
            productsContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));