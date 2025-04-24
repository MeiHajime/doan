document.addEventListener('DOMContentLoaded', function()
{
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const mainImage = document.querySelector('.card-img-top');
        const clickedImageSrc = this.querySelector('img').src;
        mainImage.src = clickedImageSrc;
        });
    });

        const quantityInput = document.getElementById('quantity');
        const increaseButton = document.getElementById('increase');
        const decreaseButton = document.getElementById('decrease');

        increaseButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        decreaseButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        document.querySelector('.btn-danger').addEventListener('click', buyNow);

});

    document.getElementById("addToCartButton").addEventListener("click", function() {
    const cartNotification = document.getElementById("cartNotification");
    cartNotification.style.display = "block";

    setTimeout(function() {
        cartNotification.style.display = "none";
    }, 3000);
    });

    document.getElementById("favoriteButton").addEventListener("click", function() {
        this.classList.toggle("btn-danger");
        this.classList.toggle("btn-outline-secondary");
    });

    document.getElementById("shareButton").addEventListener("click", function() {
        const url = encodeURIComponent(window.location.href); 
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(facebookUrl, "_blank", "width=600, height=400");
    });

    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        const reviewsContainer = document.getElementById('reviews');
        reviewsContainer.innerHTML = ''; 
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <h5 class="text-${review.rating >= 4 ? 'success' : review.rating >= 3 ? 'warning' : 'danger'}">
                    🌟 Đánh giá ${review.rating} sao
                </h5>
                <blockquote class="blockquote">
                    <p class="text-muted">"${review.comment}"</p>
                </blockquote>
                <button class="delete-btn" onclick="deleteReview(${review.id})">Xóa</button>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    function deleteReview(id) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews = reviews.filter(review => review.id !== id);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        loadReviews();
    }

    document.getElementById('reviewForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        const newReview = {
            id: Date.now(),
            rating,
            comment
        };
        reviews.push(newReview);

        localStorage.setItem('reviews', JSON.stringify(reviews));

        loadReviews();

        showThankYouOverlay();

        document.getElementById('reviewForm').reset();
    });

    window.onload = loadReviews;

    function showThankYouOverlay() {
        const overlay = document.getElementById('thankYouOverlay');
        overlay.style.display = 'flex';

        setTimeout(function () {
            overlay.style.display = 'none';
        }, 3000);
    }

    const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
    const productDetails = document.getElementById('productDetails');
    const closeDetailsBtn = document.getElementById('closeDetailsBtn');

    toggleDetailsBtn.addEventListener('click', function() {
        productDetails.style.display = 'block'; 
        toggleDetailsBtn.style.display = 'none';
    });

    closeDetailsBtn.addEventListener('click', function() {
        productDetails.style.display = 'none'; 
        toggleDetailsBtn.style.display = 'inline-block'; 
    });

if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

function addToCart() {
    const product = {
        id: 1, 
        name: "Góc nhỏ có nắng",
        price: 150000,
        quantity: parseInt(document.getElementById('quantity').value),
        image: "./Muahang/gocnhoconang.png"
    };

    let cart = JSON.parse(localStorage.getItem('cart'));
    
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    const notification = document.getElementById('cartNotification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

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

function buyNow() {
    const product = {
        id: 1, 
        name: "Góc nhỏ có nắng",
        price: 150000,
        quantity: parseInt(document.getElementById('quantity').value),
        image: "./Muahang/gocnhoconang.png"
    };

    const cart = [product];

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'thanhtoan.html';
}