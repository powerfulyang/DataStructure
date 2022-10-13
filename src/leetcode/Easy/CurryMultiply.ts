type FunctionType = ((a: number) => FunctionType) & (() => number);

export const CurryMultiply = (() => {
  let total = 1;
  const multiply = (num?: number) => {
    if (num === undefined) {
      return total;
    }
    total *= num;
    return multiply;
  };
  // implicit conversion to number
  multiply.toString = () => total;
  multiply.valueOf = () => total;
  return multiply as FunctionType;
})();
