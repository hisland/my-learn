<template>
  <div>
    <div>
      <button @click="running ? pause() : run()">{{ running ? 'pause' : 'run' }}</button>
    </div>
    <video width="200"></video>
    <div style="word-break: break-all">{{ text }}</div>
    <div v-for="(vv0, index0) in files" :key="index0" class="file">
      <button @click="files.splice(index0, 1)">del</button>
      <div class="progress">
        <div v-for="(vv1, index1) in vv0.pieces" :key="index1" :class="{ red: !vv1 }" class="chunk">{{ index1 }}</div>
      </div>
      <div v-if="vv0.done" class="content">{{ vv0.str }}</div>
    </div>
  </div>
</template>

<script>
import jsQR from 'jsqr'
import { md5 } from '../23.gen-data/md5-2'
import LZ from 'lz-string'
console.log('LZ: ', LZ)

export default {
  data() {
    return {
      running: false,
      text: '',
      files: [
        // {
        //   uid: '',
        //   total: 33,
        //   pieces: new Array(10000),
        //   done: false,
        // },
      ],
    }
  },
  methods: {
    pause() {
      this.running = false
    },
    run() {
      this.running = true
    },
    view(data) {
      // const text = data.chunks[0].text
      this.text = data.data
      this.parse(this.text)
    },
    parse(data) {
      try {
        const obj = JSON.parse(data)
        // console.log('obj: ', obj)
        const md5sum = md5(obj.v)
        if (md5sum === obj.m) {
          let old = this.files.find((vv) => vv.uid === obj.u)
          if (!old) {
            old = {
              uid: obj.u,
              total: obj.t,
              pieces: new Array(obj.t),
              done: false,
              str: '',
            }
            this.files.push(old)
          }
          if (!old.pieces[obj.i]) {
            old.pieces[obj.i] = obj
            if (old.pieces.filter((vv) => vv).length === old.total) {
              old.done = true
              this.decodeData(old)
              console.log('done: ')
            }
          }
        } else {
          console.log('md5sum === obj.m', md5sum, obj.m)
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
    decodeData(file) {
      const str1 = file.pieces.map((vv) => vv.v).join('')
      console.log('str1: ', str1)
      const str2 = LZ.decompressFromBase64(str1)
      console.log('str2: ', str2)
      file.str = str2
    },
  },
  mounted() {
    if (navigator?.mediaDevices?.getUserMedia) {
      console.log('navigator?.mediaDevices?.getUserMedia: ', navigator?.mediaDevices?.getUserMedia)
      navigator.mediaDevices
        .getUserMedia({
          video: {
            // facingMode: 'user', // 在移动端默认是有两个摄像头的，user表示前置摄像头，environment表示后置摄像头
            facingMode: 'environment', // 在移动端默认是有两个摄像头的，user表示前置摄像头，environment表示后置摄像头
            //   width: 640, // 视频宽度
            //   height: 480, //	视频高度
            //   frameRate: 30, //	视频帧率
          },
        })
        .then((mediaStream) => {
          console.log('mediaStream: ', mediaStream)

          const videoElement = document.querySelector('video')
          videoElement.srcObject = mediaStream
          videoElement.onloadedmetadata = function (evt) {
            console.log('onloadedmetadata')
            videoElement.play()
            requestAnimationFrame(tick)
          }

          const tick = () => {
            requestAnimationFrame(tick)
            if (!this.running) return
            // console.log('videoElement.readyState, videoElement.HAVE_ENOUGH_DATA: ', videoElement.readyState, videoElement.HAVE_ENOUGH_DATA)
            if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
              // const canvas = document.getElementById('canvas')
              const canvas = document.createElement('canvas')
              canvas.height = videoElement.videoHeight
              canvas.width = videoElement.videoWidth
              const ctx = canvas.getContext('2d')
              ctx.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight)
              const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
              const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert',
              })
              if (code) {
                // console.log('code: ', code)
                this.view(code)
              } else {
                // console.log('no code')
              }
            }
          }
        })
        .catch((err) => {
          console.log('err: ', err)
          // 获取摄像头失败，可以通过 err.name 或者 err.message 来判断错误原因，err并没有返回错误错误码
        })
    } else {
      // 浏览器不支持获取设备权限，有可能是当前页面不是https，也可能是当前浏览器不支持获取设备权限
    }
  },
}
</script>
<style scoped lang="scss">
.file {
  .progress {
    display: flex;
    flex-wrap: wrap;
    .chunk {
      flex: 0 0 2.5em;
      height: 1.5em;
      background: green;
      margin-left: 1px;
      &.red {
        background: red;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #fff;
    }
  }
  .content {
    border: 1px solid #999;
    padding: 5px;
    margin: 3px 0;
  }
}
</style>
