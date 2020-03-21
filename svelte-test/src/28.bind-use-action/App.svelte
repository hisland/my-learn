<script>
  export let bar;

  function foo(node, bar) {
    // the node has been mounted in the DOM
    console.log("created");
    return {
      update(bar) {
        // the value of `bar` has changed
        console.log("update");
      },

      destroy() {
        // the node has been removed from the DOM
        console.log("destroy");
      }
    };
  }
</script>

<div use:foo={bar} />
