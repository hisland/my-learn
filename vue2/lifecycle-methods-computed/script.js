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
  data: {
    aa: 'some aa',
    aa2: 'some aa',
  },
  props: ['bb'],
  propsData: {
    bb: 'some bb',
  },
  computed: {
    dd: function() {
      console.log('call: computed.dd')
      return 'some dd' + this.aa2;
    },
  },
  methods: {
    cc(){
      console.log('call: methods.cc')
      return 'cc' + Math.random().toFixed(2);
    },
  },
  watch: {
    aa: function(newVal, oldVal) {
      console.log(newVal, arguments, this.aa)
    },
  },
  beforeCreate() {
    console.log('beforeCreate: 11')
  },
  created() {
    console.log('created: 11')
  },
  beforeMount() {
    console.log('beforeMount: 11')
  },
  mounted() {
    console.log('mounted: 11')
  },
  beforeUpdate() {
    console.log('beforeUpdate: 11')
  },
  updated() {
    console.log('updated: 11')
  },
  activated() {
    console.log('activated: 11')
  },
  deactivated() {
    console.log('deactivated: 11')
  },
  beforeDestroy() {
    console.log('beforeDestroy: 11')
  },
  destroyed() {
    console.log('destroyed: 11')
  },
})

vm.$mount('#app')
