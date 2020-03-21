<script>
  export let age = 0;
</script>

{#if age < 10}
  <div>age: {age}, too young</div>
{:else if age < 40}
  <div>age: {age}, good</div>
{:else}
  <div>age: {age}, too old</div>
{/if}
