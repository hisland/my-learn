<template>
  <div id="app">
    <div ref="aa">
      <router-link to="CompA" style="margin-right:10px;">CompA</router-link>
      <router-link to="CompB" style="margin-right:10px;">CompB</router-link>
      <router-link to="CompC" style="margin-right:10px;">CompC</router-link>
    </div>
    <hr>


    <div>
      <button @click="doRefresh()">refresh</button>
      <template v-for="(vv, index) in compList">
        <div>
          <button @click="goTab(vv.compName)">{{vv.compName}} {{nowComp===vv.compName ? 'now': ''}}</button>
          <button @click="closeOne(index)">close</button>
        </div>
      </template>
    </div>

    <hr>

    <template v-for="(vv, index) in compList">
      <CompD :key="vv.compName" :cached="vv.cached">
        <router-view v-if="$route.name === vv.compName"></router-view>
      </CompD>
    </template>

    <hr>

    <!-- <template v-for="(vv, index) in list2">
          <button @click="closeOne2(index)">del {{index}}</button>
          <CompD :key="vv.value"></CompD>
    </template> -->
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
