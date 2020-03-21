<script>
  export let list = [];
</script>

{#each list as vv, ii}
  <div>vv: {vv}, ii: {ii}</div>
{:else}
  <div>no list</div>
{/each}
