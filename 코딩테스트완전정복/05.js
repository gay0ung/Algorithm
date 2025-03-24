const solution = (arr1, arr2) => {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
           answer.push((arr1[i][j] * arr2[i][j]) + (arr1[i][(j + 1) % arr2[i].length] * arr2[(i + 1) % arr2[i].length][j]));
        }
    }
    
    return answer;
}

console.log(solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]])); // 	[[15, 15], [15, 15], [15, 15]]
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
