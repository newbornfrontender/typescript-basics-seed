const pizzas = [
  {
    name: 'Pepperoni',
    topings: ['pepperoni'],
  },
];

const mappedPizzas = pizzas.map((pizza, index) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: 'Blazing Inferno',
  getName() {
    setTimeout(() => console.log(this.name), 1000);
  },
};

pizza.getName();
