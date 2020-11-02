import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/mockjs/static': mockjs.mock({
    'list|3': [{ name: '@city', 'value|1-100': 2, 'type|0-2': 1 }],
  }),
  'GET /api/mockjs/dynamic': (req, res) => {
    res.json(
      mockjs.mock({
        'list|3': [{ name: '@city', 'value|1-100': 2, 'type|0-2': 1 }],
      }),
    );
  },
};
