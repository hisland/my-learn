<script>
  let count = 0;

  function handleClick(event) {
    count += 1;
  }
  function handleClick2(event) {
    count += 1;
  }
</script>

<button on:click={handleClick} on:click={handleClick2}>count: {count}</button>
