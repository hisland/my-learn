<script>
  import Foo from "./Foo.svelte";
  export let name;
</script>

<div>
  <Foo {name}>
    <div>some thing</div>
    <div slot="oo">some thing oo</div>
  </Foo>
</div>
