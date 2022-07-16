/**
 * @type {import('ts-jest').InitialOptionsTsJest}
 */
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  setupFilesAfterEnv: ['jest-extended/all'],
};
