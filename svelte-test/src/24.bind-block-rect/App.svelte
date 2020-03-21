<script>
  let width;
  let height;
</script>

<textarea
  bind:offsetWidth={width}
  bind:offsetHeight={height}
  cols="30"
  rows="10" />

<div>{width} {height}</div>
