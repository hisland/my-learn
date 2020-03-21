<script>
  export let item;
</script>

<ul>
  {#each item.children as child}
    <li class="fancy">
      <div>{child.name}</div>
      {#if child.children && child.children.length}
        <svelte:self item={child} />
      {/if}
    </li>
  {/each}
</ul>
