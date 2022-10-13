<template>
  <div>
    <div>
      <textarea cols="30" rows="10" v-model="sourceStr"></textarea>
      <button @click="gen200">gen200</button>
      <button @click="gen400">gen400</button>
      <button @click="gen800">gen800</button>
    </div>
    <div style="border: 1px solid red">sourceStr: {{ sourceStr.length }} {{ sourceStr }}</div>
    <div style="border: 1px solid green">sourceStrBase64: {{ sourceStrBase64.length }} {{ sourceStrBase64 }}</div>
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
    <img ref="img" />
    <div v-if="frameIndex < imgs.length" style="word-break: break-all">nowFrame: {{ frameIndex }} {{ imgs[frameIndex].jsonStr }}</div>
    <div>
      <div style="background: gray">all:</div>
      <div v-for="(vv, index) of imgs" :key="vv.value" style="word-break: break-all">{{ index }}: {{ vv.jsonStr }}</div>
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

console.log(md5('hello'))
// console.log(hex_md5('hello'));

function genStr(length = 200) {
  let str = ''
  while (str.length < length) {
    const value = Math.random().toString(36).substr(2)
    str += value
  }
  return str.substr(0, length)
}

export default {
  data() {
    return {
      speed: 1000,
      singleLength: 200,
      imgs: [],
      frameIndex: 0,
      running: false,
      handle: null,
      sourceStr: '',
    }
  },
  computed: {
    sourceStrBase64() {
      return LZ.compressToBase64(this.sourceStr)
      // return LZ.compress(this.sourceStr)
      // return btoa(encodeURIComponent(this.sourceStr))
      // return btoa(this.sourceStr)
      // return Buffer.from(this.sourceStr, 'base64')
    },
  },
  methods: {
    gen200() {
      this.sourceStr = genStr(200)
    },
    gen400() {
      this.sourceStr = genStr(400)
    },
    gen800() {
      this.sourceStr = genStr(800)
    },
    pause() {
      clearTimeout(this.handle)
      this.running = false
    },
    start() {
      this.running = true
      this.GenImgs()
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
  mounted() {},
}
</script>

