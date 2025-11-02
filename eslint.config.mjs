// eslint.config.mjs or eslint.config.js

import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [js.configs.recommended, next.configs["core-web-vitals"]];
