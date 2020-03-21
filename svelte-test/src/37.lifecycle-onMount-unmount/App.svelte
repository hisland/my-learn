<script>
  import Foo from "./Foo.svelte";
  let isShow = true;
  function onClick() {
    isShow = !isShow;
  }
</script>

<div>
  <button on:click={onClick}>{isShow}</button>
  {#if isShow}
    <Foo />
  {/if}
</div>
