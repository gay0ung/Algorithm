const solution = (answers) => {
    /*
        1번: 1,2,3,4,5
        2번: 2,1,2,3,2,4,2,5
        3번: 3,3,1,1,2,2,4,4,5,5
        
        - 가장 문제를 많이 맞힌 사람 배열 리턴
        - 가장 높은 점수를 받은 사람이 여러명일 경우 오름차순 (n번 학생으로 1,2,3) 정렬
        10000 이하하
    */

    /* 풀이1 -> 접근을 잘못함 */
    // const TOTAL_EXAM = 10;
    // let currentExamNumber = 0;
    // const answerLength = answers.length;
    // const currentAnswer = 0;

    // while (currentExamNumber < answers.length) {
    //     for (let i = 0; i < studentAnswers.length; i++) {
    //         if (answers[currentExamNumber] === studentAnswers[i][currentExamNumber]) {
    //             scores[i]++;
    //         }
    //     }

    //     currentExamNumber++
    // }

    /* 풀이2 -> 채점은 성공했지만, 제출 실패 */
    // const studentAnswers = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    // let scores = [0,0,0];
    // 
    // for (let i = 0; i < answers.length; i++) {
    //     for (let j = 0; j < studentAnswers.length; j++) {
    //         if (answers[i] === studentAnswers[j][i]) {
    //             scores[j]++;
    //         }
    //     }
    // }

    // const maxScore = Math.max(...scores);
    // const filteredScores = scores.filter((score) => score === maxScore);

    // return filteredScores.map((score, idx) => {
    //     return idx + 1;
    // }).sort((a,b) => a - b);

    /* 풀이3 -> 실패 */
    // const studentAnswers = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    // let scores = [0, 0, 0];
    // let currentExamNumber = 0;
    // let ranker = [];

    // while (currentExamNumber < answers.length) {
    //     for (let i = 0; i < studentAnswers.length; i++) {
    //         if (answers[currentExamNumber] === studentAnswers[i][currentExamNumber]) {
    //             scores[i]++;
    //         }
    //     }

    //     currentExamNumber++;
    // }

    // scores.forEach((score, idx) => {
    //     if (score === Math.max(...scores)) {
    //         ranker.push(idx + 1);
    //     }
    // })

    // return ranker.sort((a,b) => a - b);

    /*풀이4 */
    const studentAnswers = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let scores = [0, 0, 0];
    let currentExamNumber = 0;
    let ranker = [];

    while (currentExamNumber < answers.length) {
        for (let i = 0; i < studentAnswers.length; i++) {
            // console.log(`학생${i+1}의 답: ${studentAnswers[i][currentExamNumber % studentAnswers[i].length]}`);
            // console.log(currentExamNumber % studentAnswers[i].length);
            console.log(`학생${i+1} 정답: ${studentAnswers[i][currentExamNumber % studentAnswers[i].length]}`);
            
            if (answers[currentExamNumber] === studentAnswers[i][currentExamNumber % studentAnswers[i].length]) {
                scores[i]++;
            }
        }

        currentExamNumber++;
    }

    scores.forEach((score, idx) => {
        if (score === Math.max(...scores)) {
            ranker.push(idx + 1);
        }
    })

    return ranker.sort((a,b) => a - b);
}

// console.log(solution([1,2,3,4,5])); // [1]
// console.log(solution([1,3,2,4,2])); // [1,2,3]
console.log(solution([1,3,2,4,2,1,2,3,4,5,2,3,4,5])); // [1,2,3]
