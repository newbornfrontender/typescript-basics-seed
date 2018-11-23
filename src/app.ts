type Pizza = { name: string; topings: number };

const pizza: Pizza = { name: 'Blazing Inferno', topings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);
