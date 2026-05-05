import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
  // Standar rekomendasi dasar JS
  js.configs.recommended,
  
  // Rekomendasi TypeScript
  ...tseslint.configs.recommended,
  
  // Rekomendasi Astro
  ...eslintPluginAstro.configs.recommended,
  
  // Konfigurasi Global & File yang diabaikan (menggantikan .eslintignore)
  {
    ignores: [
      "dist/**", 
      "node_modules/**", 
      ".astro/**", 
      "scripts/**", 
      "public/**",
      ".eslintrc.cjs", // abaikan file lama jika masih ada
      ".eslintignore"
    ],
  },
  
  // Konfigurasi khusus untuk React dan TypeScript (.ts, .tsx)
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        window: "readonly",
        document: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    settings: {
      react: {
        version: "detect", // otomatis deteksi versi react
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      // React 17+ tidak butuh import React secara eksplisit
      "react/react-in-jsx-scope": "off",
      // Menonaktifkan peringatan ketat untuk tipe 'any'
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
