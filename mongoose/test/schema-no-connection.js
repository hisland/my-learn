var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define a schema
var animalSchema = new Schema({
  name: String,
  type: String
});


var dog = new Animal({
  type: 'dog'
});


console.log(dog);
