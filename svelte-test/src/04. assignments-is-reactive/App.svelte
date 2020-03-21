<script>
  let foo = 1;
  function onClick() {
    foo = foo + 2;
  }
</script>

<style>

</style>

<div>
  <button on:click={onClick}>add</button>
  <div>foo: {foo}</div>
</div>
