class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct( ) {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return  this.price + (this.price * salesTax);

    }

}

const salesTax = 0.07; // 7% sales tax

const myProduct = new Product("Laptop", 999.99);
myProduct.displayProduct();

const totalPrice = myProduct.calculateTotal(salesTax);
console.log(`Total Price (including sales tax): $${totalPrice.toFixed(2)}`);

