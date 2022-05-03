

  function countPositivesSumNegatives(input) {
    let positive = 0;
    let negative = 0;
  input.map(n => {
    n <= 0 ? negative += n : positive =+ n;
  })
  return [positive, negative]
}
 

