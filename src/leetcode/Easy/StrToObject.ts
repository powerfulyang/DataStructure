/**
 * 'a.b.c' to {a: {b: {c: null}}}
 */
export const strToObject = (str: string) => {
  const arr = str.split('.');
  let obj = null;
  arr.reverse().forEach((item) => {
    obj = { [item]: obj };
  });
  return obj;
};
