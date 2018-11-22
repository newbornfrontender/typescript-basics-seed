let selectedToping: string = 'pepperoni';

function selectToping(toping: string): void {
  selectedToping = toping;
}

selectToping('bacon');

console.log(selectedToping);
