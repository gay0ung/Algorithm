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
function solution(prices) {
    const answer = Array(prices.length).fill(0)

    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            answer[i]++;

            if(prices[i] > prices[j]) {
                break;
            }
        }
    }

    return answer
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]