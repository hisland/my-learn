<script>
  import Foo from "./Foo.svelte";
  let isShow = true;
  function onClick() {
    isShow = !isShow;
  }

  import { beforeUpdate, tick } from "svelte";

  beforeUpdate(async () => {
    console.log("beforeUpdate 1");
    await tick();
    console.log("beforeUpdate 2");
  });
</script>

<div>
  <button on:click={onClick}>{isShow}</button>
  {#if isShow}
    <Foo />
  {/if}
</div>
