/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  setupFilesAfterEnv: ['jest-extended/all'],
};

module.exports = config;
