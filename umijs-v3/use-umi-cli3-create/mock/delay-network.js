import mockjs from 'mockjs';

export default {
  // 固定延迟1s
  'GET /api/delay1': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    const rs = JSON.stringify(
      mockjs.mock({
        'list|3': [{ name: '@city', 'value|1-3': 50, 'type|0-2': 1 }],
      }),
    );
    setTimeout(() => {
      res.end(rs);
    }, 1000);
  },
  // 随机范围
  'GET /api/delay1': (req, res) => {
    const timeStart = new Date();
    res.setHeader('Access-Control-Allow-Origin', '*');
    const rs = JSON.stringify(
      mockjs.mock({
        'list|3': [{ name: '@city', 'value|1-3': 50, 'type|0-2': 1 }],
      }),
    );
    setTimeout(() => {
      const timeEnd = new Date();
      res.setHeader('time-wait', timeEnd - timeStart);
      res.end(rs);
    }, random());
  },
};

function random(max = 1000) {
  return Math.floor(Math.random() * max);
}
