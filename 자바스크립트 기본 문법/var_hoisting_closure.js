// variable hoisting
console.log(puppy)
var puppy = "cute";
console.log(puppy);

// let 활용
let cat;
cat = "happy";
console.log(cat); // happy
let cat = "happy"; // SyntaxError: Identifier 'cat' has already been declared

// function-level-scope 사용
var dog = "cute";
console.log(dog); //cute
{
  var dog = "so cute";
}
console.log(puppy); // so cute

let dog = "cute";
{
  let dog = "so cute";
}
console.log(dog); // cute


// const 와 let 의 차이

const dog = "cute";
dog = "so cute!!"; // TypeError: Assignment to constant variable

let dog;
console.log(dog); // undefined
dog = "so lovely"; // 
console.log(dog); // so lovely


function outer() {
  var a = 'A';
  var b = 'B';
  function inner() {
    var a = 'AA';
    console.log(b)
  }
  return inner;
}

var outerFunc = outer()
outerFunc(); // B
