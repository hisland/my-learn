<script>
  export let title;
  export let foo = 1;

  // this will update `document.title` whenever
  // the `title` prop changes
  $: document.title = title;

  $: {
    console.log(`multiple statements can be combined`);
    console.log(`the current title is ${title}`);
  }

  $: {
    console.log(`multiple statements can be combined`);
    console.log(`the current foo is ${foo}`);
  }

  function onClick1() {
    title = Math.random();
  }
  function onClick2() {
    foo = foo + 2;
  }
</script>

<style>

</style>

<div>
  <button on:click={onClick1}>random title</button>
  <button on:click={onClick2}>random foo</button>
  <div>foo: {title}</div>
</div>
