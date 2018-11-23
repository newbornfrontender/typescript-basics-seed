let pizza: { name: string; price: number; getName(): string } = {
  name: 'Plzin Old Pepperoni',
  price: 20,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());
