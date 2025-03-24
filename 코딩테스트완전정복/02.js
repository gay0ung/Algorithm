// console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
// console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]

/*
- 중복값 제거하기
- 배열을 내림 차순으로 정렬해서 반환하기 (5,4,3,2,1)
*/

const solution = (arr) => {
    const duplicateRemoved = [...new Set(arr)];
    return duplicateRemoved.sort((a, b) => b - a);
}

console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]