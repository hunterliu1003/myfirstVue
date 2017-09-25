# 16-object-syntax

>HTML
```html
<div id="vm">
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Hunter</div>
  <div v-bind:style="styleObject">123</div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'blue',
      fontSize: '13px'
    }
  }
})
```