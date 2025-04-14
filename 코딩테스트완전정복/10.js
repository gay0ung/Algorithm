// function isValidParentheses(stack) {
//     const s_open = "(",
//         s_close = ")",
//         m_open = "{",
//         m_close = "}",
//         l_open = "[",
//         l_close = "]";

//     let arr = stack;
//     let currentIdx = 0;
    
//     // 모든 문자열의 괄호가 맞아야함. 그럼 맞는 괄호면 제거하고, 배열이 비여있을때만 true 해주면 될듯
//     while (currentIdx < stack.length) {
//         currentIdx++;
//         let idx = 0;

//         if (!stack[idx] || !stack[idx + 1]) {
         
//             return;
//         }

//         console.log("🪬 currentIdx", currentIdx);
//         console.log("stack : ", stack);
//         console.log("Arr : ", arr);
        
//         if (stack[idx] && (
//             stack[idx] === s_open && stack[idx+1] === s_close || 
//             stack[idx] === m_open && stack[idx+1] === m_close ||
//             stack[idx] === l_open && stack[idx+1] === l_close
//         )) {
//             // arr = [...arr, stack[currentIdx], stack[currentIdx+1]];
//             arr.splice(0, 2);
//             console.log(arr);
            
//             idx = 0;
//         } else {
//             idx++;
//         }
       
//         currentIdx++;
//     }

//     return arr.length === 0;
// }

// function solution(s) {
//     /* 
//         [()] -> 올바른 괄호이다
//         shilft 한뒤 push 한 결과의 문자열 모두가 올바른 괄호 형태여야 한다.  
//     */
//     let currentIdx = 0;
//     let answer = 0;
//     let stack = s.split('');

//     while (currentIdx < s.length) {
//         const character = stack.shift();
//         stack.push(character);
        
//         currentIdx++;

//         if (isValidParentheses(stack)) {
//             answer++;
//         }
        
//     }

//     return answer;
// }

// 내가 풀이한 방법으로 다시 알맞게 풀이해 보기
function isValidParentheses(s) {
    const stack = [];
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    let arr = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (isValidParentheses(arr)) {
            answer++;
        }

        arr.push(arr.shift());
    }

    return answer;
}


console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0