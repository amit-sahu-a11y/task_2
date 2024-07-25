document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission logic here
    });

    // Load products dynamically
    const loadProducts = async () => {
        const res = await fetch('/products');
        const products = await res.json();
        const productContainer = document.querySelector('#content');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <img src="${product.image}" alt="${product.name}">
            `;
            productContainer.appendChild(productElement);
        });
    };

    loadProducts();
});
