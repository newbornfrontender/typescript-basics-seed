const pizza = {
  name: 'Pepperoni',
  topings: ['pepperioni'],
};

function order({ name: pizzaName, topings: pizzaTopings }: any) {
  return { pizzaName, pizzaTopings };
}

const { pizzaName } = order(pizza);

console.log(pizzaName);

const topings = ['pepperoni', 'bacon', 'chilli'];

const [first, second, third] = topings;

console.log(second);

function logTopings([first, second, third]: any) {
  console.log(first, second, third);
}

logTopings(topings);
