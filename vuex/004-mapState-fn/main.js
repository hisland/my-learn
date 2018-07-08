const { mapState, mapGetters, mapActions, mapMutations } = Vuex

const store = new Vuex.Store({
  strict: true,
  state: {
    postModel: {
      spaceList: {
        sum: 99,
        children: [
          {
            name: '主卧',
          },
        ],
      },
    },
  },
  mutations: {},
  getters: {},
  actions: {},
})

const vueApp = new Vue({
  el: '#app',
  store,
  data: {},
  computed: {
    ...mapState({
      what: state => state.postModel.spaceList.sum,
    }),
  },
  methods: {},
})
