describe('Object', () => {
  class Test {}

  it('inheritance', () => {
    const Animal = {
      name: 'Animal',
    };

    const rabbit = {
      __proto__: Animal,
    };

    expect(Object.keys(rabbit)).toEqual([]);
    expect(Reflect.ownKeys(rabbit)).toEqual([]);
    expect(Object.hasOwn(rabbit, 'name')).toBe(false);
    expect(Reflect.has(rabbit, 'name')).toBe(true);
    expect(Object.getPrototypeOf(rabbit)).toBe(Animal);
  });

  it('instanceof', () => {
    function F() {}
    expect(new F() instanceof F).toBe(true);
    expect(new F() instanceof Function).toBe(false);
    expect(F instanceof Function).toBe(true);
    expect(typeof F === 'function').toBe(true);
    expect(typeof Test).toBe('function');
    const test = new Test();
    expect(test instanceof Test).toBe(true);
  });

  it('prototype', () => {
    expect(Test.prototype).toEqual({});
    expect(Reflect.get(Test, '__proto__')).toBe(Function.prototype);
  });
});
