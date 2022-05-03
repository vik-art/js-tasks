function findFrequency(arr) {
return arr.reduce((prev, curr) => {
    return prev[curr] ? prev[curr] ++ : prev[curr] = 1, prev
}, {})
}


const flatten = (arr) => {
    let res = [];
  for(let i = 0; i < arr.length; i ++) {
    if(Array.isArray(arr[i])) {
        const flat = flatten(arr[i]);
        for(let j = 0; j < flat.length; j ++) {
            res.push(flat[j])
        } 
    }else {
        res.push(arr[i])
    }
  }
  return res;
}
  
function vowelIndices(word){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const res = [];
    for(let i = 0; i < word.length; i ++) {
        if(vowels.includes(word[i])) {
           res.push(i + 1)
        }
    }
    return res;
  }


  function countPositivesSumNegatives(input) {
    let positive = 0;
    let negative = 0;
  input.map(n => {
    n <= 0 ? negative += n : positive =+ n;
  })
  return [positive, negative]
}
 

