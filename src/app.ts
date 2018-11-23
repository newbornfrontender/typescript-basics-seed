type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectPizza: Callback = (x) => {
  pizzaSize = x;
};

selectPizza('medium');
