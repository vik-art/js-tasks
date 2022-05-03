const findFrequency = arr => {
    return arr.reduce((acc, curr) => {
        return acc[curr] ? acc[curr] ++ : acc[curr] = 1, acc
    }, {})
    
}

const findFrequency2 = arr => {
    const obj = {};
    for(let i = 0; i < arr.length; i ++) {
        const curr = arr[i];
       obj[curr] ? obj[curr]++ : obj[curr] = 1;
    }
    return obj;
}

console.log(findFrequency([1, 1, 2, 3, 4, 5, 4, 5, 4, 5, 2]));
console.log(findFrequency2([1, 1, 2, 3, 4, 5, 4, 5, 4, 5, 2]))

// input: array;
//  output: object, where:
// the key is element of the array
// the value - the number of repetition of this element in the array