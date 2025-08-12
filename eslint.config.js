// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  // Default for all JS files
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // <- gives you process, console, etc.
      },
    },
    ignores: ["node_modules/**"],
  },

  // Test files: add Jest globals
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // <- describe, it, expect
      },
    },
  },
];
