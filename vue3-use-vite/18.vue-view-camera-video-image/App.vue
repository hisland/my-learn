<template>
  <div>
    <video width="200"></video>
    <canvas id="canvas" style="width: 200px"></canvas>
    <div>
      <template v-for="(vv, index) of imgs" :key="index">
        <img :src="vv.src" style="width: 200px" />
      </template>
    </div>
    <div>
      <button @click="capture">capture</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
    }
  },
  methods: {
    capture() {
      const canvas = document.getElementById('canvas')
      const video = document.querySelector('video')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
      canvas.toBlob((blob) => {
        this.imgs.push({
          src: window.URL.createObjectURL(blob),
        })
      })
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
          }

          //   // 通过设置不同的分辨率，我们也能从最终的显示效果中发现效果略有不同，当然也可以通过代码来验证我们设置的参数是否生效了
          const videoTrack = mediaStream.getVideoTracks()[0]
          console.log('videoTrack: ', videoTrack)
          const settings = videoTrack.getSettings()
          console.log('settings: ', settings)
          // console.log('video frameRate:', settings.frameRate)
          // console.log('video width:', videoElement.videoWidth)
          // console.log('video height:', videoElement.videoHeight)
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

<style></style>
