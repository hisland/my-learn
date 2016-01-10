$.ajax({
  url: 'http://test.com:3333/index/update_key',
  type: 'POST', // 必须是POST
  contentType: 'application/json; charset=UTF-8',
  data: JSON.stringify({"id":"9","data":{"URL":"/student/list/**abc"}}), // 数据 必须是字符串 会原样送到服务器
  dataType: 'text', // 期望返回类型 json, xml
  processData: false, // 防止 data 被预处理
  success: function(data) {
    console.log(data);
  }
});


// 记得服务器 返回这些头
// this.header('Access-Control-Allow-Origin', '*');
// this.header('Access-Control-Allow-Headers', 'Content-Type'); // 不可以用 *

