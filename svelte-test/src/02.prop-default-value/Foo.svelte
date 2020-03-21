<script>
  export let name; // 最好显示指定 默认值
  export let pass = 123;
  export let foo = undefined; // 最好显示指定 默认值 即使它是 undefined
</script>

<style>

</style>

<div>name: {name}</div>
<div>pass is default: {pass}</div>
<div>foo is undefined: {foo}</div>
