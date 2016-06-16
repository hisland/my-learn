module.exports = {
  entry: './a.js',
  resolve:{
    // 直接修改默认规则, 只查找 XXX, XXX.halo
    // '' 空字符串 是查找本身, 不加后缀, 如果需要, 必须添加, 一般都需要
    extensions: ['', '.halo']
  },
  output: {
    filename: 'bundle.js'
  }
}

// 执行 webpack --display-error-details 能看到详细信息
