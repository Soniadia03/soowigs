// shoppingCart.js

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const cartItem = {
            product,
            quantity,
        };
        this.items.push(cartItem);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    checkout() {
        if (this.items.length === 0) {
            console.log('Your cart is empty!');
            return;
        }
        console.log('Checkout:', this.items);
        // Additional checkout logic goes here
    }
}

// productFilter.js

class ProductFilter {
    constructor(products) {
        this.products = products;
    }

    filterByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    searchByName(name) {
        return this.products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    }
}

// checkout.js

function initiateCheckout(cart) {
    cart.checkout();
}

// Example Usage:
const products = [
    { id: 1, name: 'Wig A', category: 'Wigs' },
    { id: 2, name: 'Wig B', category: 'Wigs' },
    { id: 3, name: 'Accessory A', category: 'Accessories' }
];

const cart = new ShoppingCart();
const filter = new ProductFilter(products);

cart.addItem(products[0], 1);
cart.addItem(products[1], 2);
initiateCheckout(cart);
