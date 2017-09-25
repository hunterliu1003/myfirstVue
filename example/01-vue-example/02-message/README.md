# 02-message

>HTML
```html
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="message.js"></script>
```

>JS
```javascript
var app2 = new Vue({
	el: '#app-2',
	data: {
	  message: 'You loaded this page on ' + new Date().toLocaleString()
	}
})
```