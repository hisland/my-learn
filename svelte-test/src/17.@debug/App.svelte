<script>
  export let name = "default name";
  let foo = 1;
  function onClick1() {
    foo = foo + 2;
  }
  let bar1 = 0;
  let bar2 = 0;
  function onClick2() {
    bar1 = bar1 + 5;
    bar2 = bar2 + 10;
  }
</script>

{@debug foo}
{@debug bar1, bar2}

<div>
  <div>{name}</div>
  <button on:click={onClick1}>add</button>
  <div>foo: {foo}</div>
  <button on:click={onClick2}>add</button>
  <div>bar1: {bar1}</div>
  <div>bar2: {bar2}</div>
</div>
