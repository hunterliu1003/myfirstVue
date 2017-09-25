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