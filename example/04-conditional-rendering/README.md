# 04-conditional-rendering

## v-if

### [19-v-if-else-if-else](https://github.com/hunterliu1003/myfirstVue/tree/master/example/04-conditional-rendering/01-v-if/19-v-if-else-if-else)

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

### [20-controlling-reusable-elements-with-key](https://github.com/hunterliu1003/myfirstVue/tree/master/example/04-conditional-rendering/01-v-if/20-controlling-reusable-elements-with-key)

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

## v-show

### [21-v-show](https://github.com/hunterliu1003/myfirstVue/tree/master/example/04-conditional-rendering/01-v-if/20-controlling-reusable-elements-with-key)

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
