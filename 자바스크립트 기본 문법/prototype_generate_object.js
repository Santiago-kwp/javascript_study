function func() {};
console.log(func.prototype); // func {}
func.prototype.name = 'gildong';
console.log(func.prototype); // func { name: 'gildong' }


// const animal = {
//   leg: 4,
//   tail: 1,
//   say() {
//     console.log('I have 4 legs and 1 tail');
//   }
// }
// const dog = {
//   sound: 'Mung',
//   happy: true,
// }
// const cat = {
//   sound: 'Yaong',
// }
// dog.__proto__ = animal;
// cat.__proto__ = dog;
// console.log(cat.happy); // true
// console.log(cat.leg);   // 4

function Animal() {}
Animal.prototype.legs = 4;
Animal.prototype.tail = 1;
const dog = new Animal();
const cat = new Animal();
console.log(cat.legs); //4
console.log(dog.tail); // 1
