<template>
  <div>
    <div>
      <button @click="GenImg">GenImg</button>
      <button @click="running ? pause() : run()">{{ running ? 'pause' : 'run' }}</button>
      <div>
        <span>speed: {{ speed }}</span>
        <input type="range" min="50" max="2000" step="50" v-model="speed" />
        <label><input type="radio" :value="50" v-model="speed" />50</label>
        <label><input type="radio" :value="100" v-model="speed" />100</label>
        <label><input type="radio" :value="200" v-model="speed" />200</label>
        <label><input type="radio" :value="300" v-model="speed" />300</label>
        <label><input type="radio" :value="500" v-model="speed" />500</label>
        <label><input type="radio" :value="1000" v-model="speed" />1000</label>
        <label><input type="radio" :value="2000" v-model="speed" />2000</label>
      </div>
    </div>
    <div>
      <span>frame: {{ index }}</span>
      <input type="range" min="0" :max="imgs.length - 1" step="1" v-model="index" />
    </div>
    <img ref="img" />
    <canvas ref="canvas" style="width: 200px"></canvas>
    <div v-if="index < imgs.length">now: {{ index }} {{ imgs[index].value }}</div>
    <div>
      <div style="background: gray">all:</div>
      <div v-for="(vv, index) of imgs" :key="vv.value">{{ index }}: {{ vv.value }}</div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import jsQR from 'jsqr'

export default {
  data() {
    return {
      speed: 1000,
      imgs: [],
      index: 0,
      running: false,
      handle: null,
    }
  },
  methods: {
    pause() {
      clearTimeout(this.handle)
      this.running = false
    },
    run() {
      this.running = true
      this.tick()
    },
    tick() {
      if (!this.running) return
      console.log('tick: ')
      const data = this.imgs[this.index]
      this.$refs.img.src = data.src

      // const img = document.createElement('img')
      // img.src = data.src
      // console.log('img: ', img);
      // img.onload = () => {
      //   this.$refs.canvas.getContext('2d').drawImage(img, 0, 0)
      // }

      this.handle = setTimeout(() => {
        this.index -= -1
        if (this.index === this.imgs.length) {
          this.index = 0
        }
        this.tick()
      }, this.speed)
    },
    GenImg() {
      const value = Math.random().toString(32)
      QRCode.toDataURL(
        value,
        {
          errorCorrectionLevel: 'L',
          version: 4,
        },
        (err, url) => {
          if (err) throw err
          this.imgs.push({
            src: url,
            value,
          })
        }
      )
    },
  },
  mounted() {
    this.GenImg()
    this.GenImg()
    this.GenImg()
    this.GenImg()
    this.GenImg()
  },
}
</script>

