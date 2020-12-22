function countDown(i) {
  console.log(i);
  if (i <= 1) {
    return; // 기본 단계
  } else {
    countDown(i - 1); // 재귀 단계
  }
}

countDown(3);
