var vm = new Vue({
  template: `
<div>
aa: <input type="text" v-model="aa" />
aa2: <input type="text" v-model="aa2" />
<h1>data: {{aa}}</h1>
<h1>prop: {{bb}}</h1>
<h1>methods: {{cc()}} 这个插值每次 update 都调用了</h1>
<h1>computed(依赖aa2): {{dd}} 有缓存, 只有依赖的值变更才调用</h1>
</div>
  `,
  // render: function(h){
  //   console.log('render: render-called')
  //   return h('div', {}, 'hello')
  // },
  data: function(){
    console.log('data: data-called')
    return {
      aa: 'some aa',
      aa2: 'some aa',
    };
  },
  props: ['bb'],
  propsData: {
    bb: 'some bb',
  },
  computed: {
    dd: function() {
      console.log('computed: dd')
      return 'some dd' + this.aa2;
    },
  },
  methods: {
    cc(){
      console.log('methods: cc')
      return 'cc' + Math.random().toFixed(2);
    },
  },
  watch: {
    aa: function(newVal, oldVal) {
      console.log('watch: ', newVal, arguments, this.aa)
    },
  },
  beforeCreate() {
    console.log('life-beforeCreate: 11')
  },
  created() {
    console.log('life-created: 11')
  },
  beforeMount() {
    console.log('life-beforeMount: 11')
  },
  mounted() {
    console.log('life-mounted: 11')
  },
  beforeUpdate() {
    console.log('life-beforeUpdate: 11')
  },
  updated() {
    console.log('life-updated: 11')
  },
  activated() {
    console.log('life-activated: 11')
  },
  deactivated() {
    console.log('life-deactivated: 11')
  },
  beforeDestroy() {
    console.log('life-beforeDestroy: 11')
  },
  destroyed() {
    console.log('life-destroyed: 11')
  },
})

vm.$mount('#app')
