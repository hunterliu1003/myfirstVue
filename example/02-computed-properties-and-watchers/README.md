# Computed Properties and Watchers

## Computed Properties

### [08-basicExample](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/08-basicExample)

>HTML
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

```

>JS
```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```

### [09-caching-and-methods](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/09-caching-and-methods)

>HTML
```html
<div id="example">
  <p>Reversed message: "{{ reverseMessage() }}"</p>
</div>

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

### [10-computed-vs-watched-property](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/10-computed-vs-watched-property)

>HTML
```html
<div id="demo">{{ fullName }}</div>

```

>JS
```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

### [11-computed-setter](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/11-computed-setter)

>HTML
```html
<div id="demo">{{ fullName }}</div>

```

>JS
```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})
```

### [12-watchers](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-computed-properties-and-watchers/12-watchers)

>HTML
```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

>JS
```javascript
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    )
  }
})
```