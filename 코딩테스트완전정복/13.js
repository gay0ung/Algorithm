function solution(board, moves) {
    /*
        터뜨려져 사라진 인형의 개수 return
        겹치게 된다면 사라진다

        plan
        1. 중첩된 배열에서 인형을 찾는다
        2. 뽑아낸 인형을 바구니 배열에 넣는다
        3. 뽑아낸 인형 위치에 인형이 없다는 표시를 해준다 (0을 넣어준다)
        4. 바구니에 같은 인형이 있는경우 pop 해준다.
        5. 없어진 인형을 카운팅 해준다. (1쌍 = 2)
    */
    let answer = 0;
    const basket = [];

    for (let i = 0; i < moves.length; i++) {
        let pickedItem = 0;
        let currentCraneIdx = moves[i] - 1;

        for (let j = 0; j < board.length; j++) {
            const item =  board[j][currentCraneIdx];

            if (item > 0) {
                pickedItem = item;
                board[j][currentCraneIdx] = 0;
                break;
            }
        }
            // 4,3,1,1,3,2,4

        if (pickedItem === basket[basket.length - 1]) {
            basket.pop();
            answer += 2;
        } else {
            if (pickedItem > 0) {
                basket.push(pickedItem);
            }
        }
    }
    
    return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])); // 4