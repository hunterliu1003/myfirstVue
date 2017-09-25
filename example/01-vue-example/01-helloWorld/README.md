# 01-helloWorld

>HTML
```html
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