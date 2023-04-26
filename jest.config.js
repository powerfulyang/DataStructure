const { pathsToModuleNameMapper } = require('@powerfulyang/lint');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

/** @type {import('jest').Config} */
const config = {
  moduleNameMapper,
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  setupFilesAfterEnv: ['jest-extended/all'],
};

module.exports = config;
