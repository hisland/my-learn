<template>
  <div class="CompBWrap">
    <slot name="slot1">
      <div style="border: 1px solid purple; padding: 10px; margin: 5px">
        CompB slot1 default
      </div>
    </slot>
    <slot name="slot2">
      <div style="border: 1px solid red; padding: 10px; margin: 5px">
        CompB slot2 default
      </div>
    </slot>
    <slot name="slot3">
      <div style="border: 1px solid green; padding: 10px; margin: 5px">
        CompB slot3 default
      </div>
    </slot>
  </div>
</template>
