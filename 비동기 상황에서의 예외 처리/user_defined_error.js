// 사용자 정의 오류 
// function sum(a, b) {
//   if (typeof a !== 'number' || typeof y !== 'number') {
//     throw 'type of arguments must be number type';
//   }
//   console.log(a + b);
// }

// sum('1', '2');

// 일반적인 예외 처리

// catch해 주지 않은 부분은 실행되지 않음
function f2() {
  console.log('this is f2 start');
  throw new Error('오류'); // Error 객체 - 해당하는 콜 스택 정보가 담겨 있습니다.
  console.log('this is f2 end'); // 실행되지 않습니다.
}

function f1() {
  console.log('this is f1 start');
  try {
    f2();
  } catch (e) {
    console.log(e);
  }
  console.log('this is f1 end');
}

f1();