<template>
  <div id="app">
    <CompE>
      <template slot-scope="ss" slot="renderItem">
        <div>kkk {{ss.vv}}</div>
        <div>some {{ss.vv}}</div>
      </template>
      <div>that 00</div>
    </CompE>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      now2: 'aa',
      list2: [
        { name: 'CompA', value: '1' },
        { name: 'CompC', value: '2' },
        { name: 'CompB', value: '3' },
      ],
    }
  },
  methods: {
    aa(name) {
      console.log(123, name)
      return name
    },
    closeOne2(index) {
      // this.list2.splice(index, 1)
      // const ll = Object.assign([], this.list2)
      this.list2.splice(index, 1)
    },
  },
}
</script>

<style>
</style>
