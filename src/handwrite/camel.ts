export const underline2Camel = (str) =>
  str.replace(/_(\w)/g, (_p1: string, p2: string) => p2.toUpperCase());

export const camel2Underline = (str) =>
  str.replace(/([A-Z])/g, (p1: string) => `_${p1.toLowerCase()}`);
