import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefineSetupComp2',
  props: {
    aa: String,
  },
  setup(props, ctx) {
    console.log('props, ctx: ', props, ctx)
    return () => {
      return <div>god 11</div>
    }
  },
})
