var vm = new Vue({
  template: `
<div>
<button @click="vm.subActive = !vm.subActive">{{vm.subActive ? '点击隐藏子组件' : '点击显示子组件'}}</button>
<keep-alive>
  <sub_comp v-if="subActive" ref="sub"></sub_comp>
</keep-alive>
</div>
  `,
  data: {
    aa: 'some aa',
    aa2: 'some aa',
    subActive: true,
  },
  props: ['bb'],
  propsData: {
    bb: 'some bb',
  },
  components: {
    sub_comp: {
      template: `
    <div>
      {{sub1}}
    </div>
      `,
      data: function() {
        return {
          sub1: 'sub1 data'
        };
      },
      activated() {
        console.log('activated: sub 在 keep-alive 里面才有效果')
      },
      deactivated() {
        console.log('deactivated: sub 在 keep-alive 里面才有效果')
      },
    }
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
    console.log(this.$refs.sub)
  },
  mounted() {
    console.log('mounted: 11')
    console.log(this.$refs.sub)
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
