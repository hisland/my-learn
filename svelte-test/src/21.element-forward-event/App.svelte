<script>
  import Foo from "./Foo.svelte";
  import Bar from "./Bar.svelte";
  function Click(ee) {
    console.log(ee);
  }
</script>

<div>
  <Foo on:click={Click} />
  <Bar on:click={Click} />
</div>
