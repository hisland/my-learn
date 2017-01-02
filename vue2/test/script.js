var vm = new Vue({
  more1: 1,
  more2: {
    some: 'a',
    thing: true,
  },
  _native: 'prop',
  template: `
<div>
<input type="text" v-model="aa" />
<h1>{{aa}}</h1>
<h1>{{bb}}</h1>
<h1>{{cc()}}</h1>
<h1>{{dd}}</h1>
</div>
  `,
  data: {
    aa: 'some aa',
  },
  props: ['bb'],
  propsData: {
    bb: 'some bb',
  },
  computed: {
    dd: function() {
      console.log('call: computed.dd')
      return 'some dd';
    },
  },
  methods: {
    cc(){
      console.log('call: methods.cc')
      return 'cc';
    },
  },
  watch: {
    aa: function(newVal, oldVal) {
      console.log(newVal, arguments, this.aa)
    },
  },
  beforeCreate() {
    console.log(this === this.$root, this === this._self, this.$data === this._data, this)
    console.log('beforeCreate: 11', this.$el, 'this.aa: ' + this.aa)
    console.log(this.$options.more1, this.$options.more2)
  },
  created() {
    console.log('created: 11', this.$el, 'this.aa: ' + this.aa)
  },
  // beforeMount() {
  //   console.log('beforeMount: 11', this.$el)
  // },
  // mounted() {
  //   console.log('mounted: 11', this.$el)
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate: 11')
  // },
  // updated() {
  //   console.log('updated: 11')
  // },
  // activated() {
  //   console.log('activated: 11')
  // },
  // deactivated() {
  //   console.log('deactivated: 11')
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy: 11')
  // },
  // destroyed() {
  //   console.log('destroyed: 11')
  // },
})

// vm.$mount('#app')

setTimeout(function() {
  vm.aa =  4
  vm.propsData.bb =  5
}, 10);
