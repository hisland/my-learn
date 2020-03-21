<script>
  import Foo from "./Foo.svelte";
  let pp1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("ok value");
    }, 1000);
  });
  let pp2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject("fail value");
    }, 2000);
  });
</script>

<div>
  <Foo pp={pp1} />
  <hr>
  <Foo pp={pp2} />
</div>
