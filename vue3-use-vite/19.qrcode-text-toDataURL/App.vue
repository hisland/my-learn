<template>
  <div>
    <div>
      <template v-for="(vv, index) of imgs" :key="index">
        <img :src="vv.src" style="width: 200px" />
      </template>
    </div>
    <div>
      <button @click="GenImg">GenImg</button>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data() {
    return {
      imgs: [],
    }
  },
  methods: {
    GenImg() {
      QRCode.toDataURL(Math.random().toString(32), {}, (err, url) => {
        if (err) throw err
        this.imgs.push({
          src: url,
        })
      })
    },
  },
  mounted() {},
}
</script>

