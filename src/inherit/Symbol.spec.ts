describe('Symbol', () => {
  it('global symbol', () => {
    const s1 = Symbol.for('foo');
    const s2 = Symbol.for('foo');
    expect(s1).toBe(s2);
    const key = Symbol.keyFor(s1);
    expect(key).toBe('foo');
  });
});
