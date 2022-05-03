const findFrequency = arr => {
    return arr.reduce((acc, curr) => {
        return acc[curr] ? acc[curr] ++ : acc[curr] = 1, acc
    }, {})
    
}

console.log(findFrequency([1, 1, 2, 3, 4, 5, 4, 5, 4, 5, 2]))

// input: array;
//  output: object, where:
// the key is element of the array
// the value - the number of repetition of this element in the array