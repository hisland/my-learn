var child_lv1 = {
  template: `
    <div>
      <div>paa: {{lv1_aa}}</div>
      <input type="text" v-model="lv1_aa" />
    </div>
      `,
  watch: {
    lv1_aa: function(newVal, oldVal) {
      console.log('child-watch: lv1_aa: ', newVal, oldVal)
      this.$emit('input', newVal)
    },
    paa: function(newVal, oldVal) {
      console.log('child-watch: paa: ', newVal, oldVal)
      this.lv1_aa = newVal
    },
  },
  props: ['paa'],
  data: function() {
    console.log('init data: child_lv1, paa from parent:', this.paa)
    return {
      lv1_aa: this.paa
    };
  },
}
var vm = new Vue({
  template: `
<div>
  <input type="text" v-model="aa" />
  <child_lv1 :paa="aa" @input="handleInput"></child_lv1>
</div>
  `,
  data: function() {
    console.log('init data: parent')
    return {
      aa: 'some aa',
    }
  },
  components: {
    child_lv1: child_lv1,
  },
  methods: {
    handleInput(val){
      console.log('parent-handleInput: ', val)
      this.aa = val
    }
  },
  watch: {
    aa: function(newVal, oldVal) {
      console.log('parent-watch: ', newVal, oldVal)
    },
  },
})

vm.$mount('#app')

