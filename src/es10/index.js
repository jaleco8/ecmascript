let array1 = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array1.flat(2));

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World       ';
console.log(hello2);
console.log(hello2.trimEnd());

try {

} catch {
  error
}


let entries = [["name", "Jesus"], ["age", 34]];
console.log(Object.fromEntries(entries));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);