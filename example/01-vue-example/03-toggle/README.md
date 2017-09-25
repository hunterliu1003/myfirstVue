# 03-toggle

>HTML
```html
<div id="app-3">
  <p v-if="seen">Now you see me</p>
</div>

```

>JS
```javascript
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

Enter `app3.seen = false` in the console.You should see the message disappear.