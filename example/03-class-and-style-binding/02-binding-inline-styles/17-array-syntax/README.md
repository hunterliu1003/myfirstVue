# 17-array-syntax

>HTML
```html
<div id="vm">
  <div v-bind:style="[baseStyles, overridingStyles]">123</div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm',
  data: {
    baseStyles: {
      color: 'red',
      fontsize: '30px'
    },
    overridingStyles: {
      // color: 'blue',
      fontsize: '13px'
    }
  }
})
```