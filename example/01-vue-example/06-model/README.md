# 06-model

>HTML
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>

```

>JS
```javascript
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```