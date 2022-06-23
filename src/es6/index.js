function newFunction(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}
// ES6
function newFunction2(name = 'Oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo', '23', 'CO');


// Let
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


// Multilínea
let lorem = "Este es un texto \n" + "esta es otra frase."
console.log(lorem)
// ES6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem2)


// Desestructuración
let person = {
  'name': 'Oscar',
  'age': 32,
  'country': 'MX'
}
console.log(person.name, person.age);

let { name } = person;
console.log(name);


// Propagación
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


//  LET
{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);


// CONST
const a = 'b';
a = 'a';
console.log(a);


// Objetos
let name2 = 'Oscar';
let age2 = 32;

obj = { name: name2, age: age2 };
obj2 = { name2, age2 }
console.log(obj2);


// Arrow functions
const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Jessica', age: 27 }
]

let listOfNames = names.map(function (item){
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;


// Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Ups!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));


// Clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));


// Import-Export módulos
import { hello } from './module'

hello();


// Generadores
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);