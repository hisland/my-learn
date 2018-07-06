const { mapState, mapGetters, mapActions, mapMutations } = Vuex

const store = new Vuex.Store({
  strict: true,
  state: {
    count: 0,
  },
  mutations: {
    DO_SOME(state, payload){
      console.log(arguments)
    },
  },
  getters: {
    what(state, getters) {
      console.log(getters.other)
      return state.count
    },
    other(state, getters) {
      return 'other'
    },
  },
  actions: {
    actionDo(ctx, payload) {
      console.log(33, ctx, payload)
      setTimeout(function() {
        console.log('do')
      }, 500)
    },
  },
})

const vueApp = new Vue({
  el: '#app',
  store,
  data: {},
  computed: {
    ...mapGetters(['what']),
  },
  methods: {
    ...mapActions(['actionDo']),
    ...mapMutations(['DO_SOME']),
  },
})
