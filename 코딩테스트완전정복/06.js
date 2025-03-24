function solution(N, stages) {
    /*
        조건
        실패율이 높은 수로 내림차순 값을 리턴한다
        실패율이 같을경우 작은 숫자가 먼저 온다
        스테이지 도달한 유저 없는 경우 실패율은 0으로 처리한다
    */

    var answer = [];
    let currentStage = 1;

    let denominatorList = [];
    let numeratorList = [];
    let failureRages = [];

    while (currentStage <= N) {
        numeratorList[currentStage - 1] = 0;
        denominatorList[currentStage - 1] = 0;

        for (let i = 0; i < stages.length; i++) {
            if (stages[i] === currentStage) {
                denominatorList[currentStage - 1]++;
            }

            if (stages[i] >= currentStage) {
                numeratorList[currentStage - 1]++;
            }
        }

        failureRages.push({
            idx: currentStage,
            rate: denominatorList[currentStage-1]/numeratorList[currentStage-1]
        })
        currentStage++;
    }


    failureRages.sort((a, b) => b.rate - a.rate);
    answer = failureRages.map((failureRate) => failureRate.idx);
    return answer;
}


console.log(solution(5 ,[2, 1, 2, 6, 2, 4, 3, 3])) // [3,4,2,1,5]
console.log(solution(4, [4,4,4,4,4]));  // [4,1,2,3]