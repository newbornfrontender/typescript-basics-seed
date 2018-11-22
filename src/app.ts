// let pizzaSize: string = 'small';

// function selectPizza(size: 'small' | 'medium' | 'large'): void {
//   pizzaSize = size;
// }

// selectPizza('large');

let pizzaSize: number = 1;

function selectPizza(size: 1 | 2 | 3): void {
  pizzaSize = size;
}

selectPizza(2);

console.log(`Pizza size: ${pizzaSize}`);
