<script>
  import Foo from "./Foo.svelte";
  export let name;
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

<Foo {item} />
