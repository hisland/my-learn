<!-- <template>
  <div class="compa">
    <slot></slot>
    <slot name="aa"></slot>
    <slot name="bb" :foo="32"></slot>
    <slot name="cc"></slot>
  </div>
</template> -->

<script>
export default {
  // functional: true,
  render(hh){
    return hh('div', {
      class: 'compa'
    }, [
      this.$slots.default,
      this.$slots.aa,
      // this.$slots.bb, // not this
      this.$scopedSlots.bb({foo: 123}),
      this.$slots.cc,
    ]);
  }
}
</script>

<style>
</style>
