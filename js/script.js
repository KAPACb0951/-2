document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productCard = event.target.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.querySelector('span').innerText;
        const productPrice = parseFloat(productCard.querySelector('.price').innerText.slice(0));

        const cartItem = document.createElement('li');
        cartItem.className = 'class'

        cartItem.innerHTML = `${productName} - ${productPrice}грн`;
        cartItemsList.appendChild(cartItem);

        totalPrice += productPrice;
        document.getElementById('total-price').innerText = `Итого: ${totalPrice.toFixed(2)} грн`;
    }
});

const cart = document.querySelector('.backdrop');
const cartBtnOpen = document.querySelector('.modal-btn-open'); 
const cartBtnClose = document.querySelector('.modal-btn-close');

const toggleCart = () => cart.classList.toggle('is-hidden');

cartBtnOpen.addEventListener('click', toggleCart);
cartBtnClose.addEventListener('click', toggleCart);

const icon = document.querySelector(".icon")
const search = document.querySelector(".search")
const clear = document.querySelector(".clear")

icon.onclick = function() {
    search.classList.toggle("active")
};

document.querySelector('#wrapper').oninput = function () {
    let val = this.value.trim();
    let wrapperItems = document.querySelectorAll('.wrapper .product-card')
    if (val != '') {
        wrapperItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        wrapperItems.forEach(function (elem) {
            elem.classList.remove('hide');
            });
    }
}
