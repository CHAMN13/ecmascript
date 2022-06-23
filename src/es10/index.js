// Array flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))


// Flat map
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2]));


// Trim start
let hello = '        hello world'
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world         '
console.log(hello);
console.log(hello.trimEnd());


// Try catch



// From entries
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));


// Symbol
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);