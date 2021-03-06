const child_lv2 = {
  template: `
    <div>
      child_lv2: {{child_lv2}}  <button @click="act">点我2</button>
    </div>
      `,
  data: function () {
    console.log('---- init data: child_lv2')
    return {
      child_lv2: 'child_lv2 data',
    }
  },
  methods: {
    act() {
      this.child_lv2 = Math.random().toFixed(4)
    },
  },
  beforeCreate() {
    console.log('---- beforeCreate: child_lv2', this)
  },
  created() {
    console.log('---- created: child_lv2', this)
  },
  beforeMount() {
    console.log('---- beforeMount: child_lv2', this)
  },
  mounted() {
    console.log('---- mounted: child_lv2')
  },
  beforeUpdate() {
    console.log('---- beforeUpdate: child_lv2')
  },
  updated() {
    console.log('---- updated: child_lv2')
  },
  activated() {
    console.log('---- activated: child_lv2')
  },
  deactivated() {
    console.log('---- deactivated: child_lv2')
  },
  beforeDestroy() {
    console.log('---- beforeDestroy: child_lv2')
  },
  destroyed() {
    console.log('---- destroyed: child_lv2')
  },
}
const child_lv1 = {
  components: {
    child_lv2: child_lv2,
  },
  template: `
    <div>
      <div>child_lv1: {{child_lv1}} <button @click="act">点我</button></div>
      <child_lv2></child_lv2>
      <child_lv2></child_lv2>
    </div>
      `,
  methods: {
    act() {
      this.child_lv1 = Math.random().toFixed(2)
    },
  },
  data: function () {
    console.log('-- init data: child_lv1')
    return {
      child_lv1: 'child_lv1 data',
    }
  },
  beforeCreate() {
    console.log('-- beforeCreate: child_lv1')
  },
  created() {
    console.log('-- created: child_lv1')
  },
  beforeMount() {
    console.log('-- beforeMount: child_lv1')
  },
  mounted() {
    console.log('-- mounted: child_lv1')
  },
  beforeUpdate() {
    console.log('-- beforeUpdate: child_lv1')
  },
  updated() {
    console.log('-- updated: child_lv1')
  },
  activated() {
    console.log('-- activated: child_lv1')
  },
  deactivated() {
    console.log('-- deactivated: child_lv1')
  },
  beforeDestroy() {
    console.log('-- beforeDestroy: child_lv1')
  },
  destroyed() {
    console.log('-- destroyed: child_lv1')
  },
}
const vm = new Vue({
  components: {
    child_lv1: child_lv1,
  },
  template: `
<div>
  <button @click="destroy1">销毁第一个</button>
  <child_lv1 ref="sub1"></child_lv1>
  <child_lv1 ref="sub2"></child_lv1>
</div>
  `,
  data: function () {
    console.log('init data: parent')
    return {
      aa: 'some aa',
      aa2: 'some aa',
      subActive: true,
    }
  },
  props: ['bb'],
  propsData: {
    bb: 'some bb',
  },
  computed: {
    dd: function () {
      console.log('call: computed.dd: parent')
      return 'some dd' + this.aa2
    },
  },
  methods: {
    cc() {
      console.log('call: methods.cc: parent')
      return 'cc' + Math.random().toFixed(2)
    },
    destroy1() {
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
    aa: function (newVal, oldVal) {
      console.log(newVal, arguments, this.aa)
    },
  },
  beforeCreate() {
    console.log('beforeCreate: parent', this)
  },
  created() {
    console.log('created: parent', this)
  },
  beforeMount() {
    console.log('beforeMount: parent', this)
    console.log('ref-sub1: ', this.$refs.sub1)
    console.log('ref-sub2: ', this.$refs.sub2)
  },
  mounted() {
    console.log('mounted: parent')
    console.log('ref-sub1: ', this.$refs.sub1)
    console.log('ref-sub2: ', this.$refs.sub2)
  },
  beforeUpdate() {
    console.log('beforeUpdate: parent')
  },
  updated() {
    console.log('updated: parent')
  },
  activated() {
    console.log('activated: parent')
  },
  deactivated() {
    console.log('deactivated: parent')
  },
  beforeDestroy() {
    console.log('beforeDestroy: parent')
  },
  destroyed() {
    console.log('destroyed: parent')
  },
})

vm.$mount('#app')
