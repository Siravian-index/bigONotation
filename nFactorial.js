// the slowest way to write code that should scale.
// O(n!)
function f(n) {
  if (n === 0 ){
    console.log('************')
    return;
  }

  for (let i = 0; i < n; i++) {
    f(n - 1);
  }
}

f(20)