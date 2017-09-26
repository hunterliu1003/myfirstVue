# 18-multiple-values

>HTML
```html
<div id="vm">
  <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm'
})
```