require.ensure(['./common3'], function(){
  require('./common1')
  require('./common3')
  console.log(2)
}, 'ensure')
