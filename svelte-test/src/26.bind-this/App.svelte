<script>
  import { onMount } from "svelte";

  let canvasElement;

  onMount(() => {
    const ctx = canvasElement.getContext("2d");
    // drawStuff(ctx);
    console.log(ctx)
  });
</script>

<canvas bind:this={canvasElement} />
