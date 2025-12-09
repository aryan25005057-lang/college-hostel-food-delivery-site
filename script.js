* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f4f4;
    color: #333;
}

/* Navbar */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: #222;
    color: #ffd700; /* Gold/Yellow */
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-weight: 500;
}

.cart-btn {
    position: relative;
    cursor: pointer;
    display: inline-block;
}

#cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    background: #ffd700;
    color: #222;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
    font-weight: bold;
}

/* Hero Section */
.hero {
    height: 60vh;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero button {
    padding: 10px 25px;
    background-color: #ffd700;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 15px;
    transition: 0.3s;
}

.hero button:hover {
    background-color: #e6c200;
}

/* Filters */
.filters {
    display: flex;
    justify-content: center;
    padding: 2rem;
    gap: 15px;
}

.filter-btn {
    padding: 8px 20px;
    border: 2px solid #222;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    border-radius: 20px;
}

.filter-btn.active, .filter-btn:hover {
    background: #222;
    color: #ffd700;
}

/* Food Grid */
.food-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem 5%;
}

.food-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.food-card:hover {
    transform: translateY(-5px);
}

.food-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.food-info {
    padding: 15px;
}

.food-info h3 {
    margin-bottom: 5px;
}

.food-info p {
    color: #777;
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-weight: bold;
    color: #222;
}

.add-btn {
    padding: 5px 15px;
    background-color: #222;
    color: #ffd700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Cart Modal */
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: none; /* Hidden by default */
    justify-content: flex-end;
    z-index: 1000;
}

.cart-modal {
    width: 350px;
    background: white;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

.close-btn {
    cursor: pointer;
    font-size: 1.2rem;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 10px 0;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
}

.cart-footer {
    border-top: 1px solid #ddd;
    padding-top: 15px;
}

.checkout-btn {
    width: 100%;
    padding: 12px;
    background: #ffd700;
    border: none;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
}

/* Responsive */
@media (max-width: 600px) {
    .filters {
        flex-wrap: wrap;
    }
    .cart-modal {
        width: 100%;
    }
}
