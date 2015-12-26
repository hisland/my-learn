var EventEmitter = require('events');
var util = require('util');

function MyEventEmitter(){
  EventEmitter.call(this);
}

util.inherits(MyEventEmitter, EventEmitter);

var a = new MyEventEmitter();

a.addListener('aa', function(e){
  console.log('aa', arguments);
});

a.emit('aa', 1,2,3)

