// Push and pop are always constant
// O(1)
arr = []
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)


// Or finding a odd or even number

function isEvenOrOdd(n) {
  return n % 2 ? 'Odd' : 'Even';
}

console.log(isEvenOrOdd(10)); // => Even
console.log(isEvenOrOdd(10001)); // => Odd

