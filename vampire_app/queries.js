const mongoose = require('mongoose');
//require the db file this runs the file which is all we need it to do
//is to create the connectiojns to the db 
// we arent exporting anything so we dont need to save it in a variable
require('./app');

//require the Model Object and name it Article
//always capitalized
const Vampire = require('./vampire.js')

const vampireData = require('./populateVampires.js');


//CREATING A NEW VAMPIRE
// Vampire.create({
//   	name: "Marco Russo", 
// 	hairColor: "red",
// 	eyeColor: "red",
// 	dob: '1950-12-02',
// 	loves: ["indoor swimming", "collecting coffins"],
// 	location: "Rome, Italy",
// 	gender: "male",
// 	victims: 589
// }, (err, vampire)=>{
// 	if(err) {// if there's an error log it
// 		console.log(err);
// 	} else {//else log the created article
// 		console.log(vampire, "<---this is vampire");
// 	}
// });


// //CREATING A NEW VAMPIRE
// Vampire.create({
//   	name: "Alexei Sokolov", 
// 	hairColor: "white",
// 	eyeColor: "green",
// 	dob: '1900-06-09',
// 	loves: ["clubbing", "drinking vodka"],
// 	location: "Moscow, Russia",
// 	gender: "male",
// 	victims: 469
// }, (err, vampire)=>{
// 	if(err) {// if there's an error log it
// 		console.log(err);
// 	} else {//else log the created article
// 		console.log(vampire, "<---this is vampire");
// 	}
// });

// //CREATING A NEW VAMPIRE
// Vampire.create({
//   	name: "Lan Yang", 
// 	hairColor: "black",
// 	eyeColor: "hazel",
// 	dob: '1850-03-01',
// 	loves: ["dressing up like a geisha", "collecting her victims' shoes"],
// 	location: "Seattle, Washington",
// 	gender: "female",
// 	victims: 830
// }, (err, vampire)=>{
// 	if(err) {// if there's an error log it
// 		console.log(err);
// 	} else {//else log the created article
// 		console.log(vampire, "<---this is vampire");
// 	}
// });



// //CREATING A NEW VAMPIRE
// Vampire.create({
//   	name: "Sonia Miller", 
// 	hairColor: "blond",
// 	eyeColor: "blue",
// 	dob: '2000-05-09',
// 	loves: ["reading comics", "crashing parties for a bite"],
// 	location: "Denver, Colorado",
// 	gender: "female",
// 	victims: 301
// }, (err, vampire)=>{
// 	if(err) {// if there's an error log it
// 		console.log(err);
// 	} else {//else log the created article
// 		console.log(vampire, "<---this is vampire");
// 	}
// });

//DELETING MARCO #1
//DELETING AN ARTICLE
// Vampire.findByIdAndDelete("5d31d0737892e49253fa2d7e",
// 	(err, response)=>{
// 		console.log(response); //just tells you the action was successful
// 	}
// );

//DELETING MARCO #2
//DELETING AN ARTICLE
// Vampire.findByIdAndDelete("5d31d0cb5fae579255aced59",
// 	(err, response)=>{
// 		console.log(response); //just tells you the action was successful
// 	}
// );

//DELETING MARCO #3
//DELETING AN ARTICLE
// Vampire.findByIdAndDelete("5d31d81f8a9bcf92b0f16bee",
// 	(err, response)=>{
// 		console.log(response); //just tells you the action was successful
// 	}
// );

//DELETING MARCO #4
//DELETING AN ARTICLE
// Vampire.findByIdAndDelete("5d31dc6a4c743692d29fd77e",
// 	(err, response)=>{
// 		console.log(response); //just tells you the action was successful
// 	}
// );

//DELETING MARCO #4
//DELETING AN ARTICLE
// Vampire.findByIdAndDelete("5d31dd2faf963492d7061026",
// 	(err, response)=>{
// 		console.log(response); //just tells you the action was successful
// 	}
// );

// ADDING THE VAMPIRES FROM ARRAY. https://stackoverflow.com/questions/15400029/mongoose-create-multiple-documents
// Vampire.insertMany(vampireData, (err, vampire)=>{
// 	if(err) {// if there's an error log it
// 		console.log(err);
// 	} else {//else log the created article
// 		console.log(vampire, "<---vampire array");
// 	}
// });





module.exports = Vampire;
