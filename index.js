const creatCounter = () => {
    let counter =0;
    return {
        increment: () => {
            counter += 1;
            return counter;
        },
        decrement: () => {
            counter -=1;
            return counter;
        },
        reset: () => {
            counter=0;
            return counter;
        }
    }
}

const myCounter = creatCounter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());