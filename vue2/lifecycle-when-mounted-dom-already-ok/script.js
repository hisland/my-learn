var child_lv2 = {
  template: `
    <div> child_lv2: {{child_lv2}} </div>
      `,
  data: function() {
    console.log('---- init data: child_lv2')
    return {
      child_lv2: 'child_lv2 data'
    };
  },
  beforeCreate() {
    console.log('---- beforeCreate: child_lv2')
  },
  created() {
    console.log('---- created: child_lv2')
  },
  beforeMount() {
    console.log('---- beforeMount: child_lv2')
    console.log(document.getElementById('app1').innerHTML)
  },
  mounted() {
    console.log('---- mounted: child_lv2')
    console.log(document.getElementById('app1').innerHTML)
  },
}
var child_lv1 = {
  template: `
    <div>
      <div>child_lv1: {{child_lv1}} <button @click="act">点我</button></div>
      <child_lv2></child_lv2>
    </div>
      `,
  components: {
    child_lv2: child_lv2,
  },
  methods: {
    act(){
      this.child_lv1 = Math.random().toFixed(2)
    },
  },
  data: function() {
    console.log('-- init data: child_lv1')
    return {
      child_lv1: 'child_lv1 data'
    };
  },
  beforeCreate() {
    console.log('-- beforeCreate: child_lv1')
  },
  created() {
    console.log('-- created: child_lv1')
  },
  beforeMount() {
    console.log('-- beforeMount: child_lv1')
    console.log(document.getElementById('app1').innerHTML)
  },
  mounted() {
    console.log('-- mounted: child_lv1')
    console.log(document.getElementById('app1').innerHTML)
  },
}
var vm = new Vue({
  template: `
<div>
  <button @click="destroy1">销毁第一个</button>
  <child_lv1 ref="sub"></child_lv1>
</div>
  `,
  data: function() {
    console.log('init data: parent')
    return {
      aa: 'some aa',
      aa2: 'some aa',
      subActive: true,
      cc: null,
    }
  },
  props: ['bb'],
  propsData: {
    bb: 'some bb',
  },
  components: {
    child_lv1: child_lv1,
  },
  computed: {
    dd: function() {
      console.log('call: computed.dd: parent')
      return 'some dd' + this.aa2;
    },
  },
  methods: {
    cc() {
      console.log('call: methods.cc: parent')
      return 'cc' + Math.random()
        .toFixed(2);
    },
    destroy1(){
      this.cc = this.$children[0]
      this.cc.$destroy()
      console.log('销毁依然能拿到 $el', this.cc.$el)
      console.log('已销毁的实例: ', this.cc)
    },
    // remount1(){
    //   console.log('重新挂载已经销毁的 $el', this.cc)
    //   this.cc.$mount()
    // },
  },
  watch: {
    aa: function(newVal, oldVal) {
      console.log(newVal, arguments, this.aa)
    },
  },
  beforeCreate() {
    console.log('beforeCreate: parent')
  },
  created() {
    console.log('created: parent')
  },
  beforeMount() {
    console.log('beforeMount: parent')
    console.log(document.getElementById('app1').innerHTML)
  },
  mounted() {
    console.log('mounted: parent')
    console.log(document.getElementById('app1').innerHTML)
  },
})

vm.$mount('#app')

console.log('root mounted: ', document.getElementById('app1').innerHTML)

