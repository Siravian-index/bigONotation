//Linear means that its time complexity will increase according 
//to the amount of elements in a linear manner
// O(n)

function findMax(n) {
  let max;
  let counter = 0;

  for (let i = 0; i < n.length; i++) {
    counter++;
    if(max === undefined || max < n[i]) {
      max = n[i];
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`);
  return max;
}


console.log(findMax([123,344,234,53242]))