<template>
  <div>
    <video width="200"></video>
    <div style="word-break: break-all">{{ text }}</div>
    <div>
      <button @click="running ? pause() : run()">{{ running ? 'pause' : 'run' }}</button>
    </div>
  </div>
</template>

<script>
import jsQR from 'jsqr'

export default {
  data() {
    return {
      running: false,
      text: '',
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
                console.log('code: ', code)
                this.view(code)
              } else {
                console.log('no code')
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
