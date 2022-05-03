const vowels = word => {
    const vowels = ['a', 'o', 'e', 'i', 'y', 'u'];
    const transform = word.toLowerCase();
    const res = [];
    for(let i = 0; i < transform.length; i++) {
      if(vowels.includes(transform[i])) {
          res.push(i + 1)
      }
    }
    return res;
}

console.log(vowels("qwweweMKDnIJFIOJFIOJFEEEEmlnkml;m"))