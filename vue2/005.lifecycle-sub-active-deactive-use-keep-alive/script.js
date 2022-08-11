var vm = new Vue({
  template: `
<div>
<button @click="subActive = !subActive">{{subActive ? '点击隐藏子组件' : '点击显示子组件'}}</button>
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
        console.log('data: sub 在 keep-alive 里面才有效果')
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
    console.log('beforeCreate: parent')
  },
  created() {
    console.log('created: parent')
  },
  beforeMount() {
    console.log('beforeMount: parent')
    console.log('ref-sub: ', this.$refs.sub)
  },
  mounted() {
    console.log('mounted: parent')
    console.log('ref-sub: ', this.$refs.sub)
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
