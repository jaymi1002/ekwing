// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': 'off',
        //不做处理
        "no-new": 0, //禁止在使用new构造一个实例后不赋值
        "no-var": 0, //禁用var，用let和const代替
        "one-var": 0, //连续声明
        "camelcase": 0, //驼峰命名
        "no-underscore-dangle": 0, //标识符不能以_开头或结尾
        "object-shorthand": [0], //强制对象字面量缩写语法
        "no-param-reassign": 0, //禁止给参数重新赋值
        "no-extra-boolean-cast": 0, //多余的感叹号转布尔型
        "no-mixed-spaces-and-tabs": 0, //警告太多 考虑js文件对此无要求
        "no-tabs": 0, //警告太多 考虑js文件对此无要求  
        "no-useless-escape": 0,

        //警告
        // "quotes": [1, "single"],                  //建议使用单引号
        // "no-inner-declarations": [1, "both"],     //不建议在{}代码块内部声明变量或函数
        "no-extra-boolean-cast": 0, //多余的感叹号转布尔型
        "no-extra-semi": 0, //多余的分号
        "no-extra-parens": 0, //多余的括号
        "no-empty": 0, //空代码块
        "no-use-before-define": [0, "nofunc"], //使用前未定义
        "complexity": [0, 10], //圈复杂度大于10 警告
        "no-console": 0, //console 未删除

        //常见错误
        "comma-dangle": [0, "never"], //定义数组或对象最后多余的逗号
        "no-debugger": 2, //debugger 调试代码未删除
        "no-constant-condition": 2, //常量作为条件
        "no-dupe-args": 2, //参数重复
        "no-dupe-keys": 2, //对象属性重复
        "no-duplicate-case": 2, //case重复
        "no-empty-character-class": 2, //正则无法匹配任何值
        "no-invalid-regexp": 2, //无效的正则
        "no-func-assign": 2, //函数被赋值
        "valid-typeof": 2, //无效的类型判断
        "no-unreachable": 2, //不可能执行到的代码
        "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
        "no-sparse-arrays": 2, //数组中多出逗号
        "no-shadow-restricted-names": 2, //关键词与命名冲突
        "no-undef": 2, //变量未定义
        "no-unused-vars": 0, //变量定义后未使用
        "no-cond-assign": 2, //条件语句中禁止赋值操作
        "no-native-reassign": 2, //禁止覆盖原生对象
        "max-len": [0, {
            "code": 200,
            "tabWidth": 2,
            "comments": 200,
            "ignoreComments": false,
            "ignoreTrailingComments": false,
            "ignoreUrls": true
        }],
        'no-restricted-syntax': [
            2,
            'LabeledStatement',
            'WithStatement',
        ],
        "space-before-function-paren": [2, "never"],
        "semi": [0, "always"], //强制分号结尾
        'indent': [0, 4, { 'SwitchCase': 1 }], //缩进风格

        //代码风格优化
        "no-else-return": 0, //在else代码块中return，else是多余的
        "no-multi-spaces": 0, //不允许多个空格
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }], //object直接量建议写法 : 后一个空格签名不留空格
        "block-scoped-var": 2, //变量定义后未使用
        "consistent-return": 0, //函数返回值可能是不同类型
        "accessor-pairs": 2, //object getter/setter方法需要成对出现
        "dot-location": [2, "property"], //换行调用对象方法  点操作符应写在行首
        "no-lone-blocks": 2, //多余的{}嵌套
        "no-labels": 2, //无用的标记
        "no-extend-native": 2, //禁止扩展原生对象
        "no-floating-decimal": 2, //浮点型需要写全 禁止.1 或 2.写法
        "no-loop-func": 2, //禁止在循环体中定义函数
        "no-new-func": 2, //禁止new Function(...) 写法
        "no-self-compare": 2, //不允与自己比较作为条件
        "no-sequences": 2, //禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 2, //禁止抛出一个直接量 应是Error对象
        "no-return-assign": [2, "always"], //不允return时有赋值操作
        "no-redeclare": [2, { "builtinGlobals": true }], //不允许重复声明
        "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }], //未使用的表达式
        "no-useless-call": 2, //无意义的函数call或apply
        "no-useless-concat": 0, //无意义的string concat
        "no-void": 2, //禁用void
        "no-with": 2, //禁用with
        "no-warning-comments": [2, { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }], //标记未写注释
        "curly": 2, //if、else、while、for代码块用{}包围
    }
}