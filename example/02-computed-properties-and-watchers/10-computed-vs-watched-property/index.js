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


// var vm = new Vue({
//   el: '#demo',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar'
//   },
//   computed: {
//     fullName: function () {
//       return this.firstName + ' ' + this.lastName
//     }
//   }
// })

// vm.$data.firstName='hunter';
// console.log(vm.$data.firstName);



// var vm = new Vue({
//   el: '#app',
//   delimiters: ['${', '}'],
//   data: {
//     price: 9999999
//   },
//   filters: {
//     priceFormat: function(value) { // 加上 $ 字號
//       if(value==123){
//         return value;
//       }else{
//         return '$' + value
//       }
//     },
//     commaFormat: function(value) { // 加上千分位符號
//       return value.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
//         return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
//       })
//     }
//   }
// });
