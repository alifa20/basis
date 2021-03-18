import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "website/lib/basis-lib/index.js",
        format: "esm",
        banner: "/* eslint-disable */",
      },
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      del({ targets: ["dist/*", "website/lib/basis-lib"] }),
      typescript({
        include: ["src/*.js", "src/**/*.js", "src/*.ts(x)", "src/**/*.ts(x)"],
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
