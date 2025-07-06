// Query the cart container where items will be displayed
let cartItemContainer = document.querySelector('.cart-items-container');

// Query the cart button
let cartButton = document.querySelector('#cart-btn');

// Handle Add to Cart buttons in the menu section
document.querySelectorAll('.menu .btn').forEach((addButton) => {
    addButton.addEventListener('click', (event) => {
        // Get the details of the selected menu item
        let menuItem = event.target.closest('.box');
        let itemImage = menuItem.querySelector('img').src;
        let itemName = menuItem.querySelector('h3').innerText;
        let itemPrice = menuItem.querySelector('.price').innerText;

        // Add the item to the cart
        addItemToCart(itemImage, itemName, itemPrice);
    });
});

// Handle Add to Cart buttons in the products section
document.querySelectorAll('.products .fa-shopping-cart').forEach((cartIcon) => {
    cartIcon.addEventListener('click', (event) => {
        // Get the details of the selected product
        let productItem = event.target.closest('.box');
        let itemImage = productItem.querySelector('img').src;
        let itemName = productItem.querySelector('h3').innerText;
        let itemPrice = productItem.querySelector('.price').innerText.split(" ")[0]; // Get the current price

        // Add the item to the cart
        addItemToCart(itemImage, itemName, itemPrice);
    });
});

// Function to add an item to the cart
function addItemToCart(image, name, price) {

    // Create a new cart item
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span class="fas fa-times"></span>
        <img src="${image}" alt="${name}">
        <div class="content">
            <h3>${name}</h3>
            <div class="price">${price}</div>
        </div>
    `;

    // Add the new cart item to the cart container
    cartItemContainer.appendChild(cartItem);

    // Add functionality to remove the item when the 'x' button is clicked
    cartItem.querySelector('.fa-times').addEventListener('click', () => {
        cartItem.remove();
    });
}

// Close the cart, search form, and navbar when scrolling
window.onscroll = () => {
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
    cartItemContainer.classList.remove('active');
};

// Toggle the cart container visibility
cartButton.addEventListener('click', () => {
    cartItemContainer.classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
});