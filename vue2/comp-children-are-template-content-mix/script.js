var child_lv2 = {
  template: `
    <div style="margin:10px;border:1px solid green;padding:10px;">
      child_lv2: {{child_lv2}}
    </div>
      `,
  data: function() {
    console.log('---- init data: child_lv2')
    return {
      child_lv2: 'child_lv2 data'
    };
  },
  beforeCreate() {
    console.log('child_lv2: beforeCreate')
  },
  created() {
    console.log('child_lv2: created')
  },
  beforeMount() {
    console.log('child_lv2: beforeMount')
  },
  mounted() {
    console.log('child_lv2: mounted')
    console.log('child_lv2: parent is:', this.$parent.$el)
  },
  beforeUpdate() {
    console.log('child_lv2: beforeUpdate')
  },
  updated() {
    console.log('child_lv2: updated')
  },
  activated() {
    console.log('child_lv2: activated')
  },
  deactivated() {
    console.log('child_lv2: deactivated')
  },
  beforeDestroy() {
    console.log('child_lv2: beforeDestroy')
  },
  destroyed() {
    console.log('child_lv2: destroyed')
  },
}
var child_lv1 = {
  template: `
    <div style="margin:10px;border:1px solid red;padding:10px;">
      我是 child_lv1, 我的模板 包含了 child_lv2
      <div>child_lv1: {{child_lv1}}</div>
      <child_lv2></child_lv2>
    </div>
      `,
  components: {
    child_lv2: child_lv2,
  },
  methods: {
    act() {
      this.child_lv1 = Math.random()
        .toFixed(2)
    },
  },
  data: function() {
    console.log('child_lv1: init data')
    return {
      child_lv1: 'child_lv1 data'
    };
  },
  beforeCreate() {
    console.log('child_lv1: beforeCreate')
  },
  created() {
    console.log('child_lv1: created')
  },
  beforeMount() {
    console.log('child_lv1: beforeMount')
  },
  mounted() {
    console.log('child_lv1: mounted')
    console.log('child_lv1: parent is:', this.$parent.$el)
  },
  beforeUpdate() {
    console.log('child_lv1: beforeUpdate')
  },
  updated() {
    console.log('child_lv1: updated')
  },
  activated() {
    console.log('child_lv1: activated')
  },
  deactivated() {
    console.log('child_lv1: deactivated')
  },
  beforeDestroy() {
    console.log('child_lv1: beforeDestroy')
  },
  destroyed() {
    console.log('child_lv1: destroyed')
  },
}

var parent = {
  template: `
<div style="margin:10px;border:1px solid blue;padding:10px;">
  我是 parent, 我的模板 包含了 child_lv1
  <child_lv1></child_lv1>
  通过 slot, 下面得到了最外层指定的 child_lv2
  <slot></slot>
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
    aa: function(newVal, oldVal) {
      console.log(newVal, arguments, this.aa)
    },
  },
  beforeCreate() {
    console.log('parent: beforeCreate')
  },
  created() {
    console.log('parent: created')
  },
  beforeMount() {
    console.log('parent: beforeMount')
  },
  mounted() {
    console.log('parent: mounted')
    console.log(this.$children)
  },
  beforeUpdate() {
    console.log('parent: beforeUpdate')
  },
  updated() {
    console.log('parent: updated')
  },
  activated() {
    console.log('parent: activated')
  },
  deactivated() {
    console.log('parent: deactivated')
  },
  beforeDestroy() {
    console.log('parent: beforeDestroy')
  },
  destroyed() {
    console.log('parent: destroyed')
  },
}
var vm = new Vue({
  template: `
<div>
  我是最外层, 指定 parent 包含 child_lv2
  <parent>
    <child_lv2></child_lv2>
  </parent>
</div>
  `,
  components: {
    parent: parent,
    child_lv2: child_lv2,
  },
})

vm.$mount('#app')

