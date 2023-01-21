// Allow pizza to have toppings
// Have it so that ever pizza instance starts with cheese and then can add additional items 

class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.protein = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  addProtein(protein) {
    this.protein.push(protein);
  }
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

}

//////////////////////////
/////// DRIVER CODE //////
//////////////////////////

let pizza = new Pizza();
pizza.price
pizza.size = 's'
console.log(pizza)

// const pizza = new Pizza();
// pizza.setSize('m');
// pizza.getSize();
// console.log(pizza);

// now since the constructor arguments, we can pass this into our new Pizza
// let pizza1 = new Pizza('large', 'thin');
// console.log(pizza1.toppings);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings);
// console.log(pizza1)

// let pizza2 = new Pizza();
// console.log(pizza2.toppings);
// pizza2.addTopping("more cheese");
// pizza2.addProtein("chicken")
// console.log(pizza2.toppings);
// console.log(pizza2.protein);




// The following won't work because we can only call this method on instances of the Pizza class, not the class itself. If we could call it on class itself, then it would effect all the instances and as we know, instances are all unique so must be able to alter one without altering the other
// Pizza.addTopping();