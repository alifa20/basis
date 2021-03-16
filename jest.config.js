/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  roots: ["<rootDir>"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [
    "node_modules",
    "dist",
    "component-lib",
    "basis-lib",
  ],
  globals: {
    __PATH_PREFIX__: "",
    "ts-jest": {
      babelConfig: true,
    },
  },

  testURL: "http://localhost",
  moduleDirectories: ["node_modules", "src"],
};
