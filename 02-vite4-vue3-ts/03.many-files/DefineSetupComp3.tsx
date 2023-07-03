import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefineSetupComp3',
  props: {
    aa: String,
  },
  setup(props, ctx) {
    console.log('props, ctx: ', props, ctx)
    return () => {
      return <div>god 1123</div>
    }
  },
})
