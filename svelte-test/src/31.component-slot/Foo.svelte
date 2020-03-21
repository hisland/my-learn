<script>
  export let name = "default name";
</script>

<div>name: {name}</div>
<div>
  <div>slot:</div>
  <slot name="oo" />
  <slot />
</div>
