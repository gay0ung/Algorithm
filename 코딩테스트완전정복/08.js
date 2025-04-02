// function solution(s){
//     const arr = s.split('');
//     const open_paren = "(";
//     const close_paren = ")";
//     let isValidParenthesis = false;

//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1 &&
//             arr[i] === close_paren &&
//             arr[i - 1] === open_paren
//         ) {
//             isValidParenthesis = true;
//         }
//     }
    
//     return isValidParenthesis;
// }

function solution(s) {
    let stack = [];

    for (const p of s) {
        if (p === "(") {
            stack.push(p);
        } else if (p === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }


    return stack.length === 0;
}

console.log(solution("(())()")); // 반환값 : true
// console.log(solution("((())()")); // 반환값 : false