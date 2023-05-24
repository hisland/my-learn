import { loadMicroApp } from 'qiankun'

// 手动加载, 不跟 url 相关
loadMicroApp({
  name: 'app',
  entry: '//localhost:7100',
  container: '#yourContainer',
})
