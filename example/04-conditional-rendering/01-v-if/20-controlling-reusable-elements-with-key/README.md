# 20-controlling-reusable-elements-with-key

>HTML
```html
<div id="vm">
  <div v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
  </div>
  <div v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
  </div>
  <button>Toggle login type</button>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm',
  data: {
    loginType: 'username'
  }
})
```