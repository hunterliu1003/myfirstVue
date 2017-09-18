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