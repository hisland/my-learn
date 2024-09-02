<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const CompA = ref<HTMLDivElement | null>(null)
</script>
<template>
  <div style="border: 1px solid purple; padding: 10px">
    <video src="rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp"></video>
  </div>
</template>
<style scoped></style>
