# 09-caching-and-methods

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