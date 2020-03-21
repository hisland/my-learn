<script>
  import Foo from "./Foo.svelte";
  export let name;
  let foo;

  function handleClick(event) {
    console.log(foo);
  }
</script>

<div>
  <button on:click={handleClick}>show foo</button>
  <Foo {name} bind:this={foo} />
</div>
