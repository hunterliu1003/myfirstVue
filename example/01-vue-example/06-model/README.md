# 06-model

>HTML
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="model.js"></script>
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