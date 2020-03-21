<script>
  import NoStyle from "./NoStyle.svelte";
  import NoScript from "./NoScript.svelte";
  import NoMarkup from "./NoMarkup.svelte";
  export let name;
</script>

<style>

</style>

<main>
  <h1>Hello {name}!</h1>
  <NoStyle />
  <NoScript />
  <NoMarkup />
</main>
