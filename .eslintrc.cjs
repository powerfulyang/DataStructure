const { eslint } = require('@powerfulyang/lint');

module.exports = {
  ...eslint,
  overrides: eslint.overrides.map((override) => ({
    ...override,
    rules: {
      ...override.rules,
      'no-plusplus': 'off',
      'no-continue': 'off',
      'no-param-reassign': 'off',
      'no-bitwise': 'off',
    },
  })),
};
