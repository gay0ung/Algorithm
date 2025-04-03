/*
    좌표 경계 무시
    U L R D
    처음 걸어본 길이 구하기
    min : -5,  max : 5
    [x,y] = [0,0]
*/

// function solution(dirs) {
//     let coordinateList = [];
//     let x = 0;
//     let y = 0;
//     const MIN_VAL = -5;
//     const MAX_VAL = 5;

//     for (let i = 0; i < dirs.length; i++) {
//         switch (dirs[i]) {
//             case 'L':
//                 x--;
//                 break;
//             case 'R':
//                 x++;
//                 break;
//             case 'U':
//                 y++;
//                 break;
//             case 'D':
//                 y--;
//                 break;
//         }

//         console.log(`x: ${x}, y: ${y}, dirs: "${dirs[i]}"`);

//         if (x > MAX_VAL) {
//             x = MAX_VAL;
//         }
//         if (x < MIN_VAL) {
//             x = MIN_VAL;
//         }
//         if (y > MAX_VAL) {
//             y = MAX_VAL;
//         }
//         if (y < MIN_VAL) {
//             y = MIN_VAL;
//         }
//         coordinateList.push([x, y])
//     }
//     console.log(coordinateList);
    
//     const answer = [ ...new Set(coordinateList.join("|").split("|")) ].length;
//     console.log([ ...new Set(coordinateList.join("|").split("|")) ]);
    
    
//     console.log(answer);
//     return answer;
// }


/* 2025.04.03 */
function isValidPosition(nx, ny) {
    const MIN_VAL = -5;
    const MAX_VAL = 5;

    return nx <= MAX_VAL && nx >= MIN_VAL && ny <= MAX_VAL && ny >= MIN_VAL; 
}

function updatePosition(x,y, dir) {
    switch (dir) {
        case "U":
            return [x, y + 1];
        case "D":
            return [x, y - 1];
        case "R":
            return [x + 1, y];
        case "L":
            return [x - 1, y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    const arr = new Set();

    for (const dir of dirs) {
        const [nx, ny] = updatePosition(x,y, dir);

        if (isValidPosition(nx, ny)) {
            // 테스트 실패 -> 문자열로 좌표를 구분할 경우 좌표가 겹칠수가 있다. 0,11 ->  1,1 & 0,1 -> 11,1 둘다 "0111" 다른 좌표 값이지만 같은 값으로 처리해서 중복에서 제거해 버릴수 있음 
            // arr.add(`${x}${y}${nx}${ny}`);
            // arr.add(`${nx}${ny}${x}${y}`);

            // 테스트 실패...
            arr.add([x, y, nx, ny].join(','));
            arr.add([nx, ny, x, y].join(','));
            x = nx;
            y = ny;
        } 
    }
    
    return arr.size / 2;
}


console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7