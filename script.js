// 1. Food Data Array (Simulating a Database)
const foodData = [
    {
        id: 1,
        name: "Schezwan Maggi",
        category: "maggi",
        price: 40,
        desc: "Spicy noodles topped with crunchy veggies.",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Veg Grilled Sandwich",
        category: "canteen",
        price: 50,
        desc: "Loaded with cheese and fresh vegetables.",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Chicken Protein Salad",
        category: "healthy",
        price: 120,
        desc: "Boiled chicken, lettuce, corn, and olive oil.",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Masala Chai",
        category: "canteen",
        price: 15,
        desc: "The classic stress-buster for exams.",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Oats & Banana Smoothie",
        category: "healthy",
        price: 80,
        desc: "No sugar, pure energy pre-workout drink.",
        img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Cheese Burst Maggi",
        category: "maggi",
        price: 60,
        desc: "Double cheese for late night cravings.",
        img: "https://images.unsplash.com/photo-1594254258957-25299443657b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// 2. Select Elements
const foodContainer = document.getElementById('food-grid');
const cartCountElement = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let cart = [];

// 3. Render Food Items
function displayFood(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="food-card">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="food-info">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="price-row">
                            <span class="price">₹${item.price}</span>
                            <button class="add-btn" onclick="addToCart(${item.id})">Add +</button>
                        </div>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    foodContainer.innerHTML = displayMenu;
}

// Initial Render
window.addEventListener("DOMContentLoaded", function () {
    displayFood(foodData);
});

// 4. Filtering Logic
function filterMenu(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayFood(foodData);
    } else {
        const filteredMenu = foodData.filter(function (item) {
            return item.category === category;
        });
        displayFood(filteredMenu);
    }
}

// 5. Cart Logic
function addToCart(id) {
    // Check if item already exists in cart
    if (cart.some((item) => item.id === id)) {
        alert("Item already in cart!");
    } else {
        const item = foodData.find((product) => product.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }
    updateCart();
}

function updateCart() {
    renderCartItems();
    renderSubtotal();
}

function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    totalPriceElement.innerHTML = totalPrice;
    cartCountElement.innerHTML = totalItems;
}

function renderCartItems() {
    cartItemsContainer.innerHTML = ""; // Clear cart element
    cart.forEach((item) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <h5>₹${item.price}</h5>
                </div>
                <div class="unit-controls">
                    <span onclick="removeItem(${item.id})" style="color:red; cursor:pointer; font-size:0.8rem;">Remove</span>
                </div>
            </div>
        `;
    });
}

function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

// 6. UI Interaction (Modal)
function toggleCart() {
    if (cartOverlay.style.display === "flex") {
        cartOverlay.style.display = "none";
    } else {
        cartOverlay.style.display = "flex";
    }
}

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// 7. Checkout (Simulation)
function checkout() {
    if (cart.length > 0) {
        alert("Order Placed! Your token number is " + Math.floor(Math.random() * 100));
        cart = [];
        updateCart();
        toggleCart();
    } else {
        alert("Your cart is empty!");
    }
}
