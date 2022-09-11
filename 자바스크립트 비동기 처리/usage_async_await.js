function workP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

function justFunc() {
  return 'just Function';
}

async function asyncFunc() {
  return 'async Function';
}

console.log(justFunc());
console.log(asyncFunc());
console.log(workP());


// Promise 의 사용
function workP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('workP function');
    }, sec * 1000);
  });
}

async function asyncFunc() {
  const result_workP = await workP(3);
  console.log(result_workP);
  return 'async Function';
}

asyncFunc().then((result) => {
  console.log(result)
})

// 실행 결과
// workP function
// async Function