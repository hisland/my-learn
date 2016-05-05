var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('good');
});


var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({
  children: [childSchema]
})

var Parent = mongoose.model('Parent', parentSchema);
var Child = mongoose.model('Child', childSchema);
var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })
parent.children[0].name = 'Matthew';
parent.save(function(){
  console.log('create: ', arguments);
});


var parent2 = Parent.findOne(function(e, parent){
  parent.children[1].name = 'god';
  parent.children.push({ name: 'tt' })
  parent.save(function(){
    console.log('findOne: ', arguments);
  })
})

Child.findOne(function(e, child){
  console.log('child: ', arguments);
})
