function app() {
  console.log(33)
}

app.listen = function () {
  console.log(this) // 这里 this 是 app 函数
}

app.listen()
