<script>
  let count = 0;

  function handleClick(event) {
    count += 1;
  }
</script>

<button on:click|once|capture={handleClick}>count: {count}</button>
