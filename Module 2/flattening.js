let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);
console.log(flattened);
// → [1, 2, 3, 4, 5, 6]
