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
