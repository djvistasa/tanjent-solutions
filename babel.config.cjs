module.exports = function (api) {
  return {
    plugins: [
      'macros',
      'babel-plugin-styled-components',
      { displayName: false },
    ],
  };
};
