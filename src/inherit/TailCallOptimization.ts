export function factorial(x: number): number {
  if (x === 0) {
    return 1;
  }
  return x + factorial(x - 1); // (A)
}

function recurse(x: number, acc: number) {
  if (x === 0) {
    return acc;
  }
  return recurse(x - 1, x + acc); // (A)
}

export function factorial2(x) {
  return recurse(x, 1);
}
