import js from "@eslint/js";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// Rule severity levels
const OFF = "off";
const WARN = "warn";
const ERROR = "error";

// Rule configurations
const SPACING_RULES = {
  "array-bracket-spacing": [ERROR, "never"],
  "arrow-spacing": ERROR,
  "block-spacing": ERROR,
  "comma-spacing": ERROR,
  "computed-property-spacing": ERROR,
  "func-call-spacing": ERROR,
  "key-spacing": ERROR,
  "keyword-spacing": ERROR,
  "object-curly-spacing": [ERROR, "always"],
  "rest-spread-spacing": WARN,
  "semi-spacing": WARN,
  "space-in-parens": WARN,
  "template-curly-spacing": WARN
};

const CODE_QUALITY_RULES = {
  complexity: [WARN, 20],
  "max-depth": [WARN, 5],
  "max-nested-callbacks": [WARN, 5],
  "max-params": [WARN, 7],
  "max-statements": [WARN, 25],
  "max-lines": [WARN, 500]
};

const TYPESCRIPT_RULES = {
  "@typescript-eslint/no-empty-object-type": OFF,
  "@typescript-eslint/no-unsafe-assignment": OFF,
  "@typescript-eslint/no-unsafe-call": OFF,
  "@typescript-eslint/no-unsafe-member-access": OFF,
  "@typescript-eslint/no-unsafe-argument": OFF,
  "@typescript-eslint/no-unsafe-return": OFF,
  "@typescript-eslint/no-unused-vars": WARN,
  "@typescript-eslint/no-floating-promises": OFF,
  "@typescript-eslint/no-implied-eval": WARN,
  "@typescript-eslint/no-explicit-any": WARN,
  "@typescript-eslint/no-empty-function": OFF,
  "@typescript-eslint/return-await": ERROR,
  "@typescript-eslint/require-await": ERROR,
  "@typescript-eslint/no-misused-promises": OFF,
  "@typescript-eslint/consistent-type-imports": [WARN, { prefer: "type-imports", fixStyle: "separate-type-imports" }],
  "@typescript-eslint/no-confusing-void-expression": [
    "error",
    {
      ignoreArrowShorthand: true
    }
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      allowBoolean: true,
      allowNumber: true,
      allowNullish: true
    }
  ]
};

const REACT_RULES = {
  "react-refresh/only-export-components": OFF,
  "react-hooks/exhaustive-deps": WARN,
  "react-hooks/set-state-in-effect": WARN
};

const CODE_GUIDELINES = {
  "no-var": ERROR,
  eqeqeq: [ERROR, "always"],
  "no-eval": ERROR,
  "no-implied-eval": ERROR,
  "no-new-wrappers": ERROR,
  "no-throw-literal": ERROR,
  "no-self-compare": ERROR,
  "no-template-curly-in-string": WARN,
  "no-unneeded-ternary": ERROR,
  "no-nested-ternary": ERROR,
  "object-shorthand": [ERROR, "always"],
  "prefer-object-spread": ERROR,
  curly: [ERROR, "multi-line"],
  "id-length": OFF,
  "object-shorthand": OFF
};

export default defineConfig(
  { ignores: ["dist", "node_modules", "src/generated/api/openapi.generated.ts"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-x": reactX,
      "react-dom": reactDom
    },
    rules: {
      // Inherit recommended configs
      ...reactHooks.configs.recommended.rules,
      ...reactX.configs["recommended-typescript"].rules,
      ...reactDom.configs.recommended.rules,

      // Apply rule groups
      ...SPACING_RULES,
      ...CODE_QUALITY_RULES,
      ...TYPESCRIPT_RULES,
      ...REACT_RULES,
      ...CODE_GUIDELINES,

      // General code style
      "prefer-const": WARN,
      "prefer-destructuring": [
        WARN,
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: true }
        },
        { enforceForRenamedProperties: false }
      ],
      "prefer-arrow-callback": ERROR,
      "prefer-template": ERROR,

      // Console usage
      "no-console": [WARN, { allow: ["warn", "error"] }]
    }
  }
);
