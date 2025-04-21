// function solution(prices) {
//     /* 주가가 n초 동안 유지된 시가을 리턴 하면 된다. */
//     const answer = Array(prices.length).fill(0)

//     for(let i = 0; i < prices.length; i++) {
//         for(let j = 1; j < prices.length; j++) {
//             if (prices[i] <= prices[i+j]) {
//                 answer[i] += 1; 
//             }
//         }
//     }

//     return answer; 
// }

/* 원인 분석해서 다시 풀어 보기 */
// function solution(prices) {
//     const answer = Array(prices.length).fill(0)

//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i + 1; j < prices.length; j++) {
//             answer[i]++;

//             if(prices[i] > prices[j]) {
//                 break;
//             }
//         }
//     }

//     return answer
// }

/* 스택으로 풀이 하기 */
function solution(prices) {
    const answer = Array(prices.length).fill(0);

    const stack = [0];

    for (let i = 1; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const prevIdx = stack.pop();
            answer[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const lastStackIdx = stack.pop();
        answer[lastStackIdx] = prices.length - 1 - lastStackIdx;
    }
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]