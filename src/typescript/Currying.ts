type CurryingReturn<F> = F extends (...args: infer A) => infer Return
  ? A extends [infer G, ...infer Rest]
    ? (arg: G) => CurryingReturn<(...args: Rest) => Return>
    : Return
  : never;

declare function Currying<F>(fn: F): CurryingReturn<F>;

const curry = Currying((a: number, b: number, c: number) => a + b + c);

curry(1)(2)(3);
