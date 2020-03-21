<script>
  import Foo from "./Foo.svelte";
  export let name;
</script>

<style>
</style>

<main>
  <h1>Hello {name}!</h1>
	<Foo></Foo>
	<Foo></Foo>
	<Foo></Foo>
</main>
