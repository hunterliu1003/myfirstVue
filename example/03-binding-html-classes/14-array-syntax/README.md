# 14-array-syntax

>HTML
```html
<div class="static"
     v-bind:class="[activeClass, errorClass]">
</div>
<div class="static2"
     v-bind:class="[isActive ? activeClass : '', errorClass]">
</div>
<div class="static3"
     v-bind:class="[{ active: isActive }, errorClass]">
</div>
```

>JS
```javascript
var os = new Vue({
  el: '.static',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

var os2 = new Vue({
  el: '.static2',
  data: {
    activeClass: 'active',
    isActive: true,
    errorClass: 'text-danger'
  }
})

var os3 = new Vue({
  el: '.static3',
  data: {
    activeClass: 'active',
    isActive: true,
    errorClass: 'text-danger'
  }
})
```