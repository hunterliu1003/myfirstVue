# Computed Properties and Watchers

## Computed Properties

### [08-basicExample](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/08-basicExample)

>HTML
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="basicExample.js"></script>
```

>JS
```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```

### [09-caching-and-methods](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/09-caching-and-methods)

>HTML
```html
<div id="example">
  <p>Reversed message: "{{ reverseMessage() }}"</p>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="caching-and-methods.js"></script>
```

>JS
```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
```

### [10-computed-vs-watched-property](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/10-computed-vs-watched-property)

>HTML
```html
<div id="demo">{{ fullName }}</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="computed-vs-watched-property.js"></script>
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
