<!-- <template functional>
  <div class="compa">
    <slot></slot>
    <slot name="aa"></slot>
    <slot name="bb" :foo="32"></slot>
    <slot name="cc"></slot>
  </div>
</template> -->

<script>
export default {
  functional: true,
  render(hh, ctx){
    return hh('div', {
      class: 'compa'
    }, [
      ctx.slots().default,
      ctx.slots().aa,
      // ctx.slots().bb, // not this
      ctx.data.scopedSlots.bb({foo: 123}),
      ctx.slots().cc,
    ]);
  }
}
</script>

<style>
</style>
