  class Cookie {
    constructor(name, isGLutenFree) {
        this.name = name;
        this.isGlutenFree = isGLutenFree; // This is a property that indicates whether the cookie is gluten-free or not. It is set to true by default, meaning that all cookies created with this class are considered gluten-free unless specified otherwise.
        this.createdAt = new Date(); 
    }
    
  describe() {
        return `Cookie: ${this.name}, Is Gluten-Free: ${this.isGlutenFree}` + `, Created At: ${this.createdAt.toLocaleString()}`;
    }

    updateValue(newValue) {
        this.value = newValue;
        console.log(`The value of ${this.name} has been updated to: ${this.value}`);
    }
}     

const myCookie = new Cookie("Chocolate Chip", false);
console.log(myCookie.describe()); // Output: Cookie: Chocolate Chip, Is Gluten-Free: false, Created At: [current date and time]

// ← class ends here

  




