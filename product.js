const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.title}" >
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        `;
    })
    .catch(error => console.error('Error fetching product details:', error));

