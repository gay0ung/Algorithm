function solution(order) {
    const container = order;
    const extraContainer = [];
    const yeongjaeContainer = [];
    let currentOrder = 1;
// console.log(container.length !== 0);
    // container.forEach(element => {
        
    // });
    // for (let i = 1; i< order.length; i++) {
    //     if (container[0] === currentOrder) {
    //         yeongjaeContainer.push(container.shift());
    //         currentOrder++;
    //         // continue;
    //     } else {
    //         extraContainer.push(container.shift());
    //     }
    // }

    while(container.length > 0) {
        console.log(`container : ${container}`);
        console.log(`extraContainer : ${extraContainer}`);
        console.log(`yeongjaeContainer : ${yeongjaeContainer}`);

        if (container[0] === currentOrder) {
            yeongjaeContainer.push(container.shift());
            currentOrder++;
            continue;
        } else {
            extraContainer.push(container.shift());
        }

        const firstBoxFromExtra = extraContainer[0];
        const lastBoxFromExtra = extraContainer[extraContainer.length - 1];

        if (firstBoxFromExtra === currentOrder) {
            yeongjaeContainer.push(extraContainer.shift());
            currentOrder++;
            // break;
        } else if (lastBoxFromExtra === currentOrder) {
            yeongjaeContainer.push(extraContainer.pop());
            currentOrder++;
            // break;
        } 
    }


    console.log( yeongjaeContainer.length);
    console.log(`answer is ${yeongjaeContainer.length}, array is [${yeongjaeContainer}]`);
    return yeongjaeContainer.length;
}

// solution([4, 3, 1, 2, 5]);
// 2
solution([5, 4, 3, 2, 1]);
// 5