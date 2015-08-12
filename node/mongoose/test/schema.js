var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose');
var Schema = mongoose.Schema;

var assert = require("assert");

var blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{
    body: String,
    date: Date
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

var Blog = mongoose.model('Blog', blogSchema);


// define a schema
var animalSchema = new Schema({
  name: String,
  type: String
});

// assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({
    type: this.type
  }, cb);
}

// assign a function to the "statics" object of our animalSchema
animalSchema.statics.findByName = function(name, cb) {
  this.find({
    name: new RegExp(name, 'i')
  }, cb);
}

var Animal = mongoose.model('Animal', animalSchema);

var dog = new Animal({
  type: 'dog'
});
dog.findSimilarTypes(function(err, dogs) {
  console.log(dogs); // woof
});

Animal.findByName('fido', function(err, animals) {
  console.log(animals);
});



var animalSchema2 = new Schema({
  name: String,
  type: String,
  tags: {
    type: [String],
    index: true
  } // field level
});

animalSchema2.index({
  name: 1,
  type: -1
}); // schema level



animalSchema2.set('autoIndex', false);
// or
new Schema({
  name: String,
  type: String,
  tags: {
    type: [String],
    index: true
  } // field level
}, {
  autoIndex: false
});


// define a schema
var personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

// compile our model
var Person = mongoose.model('Person', personSchema);

// create a document
var bad = new Person({
  name: {
    first: 'Walter',
    last: 'White'
  }
});

console.log('bad is: ', bad);

personSchema.virtual('name.full').get(function() {
  return this.name.first + ' ' + this.name.last;
});

console.log('%s is insane', bad.name.full); // Walter White is insane

personSchema.virtual('name.full').set(function(name) {
  var split = name.split(' ');
  this.name.first = split[0];
  this.name.last = split[1];
});

bad.name.full = 'Breaking Bad';
console.log(bad.name.first); // Breaking
console.log(bad.name.last); // Bad
