# Template Syntax
- Interpolations(差值)
- Directives(指令)
- Shorthands(縮寫)

## Interpolations

### Text
>利用mustache語法替換值。

```html
<span>Message: {{ msg }}</span>
```

### Raw HTML
>利用v-html插入HTML

```html
<div v-html="rawHtml"></div>
```

### Attributes
>透過v-bind設置HTML attributes

```html
<div v-bind:id="dynamicId"></div>
```
```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

### Using Javascript Expressions
```javascript
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>
```

## Directives

<p v-if="seen">Now you see me</p>

### Arguments
>指令的參數會在":"後面

```html
<a v-bind:href="url"></a>
```
```html
<a v-on:click="doSomething">
```

### Modifiers
>參數的後綴放在"."後面

```html
<form v-on:submit.prevent="onSubmit"></form>
```

## Shorthands
>因 v-bind 和 v-on 常用因此設計了Shorthand

### v-bind Shorthand
```html
<!-- full syntax -->
<a v-bind:href="url"></a>
<!-- shorthand -->
<a :href="url"></a>
```

### v-on Shorthand
```html
<!-- full syntax -->
<a v-on:click="doSomething"></a>
<!-- shorthand -->
<a @click="doSomething"></a>
```