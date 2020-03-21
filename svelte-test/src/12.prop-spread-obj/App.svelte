<script>
  import Foo from "./Foo.svelte";
  export let name;
  let obj = {
    name,
    age: 21,
    height: 175
  };
</script>

<div>
  <Foo {...obj} />
</div>
