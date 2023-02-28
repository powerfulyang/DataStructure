export const InstanceOf = (instance: Object, Instance: Function) => {
  // @ts-ignore
  let __proto__ = Object.getPrototypeOf(instance);
  const { prototype } = Instance;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (__proto__ === null) {
      return false;
    }
    if (__proto__ === prototype) {
      return true;
    }
    // eslint-disable-next-line no-proto
    __proto__ = Object.getPrototypeOf(__proto__);
  }
};
