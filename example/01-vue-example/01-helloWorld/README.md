# 01-helloWorld

>HTML
```html
<div id="app">
  <p>{{ message }}</p>
</div>

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