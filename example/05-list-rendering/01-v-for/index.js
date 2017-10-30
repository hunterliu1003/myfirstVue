var RT = {};
RT.context = {
  gRows:
    [
      {
        gno: '21740000017709',
        gName: '限時優惠2件$480 加厚大學T 買一送一買一…',
        gImageUrl: '圖片url',
        rStartTime: '廣告開始時間',
        rEndTime: '廣告結束時間',
        rBudget: '廣告預算',
        rStatus: 0,
        isGoodsRemoved: '商品是否下架',
        statSelected: [999999, 1000, 9999, 99 , 1000, 1000, 10000],
        statGrowth: [0, 50, 50, -1, -10, 0, 0]
      },
      {
        gno: '21740000017709',
        gName: '限時優惠2件$480 加厚大學T 買一送一買一…',
        gImageUrl: '圖片url',
        rStartTime: '廣告開始時間',
        rEndTime: '廣告結束時間',
        rBudget: '廣告預算',
        rStatus: 6,
        isGoodsRemoved: '商品是否下架',
        statSelected: [999999, 1000, 9999, 99 , 1000, 1000, 10000],
        statGrowth: [2, 50, 50, -1, -10, 0, 0]
      },
      {
        gno: '21740000017709',
        gName: '限時優惠2件$480 加厚大學T 買一送一買一…',
        gImageUrl: '圖片url',
        rStartTime: '廣告開始時間',
        rEndTime: '廣告結束時間',
        rBudget: '廣告預算',
        rStatus: 5,
        isGoodsRemoved: '商品是否下架',
        statSelected: [999999, 1000, 9999, 99 , 1000, 1000, 10000],
        statGrowth: [2, 50, 50, -1, -10, 0, 0]
      },
      {
        gno: '21740000017709',
        gName: '限時優惠2件$480 加厚大學T 買一送一買一…',
        gImageUrl: '圖片url',
        rStartTime: '廣告開始時間',
        rEndTime: '廣告結束時間',
        rBudget: '廣告預算',
        rStatus: 0,
        isGoodsRemoved: '商品是否下架',
        statSelected: [999999, 1000, 9999, 99 , 1000, 1000, 10000],
        statGrowth: [-2, 50, 50, -1, -10, 0, 0]
      }
    ]
}


// Vue.component('g-rows',{
//   template: `
//     <tbody v-if="gRows.length !== 0">
//       <tr v-for="gRow in gRows">
//         <td>
//           <p>{{ gRow.gImageUrl }}</p>
//           <p>{{ gRow.gName }}</p>
//           <p>{{ gRow.rStartTime }}</p>
//           <p>{{ gRow.rEndTime }}</p>
//           <p>{{ gRow.rBudget }}</p>
//         </td>
//         <td>
//           <p>{{ parseRStatus(gRow.rStatus) }}</p>
//           <p v-if="gRow.rStatus == 6">{{ gRow.isGoodsRemoved }}</p>
//         </td>
//         <td v-for="i in 7">
//           <p>{{ gRow.statSelected[0] }}</p>
//           <p v-if="gRow.statGrowth[i-1] > 0" class="item-value-rise">+{{ gRow.statGrowth[i-1] }}</p>
//           <p v-else-if="gRow.statGrowth[i-1] === 0" class="item-value-none">--</p>
//           <p v-else class="item-value-decrease">{{ gRow.statGrowth[i-1] }}</p>
//         </td>
//         <td>
//           <a :href="'{{ config.point_host}}/rtb/kword_list.php?'+gRow.gno">管理</a>
//         </td>
//       </tr>
//     </tbody>
//     <tbody v-else>
//       <tr>
//         <td colspan="10">目前沒有已設定的關鍵字廣告</td>
//       </tr>
//     </tbody>`,
//   data: function() {
//     return {
//       gRows: RT.context.gRows
//     }
//   },
//   methods: {
//     parseRStatus: function(rStatus) {
//       let rStatusStr;
//       switch(rStatus) {
//         case 0:
//           rStatusStr = '進行中';
//           break;
//         case 1:
//           rStatusStr = '待播放';
//           break;
//         case 2:
//           rStatusStr = '已暫停';
//           break;
//         case 3: case 4: case 5: case 6: case 7:
//           rStatusStr = '已結束';
//           break;
//       }
//       return rStatusStr;
//     }
//   }
// })

var gTableVue = new Vue({
  el: '.g_table',
  data: {
    gRows: RT.context.gRows
  },
  methods: {
    parseRStatus: function(rStatus) {
      let rStatusStr;
      switch(rStatus) {
        case 0:
          rStatusStr = '進行中';
          break;
        case 1:
          rStatusStr = '待播放';
          break;
        case 2:
          rStatusStr = '已暫停';
          break;
        case 3: case 4: case 5: case 6: case 7:
          rStatusStr = '已結束';
          break;
      }
      return rStatusStr;
    }
  }
})

Vue.component('ht-dropdown', {
  prop: ['message'],
  template: '<span>{{ message }}</span>'
})

var vueDropdown = new Vue({
  el: '.ht-dropdown',
  data: {
    selectOptions: [
      { text: 'Male', value: 'male'},
      { text: 'Female', value: 'female'},
    ]
  }
})

Box.Application.addModule('dropdown-module', function(context) {
  'use strict'
  let $module = $(context.getElement());

  function _setCurentDropdownStatus(duration) {
    let genHtml;
    switch (duration) {
      case '7':
        genHtml = '最近&nbsp;7&nbsp;天';
        break;
      case '30':
        genHtml = '最近&nbsp;30&nbsp;天';
        break;
      case '90':
        genHtml = '最近&nbsp;3&nbsp;個月';
        break;
      case '180':
        genHtml = '最近&nbsp;6&nbsp;個月';
        break;
      case '365':
        genHtml = '最近&nbsp;1&nbsp;年';
        break;
      default:
        genHtml = '最近&nbsp;30&nbsp;天';
    }
    $module.find('.rt-dropdown-status-text').html(genHtml);
  }

  function _closingByClickingOutside() {
    $(document).on('mouseover', function(event) {
      if (!$(event.target).closest('.rt-dropdown').length) {
        $module.find('.rt-dropdown-items').hide();
      }
    });
  }

  return {
    init: function() {
      _setCurentDropdownStatus(RT.context.duration);
      _closingByClickingOutside();
    },
    onclick: function(event, element, elementType){
      if (elementType === 'dropdown-status') {
        $(element).next().toggle();
      }else if (elementType === 'dropdown-item') {
        $module.find('.rt-dropdown-items').toggle();
      }
    }
  };
});
var moduleEl = document.getElementById('mod-test-module');
Box.Application.start(moduleEl);