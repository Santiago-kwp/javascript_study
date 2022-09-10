const worker = {
  name: "James",
  job: "Engineer",
  get_name: function () {
    return this.name;
  }
}

console.log(worker)

//객체 배열 생성
const coffee = [];
coffee.push({ name: 'Ice Americano'});
coffee.push({ name: "Latte"});
console.log(coffee); // [ { name: 'Ice Americano' }, { name: 'Latte' } ]
console.log(coffee[0]); // { name: 'Ice Americano' }
console.log(coffee.length); // 2

// 구조 분해 할당
const animal = ['dog','cat'];
let [first, second] = animal;
console.log(first); // dog
console.log(second); // cat

