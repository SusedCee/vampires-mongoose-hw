const mongoose = require('mongoose')

// a schema tells mongodb what our documents 
// should look like
// all docs should look identical 
const vampireSchema = new Schema({
  //write your schema fields here
  	name: {type: String, required: true} 
	hair_color: {type: String, default: blond}
	eye_color: String,
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {type: Number, min: 0}//objects can be a number boolean, array, one object, 	
});

//create an articles collection in mongodb
//we specify what does documents should look like
const Vampire = mongoose.model('Vampire', vampireSchema);

//article can talk to mongodb articles collection
// and make crud requests (create, read, update, destroy)
module.exports = Vampire;