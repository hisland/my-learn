<script>
  import Foo from "./Foo.svelte";
  import Bar from "./Bar.svelte";
  export let name;
  let comp = Foo;
  let item = {
    name: "root",
    children: [
      { name: "hdl", children: [{ name: "hdl1" }, { name: "bbq1" }] },
      {
        name: "bbq",
        children: [
          { name: "hdl2", children: [{ name: "hdl3" }, { name: "bbq3" }] },
          { name: "bbq2" }
        ]
      }
    ]
  };
</script>

<button on:click={() => (comp = comp === Foo ? Bar : Foo)}>Change</button>

<svelte:component this={comp} {item} />
