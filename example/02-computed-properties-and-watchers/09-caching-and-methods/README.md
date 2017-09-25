# 09-caching-and-methods

>HTML
```html
<div id="example">
	<p>Reversed message: "{{ reverseMessage() }}"</p>
</div>

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