function solution(number, k) {
    // var answer = '';
    // return answer;
    // console.log(number);
    // 가장 큰수를 뽑는다.
    // 큰 수중 k 자리수를 arr에 담는다. 그중 가장 근 문자열을 찾는다.
    // ->  가장 큰수가 k자리수 보다 작을 경우 통과 할 수 없다.
    // const arr = number.split('');
    // let num = Number(k);
    const arr = number.split('');
    const maxNum = String(Math.max(...number.split('')));
    const maxNumIdx = arr.findIndex((a) => a === maxNum);

    let answers = [];

    let num = Number(k);
    for(let i = 0; i < number.length; i++) {

        if(i < maxNumIdx) {
            continue;
        }
        for(let j = i; j < arr.length; j++) {
            const arr2 = arr.slice(j, j + num);
        }
    }
    return answers.join('');

}

function solution2(number, k) {
    const stack = [];
    let digit = k;

    for(let i = 0; i < number.length; i++) {
        const num = number[i];
    
        while(digit > 0 && stack.at(-1) < num) {
            stack.pop();
            digit--;
        }
    
        stack.push(num);
    }
    return stack.slice(0, number.length - k).join('');
}

solution2("1924", "2");
// "94"
solution2("1231234", "3");
// "3234"
solution2("4177252841", "4");
// "775841"
solution2("4321", "1");