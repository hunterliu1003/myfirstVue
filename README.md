# Vue
## 目的
利用 Vue.js 的[官方文件](https://vuejs.org/v2/guide/)範例學習，並記錄下過程。

## 範例
### [01-helloWorld](https://github.com/hunterliu1003/myfirstVue/tree/master/example/01-helloWorld)
>HTML
```
<div id="app">
  <p>{{ message }}</p>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="helloWorld.js"></script>
```
>JS
```javascript
new Vue({
el: '#app',
data: {
  message: 'Hello Vue.js!'
}
})
```
### [02-message](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-message)
>HTML
```
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="message.js"></script>
```
>JS
```javascript
var app2 = new Vue({
el: '#app-2',
data: {
  message: 'You loaded this page on ' + new Date().toLocaleString()
}
})
```