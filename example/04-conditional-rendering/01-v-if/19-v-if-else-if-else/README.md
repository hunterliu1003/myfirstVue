# 19-v-if-else-if-else

>HTML
```html
<div id="vm">
  <div v-if="Date.now()%10/10 > 0.7">
    Now you see random number > 0.7
  </div>
  <div v-else-if="Date.now()%10/10 > 0.4">
    Now you see random number > 0.4
  </div>
  <div v-else>
  	Now you see random number <= 0.4
  </div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm'
})
```