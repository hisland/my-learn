'use strict'

var pp = new Proxy(function() {}, {
  construct: function(target, args){
    console.log(args)
    return {bb: 'q'}
  }
})


console.log(new pp(1,2,3))


