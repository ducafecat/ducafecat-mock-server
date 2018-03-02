module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    "vue"
  ],
  // add your custom rules here
  rules: {
    "no-undef": 0, //不允许未声明的变量
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}], //不允许有声明后未使用的变量或者参数
    "no-tabs": 0, //不允许tabs

    "indent": [0, 2],//缩进风格
    "camelcase": [0, {"properties": "never"}], //强制驼峰命名规则
    "space-before-function-paren": [0, {"anonymous": "always", "named": "never"}], //函数定义时括号前的空格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {}
}
