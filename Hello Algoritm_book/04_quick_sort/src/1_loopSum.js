// 배열의 합을 구해라
function sum(arr) {
  let total = 0;
  console.log(typeof total);

  for (const x of arr) {
    console.log(x);
    total += x;
  }
  return total;
}

// console.log(sum([1, 2, 3, 4]));

// 퀵정렬
function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0]; // 재귀단계 (10 -> 기준 원소)

    let less = [];
    let greater = [];

    for (let i of arr) {
      if (i < pivot) {
        less.push(i); // 기준원소보다 작은 원소로 이루어진 배열
      } else if (i > pivot) {
        greater.push(i); // 기준 원소보다 큰 원소로 이루어진 배열
      }
    }

    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
}

console.log(quicksort([10, 5, 2, 3]));
