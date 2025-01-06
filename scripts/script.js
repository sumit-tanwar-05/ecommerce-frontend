// Example of adding an item to the cart
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart');
    });
});
