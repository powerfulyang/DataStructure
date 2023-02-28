// eslint-disable-next-line no-extend-native
Function.prototype.bind = function BIND(context, ...argArray) {
  return (...args) => {
    return this.apply(context, [...argArray, ...args]);
  };
};

// eslint-disable-next-line no-extend-native
Function.prototype.apply = function APPLY(context, argArray) {
  let ctx = context;
  if (ctx === null || ctx === undefined) {
    ctx = window;
  }
  const fn = Symbol('APPLY');
  ctx[fn] = this;
  const result = ctx[fn](...argArray);
  delete ctx[fn];
  return result;
};

// eslint-disable-next-line no-extend-native
Function.prototype.call = function CALL(context, ...argArray) {
  let ctx = context;
  if (ctx === null || ctx === undefined) {
    ctx = window;
  }
  const fn = Symbol('CALL');
  ctx[fn] = this;
  const result = ctx[fn](...argArray);
  delete ctx[fn];
  return result;
};
