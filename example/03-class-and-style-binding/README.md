# 03-class-and-style-binding

## Binding HTML Classes

### [13-object-syntax](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-class-and-style-binding/01-binding-html-classes/13-object-syntax)

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

### [14-array-syntax](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-class-and-style-binding/01-binding-html-classes/14-array-syntax)

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

### [15-with-components](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-class-and-style-binding/01-binding-html-classes/15-with-components)

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

## Binding Inline Styles

### [16-object-syntax](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-class-and-style-binding/02-binding-inline-styles/16-object-syntax)

>HTML
```html
<div id="vm">
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Hunter</div>
  <div v-bind:style="styleObject">123</div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'blue',
      fontSize: '13px'
    }
  }
})
```

### [17-array-syntax](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-class-and-style-binding/02-binding-inline-styles/17-array-syntax)

>HTML
```html
<div id="vm">
  <div v-bind:style="[baseStyles, overridingStyles]">123</div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm',
  data: {
    baseStyles: {
      color: 'red',
      fontsize: '30px'
    },
    overridingStyles: {
      // color: 'blue',
      fontsize: '13px'
    }
  }
})
```

### [18-multiple-values](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-class-and-style-binding/02-binding-inline-styles/18-multiple-values)


>HTML
```html
<div id="vm">
  <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
</div>
```

>JS
```javascript
new Vue({
  el: '#vm'
})
```

