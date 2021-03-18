/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  roots: ["<rootDir>"],
  testMatch: [
    "<rootDir>/src/**/*.test.js",
    "<rootDir>/website/src/**/*.test.js",
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg)$": "identity-obj-proxy",
    "^react($|/.+)": "<rootDir>/node_modules/react$1",
    basis: "<rootDir>/src",
    "typeface-montserrat": "identity-obj-proxy",
    "typeface-roboto": "identity-obj-proxy",
  },
  modulePaths: ["src"],
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
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
