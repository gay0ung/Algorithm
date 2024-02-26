function solution(sequence, k) {
    let doubleArr = [];
    let addedValue = 0;
    let aIdx = 0;
    let bIdx = 0;
    
    for(let i = 0; i < sequence.length; i++) {
        aIdx = i;
        bIdx = i;
        addedValue = sequence[i];

        while(addedValue <= k) {
            if (addedValue === k) {
                doubleArr.push([aIdx, bIdx]);
                addedValue = 0;
                break;
            }

            if (addedValue > k) {
                addedValue = 0;
                break;
            }

            bIdx += 1;
            addedValue += sequence[bIdx];      
        }
    }

    return doubleArr.sort((a, b) =>  (a[1] - a[0]) - (b[1] - b[0]))[0];
}
// solution([1, 2, 3, 4, 5], 7);
solution([1, 1, 1, 2, 3, 4, 5], 5);
// solution([2, 2, 2, 2, 2], 6);
// [2, 3]
// [6, 6]
// [0, 2]