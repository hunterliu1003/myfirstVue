Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

new Vue({
  el: '#vm',
  data:{
    isActive: true
  }
})