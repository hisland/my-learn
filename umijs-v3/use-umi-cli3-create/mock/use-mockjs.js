import mockjs from 'mockjs';

export default {
  // 因为代码运行时固定了, 始终返回相同内容
  'GET /api/tags': mockjs.mock({
    'list|3': [{ name: '@city', 'value|1-3': 50, 'type|0-2': 1 }],
  }),
  'GET /api/tags2': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    const rs = JSON.stringify(
      mockjs.mock({
        'list|3': [{ name: '@city', 'value|1-3': 50, 'type|0-2': 1 }],
      }),
    );
    res.end(rs);
  },
};
