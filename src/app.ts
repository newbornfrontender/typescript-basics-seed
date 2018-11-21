const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());

const topings = ['pepperoni'];

function order(pizza: any, topings: any) {
  return { pizza, topings };
}

console.log(order(pizza, topings));
