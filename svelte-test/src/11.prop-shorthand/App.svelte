<script>
  import Foo from "./Foo.svelte";
  export let name;
</script>

<div>
  <Foo />
  <Foo {name} />
</div>
