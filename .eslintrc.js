module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  plugins: ['react', '@babel/plugin-syntax-jsx'],
  rules: {
    semi: 'error',
    // let と const の区別を厳格化
    'prefer-const': 'error',
    // === の使用を推奨
    eqeqeq: 'error',
    // import React from 'react'React していないと 'React must be in scope when using JSX.'が出る
    // 設定で 出さないように https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      // Warning: React version not specified in eslint-plugin-react settings. が出ないように
      version: 'detect',
    },
  },
}
