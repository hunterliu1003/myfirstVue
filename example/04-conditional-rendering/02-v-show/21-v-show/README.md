# 21-v-show

>HTML
```html
<div id="vm">
  <h1 v-show="ok">Hello!</h1>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm',
  data: {
    ok: true
  }
})
```