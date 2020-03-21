<script>
  function handleMouseenter(event) {
    console.log(`handleMouseenter: `, event);
  }
  function handleMouseleave(event) {
    console.log(`handleMouseleave: `, event);
  }
</script>

<style>
  :global(body) {
    height: 2000px;
  }
</style>

<svelte:body
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave} />
