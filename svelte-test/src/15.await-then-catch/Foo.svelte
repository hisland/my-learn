<script>
  export let pp;
</script>

<style>
  .block1 {
    color: green;
  }
  .block2 {
    color: pink;
  }
</style>

<div class="block1">
  <div>完整状态</div>
  {#await pp}
    <div>wait...</div>
  {:then value}
    <div>value: {value}</div>
  {:catch error}
    <div>error: {error}</div>
  {/await}
</div>
<div class="block2">
  <div>只关心结果, 不关心 等待状态/错误结果</div>
  {#await pp then value}
    <div>value: {value}</div>
  {/await}
</div>
