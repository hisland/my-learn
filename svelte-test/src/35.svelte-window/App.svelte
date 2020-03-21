<script>
  function handleKeydown(event) {
    console.log(`pressed the ${event.key} key`);
  }

  let innerWidth;
  let innerHeight;
  let outerWidth;
  let outerHeight;
  let scrollX;
  let scrollY;
  let online;
</script>

<style>
  :global(body) {
    height: 2000px;
  }
</style>

<svelte:window
  on:keydown={handleKeydown}
  bind:innerWidth
  bind:innerHeight
  bind:outerWidth
  bind:outerHeight
  bind:scrollX
  bind:scrollY
  bind:online />

<div>
  <div>window innerWidth: {innerWidth}</div>
  <div>window innerHeight: {innerHeight}</div>
  <div>window outerWidth: {outerWidth}</div>
  <div>window outerHeight: {outerHeight}</div>
  <div>window scrollX: {scrollX}</div>
  <div>window scrollY: {scrollY}</div>
  <div>window online: {online}</div>
</div>
