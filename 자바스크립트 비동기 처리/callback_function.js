// 콜백 함수의 비동기 처리
setTimeout(()=> { //내장함수 setTimeout(callback, delayTime)
  console.log('todo: First work!');
}, 3000);

setTimeout(()=> {
  console.log('todo: Second work!');
}, 2000);

// 결과
// todo: Second work!
// todo: First work!

// 콜백 함수의 동기 처리
setTimeout(() => {
  setTimeout(() => {
    console.log('todo: Second work!');
  }, 2000);
  console.log('todo: First work!');
}, 3000)
// 결과
// todo: First work!
// todo: Second work!

// 사용자 정의 함수의 동기 처리
function fakeSetTimeout(callback) {
  callback();
}

console.log(0);
fakeSetTimeout(function () {
  console.log('hello');
});

console.log(1);

//API의 비동기적 처리
console.log(0);
setTimeout(function () {
  console.log('hello there');
}, 0);

console.log(1)
