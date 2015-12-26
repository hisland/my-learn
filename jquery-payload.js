$.ajax({
  url: '/cms/index/addcontent',
  type: 'POST', // 必须是POST
  contentType: 'application/json; charset=UTF-8',
  data: JSON.stringify({
    channel: cc,
    content: v.content.trim(),
    title: v.title.trim(),
    type: "text"
  }), // 数据 必须是字符串 会原样送到服务器
  dataType: 'text', // 期望返回类型 json, xml
  processData: false, // 防止 data 被预处理
  success: function(data) {

  }
});
