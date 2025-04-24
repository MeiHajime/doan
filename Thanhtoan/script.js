function loadOrderSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.getElementById('orderSummary');
    let subtotal = 0;

    orderSummary.innerHTML = '';
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        orderSummary.innerHTML += `
            <li class="d-flex justify-content-between mb-2">
                <span>${item.name} (x${item.quantity})</span>
                <span>${itemTotal.toLocaleString()} ₫</span>
            </li>`;
    });

    const shippingFee = subtotal > 500000 ? 0 : 30000;
    document.getElementById('subtotal').textContent = subtotal.toLocaleString() + ' ₫';
    document.getElementById('shippingFee').textContent = shippingFee.toLocaleString() + ' ₫';
    document.getElementById('totalPrice').textContent = (subtotal + shippingFee).toLocaleString() + ' ₫';
}

document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (name && email && phone && address) {
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
        localStorage.removeItem('cart');
    }
});

loadOrderSummary();

document.addEventListener('DOMContentLoaded', function() {
    var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu > a');
    dropdownSubmenus.forEach(function(dropdownSubmenu) {
        dropdownSubmenu.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            var submenu = this.nextElementSibling;
            var allSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu');
            
            allSubmenus.forEach(function(menu) {
                if (menu !== submenu) {
                    menu.style.display = 'none';
                }
            });
            
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});