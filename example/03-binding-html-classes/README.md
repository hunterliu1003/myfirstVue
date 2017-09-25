# 03-binding-html-classes

## [13-object-syntax](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-binding-html-classes/13-object-syntax)

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

## [14-array-syntax](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-binding-html-classes/14-array-syntax)

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

## [15-with-components](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-binding-html-classes/15-with-components)

>HTML
```html
<div id="vm">
  <my-component class="baz boo"></my-component>
  <my-component v-bind:class="{ active: isActive }"></my-component>
</div>
```

>JS
```javascript
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

new Vue({
  el: '#vm',
  data:{
    isActive: true
  }
})
```