interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  topings?: number;
  getAvailableSizes(): void;
  [key: number]: string;
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizza = createPizza('Pepperoni', ['small', 'large']);

pizza[1] = 'xyz';

pizza.topings = 2;
