// function solution(n, k) {
//     /*
//         1. k번째를 제거 한다
//         2. 제거한뒤 다음 순서를 새로운 기준으로 적용한다
//         3. 마지막 인경우 첫번째를 제거한다.
//     */

//     let head = k + 1;
//     const queue = Array.from({length: n}, (_,i) => i + 1).filter(v => v !== k);

//     console.log(queue);
//     // 조건이 잘못되어있음. 왜 반대로 했지? 
//     while (queue.length < 2) {
//         const headIdx = getHeadIdx(head, queue);
//         head = queue[headIdx];
//         // 배열을 필터링 했지만 결과를 저장 하지 않음 (원본 queue를 변경하지 않음)
//         queue.filter(v => v !== queue[headIdx + 1]);
//     }

//     function getHeadIdx(number, arr) {
//         return arr.findIndex((v) => v === number);
//     }
// }

/* 내가 풀이한 구현사항 동작 하도록 수정 -> 해당 방식은 큐의 개념이 적용되진 않았다 */
function solution(n, k) {
    const queue = Array.from({ length: n }, (_, i) => i + 1);
    let idx = 0;

    while (queue.length > 1) {
        idx = (idx + k - 1) % queue.length;
        queue.splice(idx, 1);
    }

    return queue[0]
}

console.log(solution(5, 2)); // 3
console.log(solution(5, 3)); // 4