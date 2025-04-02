/*
    좌표 경계 무시
    U L R D
    처음 걸어본 길이 구하기
    min : -5,  max : 5
    [x,y] = [0,0]
*/

function solution(dirs) {
    let coordinateList = [];
    let x = 0;
    let y = 0;
    const MIN_VAL = -5;
    const MAX_VAL = 5;

    for (let i = 0; i < dirs.length; i++) {
        switch (dirs[i]) {
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }

        console.log(`x: ${x}, y: ${y}, dirs: "${dirs[i]}"`);

        if (x > MAX_VAL) {
            x = MAX_VAL;
        }
        if (x < MIN_VAL) {
            x = MIN_VAL;
        }
        if (y > MAX_VAL) {
            y = MAX_VAL;
        }
        if (y < MIN_VAL) {
            y = MIN_VAL;
        }
        coordinateList.push([x, y])
    }
    console.log(coordinateList);
    
    const answer = [ ...new Set(coordinateList.join("|").split("|")) ].length;
    console.log([ ...new Set(coordinateList.join("|").split("|")) ]);
    
    
    console.log(answer);
    return answer;
    
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7