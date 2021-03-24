module.exports = {
  // preset: "ts-jest/presets/js-with-babel",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(test).js?(x)"],
  // transform: {
  //   "^.+\\.tsx?$": "babel-jest",
  // },
  // moduleFileExtensions: ["ts", "js", "tsx"],
  // transform: {
  //   "\\.ts$": "ts-jest",
  //   "\\.js$": "ts-jest",
  // },
  // testMatch: [
  //   "<rootDir>/src/**/*.test.js",
  //   "<rootDir>/website/src/**/*.test.js",
  // ],
  // moduleNameMapper: {
  //   "^react($|/.+)": "<rootDir>/node_modules/react$1",
  //   basis: "<rootDir>/src",
  //   "typeface-montserrat": "identity-obj-proxy",
  //   "typeface-roboto": "identity-obj-proxy",
  // },
  // globals: {
  //   __PATH_PREFIX__: "",
  //   "ts-jest": {
  //     babelConfig: true,
  //   },
  // },
};
