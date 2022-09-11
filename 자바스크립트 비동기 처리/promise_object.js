function work(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
};

work(1, (result) => {
  console.log('첫 번째 작업', result);
});

work(1, (result) => {
  console.log('두 번째 작업', result);
});

work(1, (result) => {
  console.log('세 번째 작업', result);
});

// 동기적 처리
function work(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
};

work(1, (result) => {
  console.log('첫 번째 작업', result);

  work(1, (result) => {

    work(1, (result) => {
      console.log('세 번째 작업', result);
    });

    console.log('두 번째 작업', result);

  });
  
});

// Promise 의 사용
function workP(sec) {
  // Promise의 인스턴스를 생성하여 반환하고
  // then에서 반환한 것을 받는다.
  return new Promise((resolve, reject) => {
    // Promise 생성시 넘기는 callback = resolve, reject
    // resolve 동작 완료시 호출, 오류 났을 경우 reject
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

workP(1).then((result) => {
  console.log('첫 번째 작업', result);
  return workP(1);
}).then((result) => {
  console.log('두 번째 작업', result);
});

// 실행 결과
// 첫 번째 작업 2022-09-11T15:07:48.716Z
// 두 번째 작업 2022-09-11T15:07:49.731Z
