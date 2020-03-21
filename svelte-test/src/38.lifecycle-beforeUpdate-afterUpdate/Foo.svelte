<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log("onMount");
    const interval = setInterval(() => {
      console.log("beep");
    }, 1000);

    return () => {
      console.log("unmount");
      clearInterval(interval);
    };
  });
</script>
