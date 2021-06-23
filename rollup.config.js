import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [image(), typescript()],
};
