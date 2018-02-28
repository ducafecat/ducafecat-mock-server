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
    "indent": [0, 2],//缩进风格
    "camelcase": [0, {"properties": "never"}], //强制驼峰命名规则
    "space-before-function-paren": [0, {"anonymous": "always", "named": "never"}] //函数定义时括号前的空格
    // 'space-before-function-paren': [
    //   2,
    //   {
    //     anonymous: 'always',
    //     named: 'never'
    //   }
    // ],
  },
  globals: {}
}
