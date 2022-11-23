<template>
  <div>
    <div>
      <input ref="file" type="file" @change="SelectFile" />
    </div>
    <div>
      <button @click="running ? pause() : start()">{{ running ? 'pause' : 'start' }}</button>
      <div>
        <span style="display: inline-block; width: 150px">speed: {{ speed }}</span>
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
      <span style="display: inline-block; width: 150px">frameIndex: {{ frameIndex }}</span>
      <input type="range" min="0" :max="imgs.length - 1" step="1" v-model="frameIndex" />
    </div>
    <div>
      <span style="display: inline-block; width: 150px">singleLength: {{ singleLength }}</span>
      <label><input type="radio" :value="200" v-model="singleLength" />200</label>
      <label><input type="radio" :value="400" v-model="singleLength" />400</label>
      <label><input type="radio" :value="800" v-model="singleLength" />800</label>
    </div>
    <img ref="img" style="width: 300px" />
    <div v-if="frameIndex < imgs.length" style="word-break: break-all">nowFrame: {{ frameIndex }}</div>
    <div>
      <div style="background: gray">all:</div>
      <div v-for="(vv, index) of imgs" :key="vv.value" style="word-break: break-all">{{ index }}:</div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import jsQR from 'jsqr'
import { md5 } from './md5-2'
import LZ from 'lz-string'
console.log('LZ: ', LZ)
// import { hex_md5 } from './md5'

export default {
  data() {
    return {
      speed: 1000,
      singleLength: 200,
      imgs: [],
      frameIndex: 0,
      running: false,
      handle: null,
    }
  },
  computed: {},
  methods: {
    async SelectFile(evt) {
      // const file = evt.target.value
    },
    pause() {
      clearTimeout(this.handle)
      this.running = false
    },
    async start() {
      this.running = true
      await this.GenImgsByte()
      // this.GenImgs()
      this.tick()
    },
    tick() {
      if (!this.running) return
      console.log('tick: ')
      const data = this.imgs[this.frameIndex]
      this.$refs.img.src = data.src

      this.handle = setTimeout(() => {
        this.frameIndex -= -1
        if (this.frameIndex === this.imgs.length) {
          this.frameIndex = 0
        }
        this.tick()
      }, this.speed)
    },
    async GenImgsByte() {
      for (const file of this.$refs.file.files) {
        const { name, size, type } = file
        const uid = Math.random().toString(36).substr(2)
        const ab = await file.arrayBuffer()
        const u8ca = new Uint8ClampedArray(ab)
        // window.ab = await file.arrayBuffer()
        // window.u8 = new Uint8ClampedArray(ab)
        // window.file = this.$refs.file
        // window.img = this.$refs.img
        let ii = 0
        let sum = 0
        const pieceLength = Math.ceil(u8ca.length / this.singleLength)
        for (let ii = 0; ii < pieceLength; ii++) {
          const start = ii * this.singleLength
          const end = (ii + 1) * this.singleLength
          const dataU8ca = u8ca.subarray(start, end)
          const infoPart = {
            u: uid,
            i: ii,
            t: pieceLength,
          }
          const infoStr = JSON.stringify(infoPart)
          const infoBlob = new Blob([infoStr])
          const infoAb = await infoBlob.arrayBuffer()
          const infoU8ca = new Uint8ClampedArray(infoAb)
          const gapAb = new ArrayBuffer(10)
          const gapU8ca = new Uint8ClampedArray(gapAb)

          const resultBlob = new Blob([infoU8ca, gapU8ca, dataU8ca])
          const resultAb = await resultBlob.arrayBuffer()
          const resultU8ca = new Uint8ClampedArray(resultAb)
          QRCode.toDataURL(
            [{ data: resultU8ca, mode: 'byte' }],
            {
              errorCorrectionLevel: 'L',
            },
            (err, url) => {
              if (err) throw err
              this.imgs[ii] = {
                src: url,
                ...infoPart,
              }
            }
          )
        }
      }
    },
    GenImgs() {
      const { sourceStrBase64: sourceStr, singleLength } = this
      this.frameIndex = 0
      this.imgs = []
      const uid = Math.random().toString(36).substr(2)

      const list1 = sourceStr.match(new RegExp('.{1,' + singleLength + '}', 'g'))
      console.log('list1: ', list1)
      for (let ii = 0; ii < list1.length; ii++) {
        const str = list1[ii]
        const obj = {
          u: uid,
          i: ii,
          t: list1.length,
          v: str,
          m: md5(str),
        }
        const jsonStr = JSON.stringify(obj)
        QRCode.toDataURL(
          jsonStr,
          {
            errorCorrectionLevel: 'L',
            // version: 9,
          },
          (err, url) => {
            if (err) throw err
            this.imgs[ii] = {
              src: url,
              ...obj,
              jsonStr,
            }
          }
        )
      }
    },
    FileToQRImg(file) {
      console.log('file: ', file)
    },
  },
  mounted() {},
}
</script>

