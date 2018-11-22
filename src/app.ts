const pizzas: number = 1;

function offerDiscount(order: number): boolean {
  return order >= 3;
}

if (offerDiscount(pizzas)) {
  console.log("You're entitled to a discount!");
} else {
  console.log('Order more than 3 pizzas for discount!');
}
