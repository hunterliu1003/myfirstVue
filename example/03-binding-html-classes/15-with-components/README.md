# 15-with-components

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