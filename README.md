# Vue
## 目的
利用 Vue.js 的[官方文件](https://vuejs.org/v2/guide/)範例學習，並記錄下過程。

## 範例

### Declarative Rendering

#### [01-helloWorld](https://github.com/hunterliu1003/myfirstVue/tree/master/example/01-helloWorld)

>HTML
```html
<div id="app">
  <p>{{ message }}</p>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="helloWorld.js"></script>
```

>JS
```javascript
new Vue({
el: '#app',
data: {
  message: 'Hello Vue.js!'
}
})
```


#### [02-message](https://github.com/hunterliu1003/myfirstVue/tree/master/example/02-message)

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

### Conditionals and Loops

#### [03-toggle](https://github.com/hunterliu1003/myfirstVue/tree/master/example/03-toggle)

>HTML
```html
<div id="app-3">
  <p v-if="seen">Now you see me</p>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="toggle.js"></script>
```

>JS
```javascript
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

Enter `app3.seen = false` in the console.You should see the message disappear.


#### [04-forloop](https://github.com/hunterliu1003/myfirstVue/tree/master/example/04-forloop)

>HTML
```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="forloop.js"></script>
```

>JS
```javascript
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
```

In the console, enter `app4.todos.push({ text: 'New item' })`. You should see a new item appended to the list.


### handling User Input

#### [05-click](https://github.com/hunterliu1003/myfirstVue/tree/master/example/05-click)

>HTML
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="click.js"></script>
```

>JS
```javascript
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

#### [06-model](https://github.com/hunterliu1003/myfirstVue/tree/master/example/06-model)

>HTML
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="model.js"></script>
```

>JS
```javascript
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```