<script>
  import Foo from "./Foo.svelte";
  let list = [1, 2, 3];
  let obj = {
    aa: 1,
    bb: 2,
    cc: 3
  };
</script>

<div>
  <div>1</div>
  <Foo {list} />
  <div>2</div>
  <Foo />
  <div>3 对象要自己转换成 list</div>
  <Foo list={Object.entries(obj)} />
</div>
