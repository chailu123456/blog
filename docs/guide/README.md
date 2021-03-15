## This is guide1
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

## This is guide2
guide2 - content...
## Js/Tslint
guide2 - content...
```shell
1. variable name must be in lowerCamelCase, PascalCase or UPPER_CASE // 小驼峰命名、大驼峰式命名法、大写
2. "indent": [true, "space", 2] // 2空格缩进
3. no-conditional-assignment // 不允许在if条件中写 "="
4. components must be named in uppercase // eg: import Head from './components/header'
5. file/folder must be named in lowercase or connet with "-" // eg: home、data-analysis
6. block not allow empty // 作用域不允许空
7. a constructor name should not start with a lowercase letter  // 类对象不允许小写开头
8. no-multiple-empty-lines,     // 末尾强制空1行
```
## Props

| Property | Description | Type | default | Remarks |
| --- | --- | --- | --- | --- |
| value | markdown content | String | '' | required |
| style | component container style | Object | {height: '100%'} | not required |
| config | component config | Object | {view: {...}, logger: {...}} | not required |
| onChange | emitting when editor has changed | Function | ({html, md}) => {} | not required |
| onImageUpload | when image uploaded, callback emitting will get image markdown text | (file: File, callback: (url: string) => void) => void; | ({file, callback}) => {} | not required |
| renderHTML | Render markdown text to HTML. You can return either string, function or Promise | (text: string) => string|function|Promise | none | **required** |
### Vue
<template>
  <div class="test-demo">
    <el-button>button</el-button>
    <hello />
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>

## 函数封装规范
```shell
1. 用到的变量要私有化，不污染全局
2. 函数名语义化，减少匿名函数，以具名函数方便调用栈跟踪等调试
3. 降低时间空间复杂度
4. 精简代码逻辑
5. 应写好必要函数含义与参数含义注释
6. 减少promise互相嵌套
```
## css编写规范
### 样式命名规则：
```shell
1. 不能出现大写,以连字符风格命名
2. 表示状态的应该用do-st-*命名
3. 表示功能的应该用do-fn-*命名
4. 表示页面模块的应该用do-layout-name(layout组件) do-page-name(page组件) do-ui-name(公用组件) 命名
5. 表示UI组件的应该用do-uiname命名, 它的子元素应该全部包在 .do-uiname这个根类下 如 .do-page .body { ... }
```

### 样式的出现顺序：
```shell
1 display float position overflow z-index 表示定位/布局的属性
2 width height margin padding border 表示盒子模型的属性
3 line-height font-size vertical-align text-align user-select outline ....排版相关的属性
4 color background opacity cursor ...表示装饰相关的属性
5 content list-style quotes ... 内容生成相关的属性
```