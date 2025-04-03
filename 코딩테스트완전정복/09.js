// function solution(decimal) {
//     return decimal.toString(2);
// }

/* 스텍으로 풀이해 보기 */
function solution(decimal) {
    const stack = [];

    while(decimal > 0) {
        const remainVal = decimal % 2;
        stack.push(remainVal);
        decimal = Math.floor(decimal / 2);
    }
    return stack.reverse().join('');
}

console.log(solution(10)); // 반환값 :  1010
console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001