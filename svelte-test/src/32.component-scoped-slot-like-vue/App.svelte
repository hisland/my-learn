<script>
  import Foo from "./Foo.svelte";
  export let name;
  let items = [{ text: "hdl" }, { text: "bbq" }];
</script>

<Foo {items}>
  <div slot="item" let:item>{item.text} {items.length}</div>
  <p slot="footer">Copyright (c) 2019 Svelte Industries</p>
</Foo>
