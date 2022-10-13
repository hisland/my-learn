<template>
  <div>
    <video ref="video" width="200"></video>
    <div style="word-break: break-all">text: {{ text }}</div>
    <div>
      <button @click="start()">start</button>
      <button @click="stop()">stop</button>
    </div>
  </div>
</template>

<script>
import QrScanner from 'qr-scanner'
window.QrScanner = QrScanner

export default {
  data() {
    return {
      running: false,
      text: '',
      qrScanner: null,
    }
  },
  methods: {
    stop() {
      this.qrScanner.stop()
    },
    start() {
      this.qrScanner.start()
    },
    view(data) {
      const text = data.chunks[0].text
      this.text = text
    },
  },
  mounted() {
    this.qrScanner = new QrScanner(
      this.$refs.video,
      (result) => {
        console.log('decoded qr code:', result)
        this.text = result.data
      },
      {}
    )
  },
}
</script>
