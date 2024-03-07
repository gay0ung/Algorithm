function solution(n) {
    const oneTowFour = [4,1,2];
    let answer = '';
// console.log(n%3);
    while(n){
        answer = oneTowFour[(n%3)] + answer;
        n = (n % 3 === 0) ? n/3 - 1 : Math.floor(n/3);
    }
    console.log(answer);
    return answer;
}

solution(20);
// 1
// solution(2);
// 2
// solution(3);
// 4
// solution(4);
// 11