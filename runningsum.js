let input = [2, 3, 5, 1, 6]

function newfunction(newArr) {
    let sum = 0;
    let arr = []

    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
        arr[i] = sum;
    }
    return arr;
};
