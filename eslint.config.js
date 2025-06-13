import { defineConfig } from 'eslint/config';

export default defineConfig({
  extends: [
    'eslint:recommended',
    'plugin: react/recommended',
    'plug: react-native/recommended',
  ],
});
