function solution(n, k) {
    /*
        1. k번째를 제거 한다
        2. 제거한뒤 다음 순서를 새로운 기준으로 적용한다
        3. 마지막 인경우 첫번째를 제거한다.
    */

    let head = k + 1;
    const queue = Array.from({length: n}, (v,i) => i + 1).filter(v => v !== k);

    console.log(queue);

    while (queue.length < 2) {
        const headIdx = getHeadIdx(head, queue);
        head = queue[headIdx];
        queue.filter(v => v !== queue[headIdx + 1]);

    }
    

    function getHeadIdx(number, arr) {
        return arr.findIndex((v) => v === number);
    }
}

console.log(solution(5, 2)); // 3