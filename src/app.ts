function sumAll(message: string, ...arr: any) {
  console.log(arguments[0]);

  return arr.reduce((prev: number, next: number) => prev + next);
}

const sum = sumAll('Hello', 1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(sum);
