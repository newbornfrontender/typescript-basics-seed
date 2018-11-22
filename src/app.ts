// let sumOrder: Function;

// sumOrder = (price: number, quantity: number): number => price * quantity;

// -----------------------------------------------------------------------------

// let sumOrder: (price: number, quantity:number) => number = (x, y) => x * y;

// -----------------------------------------------------------------------------

let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
