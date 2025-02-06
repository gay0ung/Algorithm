const solution = (arr) => {
    let currentIdx = 0;
    let calculatedArr = [];
    
    while(currentIdx < len) {
        for(let i = currentIdx; i < arr.length - 1; i++) {
            if(arr[i + 1] !== undefined) {
                calculatedArr.push(arr[currentIdx] + arr[i + 1]);
            }
        }
        currentIdx++;
    }
    
    return [...new Set(calculatedArr.sort((a,b) => a - b))];
}

console.log(solution([2,1,3,4,1])); // [2,3,4,5,6,7]
console.log(solution([5,0,2,7]));  // [2,5,7,9,12]
