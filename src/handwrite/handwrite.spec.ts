import { describe, expect, it } from '@jest/globals';
import { camel2Underline, underline2Camel } from './camel';
import { InstanceOf } from './instanceof';
import { trim } from './trim';

describe('handwrite', () => {
  it('InstanceOf', () => {
    expect(InstanceOf({}, Object)).toBe(true);
    expect(InstanceOf([], Array)).toBe(true);
  });

  it('trim', () => {
    expect(trim('  abc  ')).toBe('abc');
    expect(trim('  ab \nc \n ')).toBe('ab \nc');
  });

  it('underline2Camel', () => {
    expect(underline2Camel('a_b_c')).toBe('aBC');
    expect(underline2Camel('a_b_c_d')).toBe('aBCD');
  });

  it('camel2Underline', () => {
    expect(camel2Underline('aBC')).toBe('a_b_c');
    expect(camel2Underline('aBCD')).toBe('a_b_c_d');
  });
});
