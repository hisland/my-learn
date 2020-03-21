<script context="module">
  let totalComponents = 0;

  // this allows an importer to do e.g.
  // `import Example, { alertTotal } from './Example.svelte'`
  export function alertTotal() {
    alert(totalComponents);
  }

  console.log("in module");
</script>

<script>
  totalComponents += 1;
  console.log(
    `total number of times this component has been created: ${totalComponents}`
  );

  function onClick() {
    console.log("before:", totalComponents);
    totalComponents = totalComponents + 2;
    console.log("after:", totalComponents);
  }
</script>

<button on:click={onClick}>onClick</button>
<div>my: {totalComponents}</div>
