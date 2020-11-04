import mockjs from 'mockjs';

export default {
  'GET /api/async1': async (req, res) => {
    const timeStart = new Date();
    res.setHeader('Access-Control-Allow-Origin', '*');
    const rs = JSON.stringify(
      mockjs.mock({
        'list|3': [{ name: '@city', 'value|1-3': 50, 'type|0-2': 1 }],
      }),
    );
    await delay(300);
    const timeEnd = new Date();
    res.setHeader('time-wait', timeEnd - timeStart);
    res.end(rs);
  },
  'GET /api/async2': async (req, res) => {
    const timeStart = new Date();
    res.setHeader('Access-Control-Allow-Origin', '*');
    const rs = JSON.stringify(
      mockjs.mock({
        'list|3': [{ name: '@city', 'value|1-3': 50, 'type|0-2': 1 }],
      }),
    );
    await randomDelay(500);
    const timeEnd = new Date();
    res.setHeader('time-wait', timeEnd - timeStart);
    res.end(rs);
  },
};

function delay(time = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
function randomDelay(max) {
  return new Promise(resolve => {
    setTimeout(resolve, random(max));
  });
}

function random(max = 1000) {
  return Math.floor(Math.random() * max);
}
