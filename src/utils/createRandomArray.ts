const createRandomArray = (number: number): Array<number> => {
    const array = [];
    for (let i = 0; i < number; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        array.push(randomNumber);
    } 
    return array;
};

export default createRandomArray;