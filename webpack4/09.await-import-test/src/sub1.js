console.log('console in sub1')

import('./sub1-1.js').then(function(sub11) {
  console.log(sub11.default)
})

export default 'sub1'
