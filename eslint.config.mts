import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.node },
    rules: {
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "indent": ["error", 4],
      "linebreak-style": ["error", "windows"],
      "no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    }
  },
  tseslint.configs.recommended,
]);
