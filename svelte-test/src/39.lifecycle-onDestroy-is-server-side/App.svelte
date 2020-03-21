<script>
  import Foo from "./Foo.svelte";
  let isShow = true;
  function onClick() {
    isShow = !isShow;
  }

  import { beforeUpdate } from "svelte";
  beforeUpdate(() => {
    console.log("the component is about to update");
  });

  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    console.log("the component just updated");
  });

  import { onDestroy } from "svelte";

  onDestroy(() => {
    console.log("the component is being destroyed");
  });
</script>

<div>
  <button on:click={onClick}>{isShow}</button>
  {#if isShow}
    <Foo />
  {/if}
</div>
