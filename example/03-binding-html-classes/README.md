# 03-binding-html-classes

## [13-0bject-syntax]()

>HTML
```html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
<div class="static2"
     v-bind:class="classObject">
</div>
<div class="static3"
     v-bind:class="classObject">
</div>
```

>JS
```javascript
var os = new Vue({
  el: '.static',
  data: {
    isActive: true,
    hasError: false
  }
})

var os2 = new Vue({
  el: '.static2',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
})

var os3 = new Vue({
  el: '.static3',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})
```