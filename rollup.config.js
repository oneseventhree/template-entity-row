import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const dev = Boolean(process.env.ROLLUP_WATCH);

export default {
  input: "src/main.ts",
  output: {
    file: "template-entity-row.js",
    format: "es",
    sourcemap: dev,
  },
  plugins: [
    nodeResolve(),
    json(),
    typescript(),
    !dev && terser({ format: { comments: false } }),
  ],
};
