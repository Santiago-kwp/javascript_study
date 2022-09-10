function add(a, b) {
  return a + b;
}

console.log(add(1, 4)); // 5

const add_arrow = (a, b) => {
  return a + b;
}

console.log(add_arrow(1, 4)); //5

const func = function() {
  console.log(arguments);
}
func(1, 2, 3, 4); 

const func_arrow = (...args) => {
  console.log(args);
}
func_arrow(1, 2, 3, 4); // [1, 2, 3, 4]

var people = {
  name: 'gildong',
  say: function() {
    console.log(this);
  }
}
people.say(); // { name: 'gildong', say: [Function: say] }
var sayPeople = people.say;
sayPeople();

var sayPeople = people.say.bind(people);
sayPeople();