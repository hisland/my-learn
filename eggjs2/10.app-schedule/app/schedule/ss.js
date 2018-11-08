let counter = 11

module.exports = {
  schedule: {
    interval: '3s',
    type: 'all',
  },
  async task(ctx) {
    console.log(counter++)
  },
}
