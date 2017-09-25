
# 10-computed-setter

>HTML
```html
<div id="demo">{{ fullName }}</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="computed-setter.js"></script>
```

>JS
```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```
