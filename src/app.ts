const pizzaCost: number = 10;
const pizzaTopings: number = 2;

function calculatePrice(cost: number, topings: number): number {
  return cost + 1.5 * topings;
}

const cost: string = calculatePrice(pizzaCost, pizzaTopings).toString();

console.log(`Pizza costs: ${cost}`);
console.log(typeof cost);
