//make flat array
//----1 
const flat = arr => {
    const res = [];
    for(let i = 0; i < arr.length; i ++) {
        if(Array.isArray(arr[i])) {
            const flatten = flat(arr[i]);
            for(let j = 0; j < flatten.length; j ++) {
                res.push(flatten[j])
            }
        } else {
            res.push(arr[i])
        }
    }
    return res;
}

//----2

const flat2 = arr => {
    return arr.flat(Infinity)
}

console.log(flat([1, [[2, 3, [[[4, 5, 6, 7, [[[[[[8, 9]]]]]]]]]]]]))
console.log(flat2([1, [[2, 3, [[[4, 5, 6, 7, [[[[[[8, 9]]]]]]]]]]]]))