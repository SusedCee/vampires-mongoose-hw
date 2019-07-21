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

//FINDING ALL FEMALES
// Vampire.find({gender: "f"}, (err, Vampires) => {
// 	console.log(Vampires)
// })

//EDITING GENDER Marco
// Vampire.findByIdAndUpdate("5d31dfa8570f4f92e6971df4", {$set: {gender: 'm'}},
// 	(err, response)=> {
// 		console.log(response);
// 	}
// );

//EDITING GENDER ALEXEI
// Vampire.findByIdAndUpdate("5d31e0439d502492ebfecd70", {$set: {gender: 'm'}},
// 	(err, response)=> {
// 		console.log(response);
// 	}
// );

//EDITING GENDER Lan
// Vampire.findByIdAndUpdate("5d31e0d779e6a492f037b1d1", {$set: {gender: 'f'}},
// 	(err, response)=> {
// 		console.log(response);
// 	}
// );

//EDITING GENDER Lan
// Vampire.findByIdAndUpdate("5d31e10d8ba08192f5148965", {$set: {gender: 'f'}},
// 	(err, response)=> {
// 		console.log(response);
// 	}
// );

//greater than 500 victims
// Vampire.find({victims: {$gt: 500}}, (err, Vampires) => {
// 	console.log(Vampires)
// })

//FEWER OR EQUAL TO 150
// Vampire.find({victims: {$lte: 150}}, (err, Vampires) => {
// 	console.log(Vampires)
// })

//VICTIM NOT EQUAL TO 210234
// Vampire.find({victims: {$ne: 150}}, (err, Vampires) => {
// 	console.log(Vampires)
// })

//VICTIM greater than 150 fewer than 500
// Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, Vampires) => {
// 	console.log(Vampires)
// })

//VAMPIRES WITH TITLE
// Vampire.find({ title: {$exists: true}}, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire title");
//         }
//         mongoose.connection.close();
//     console.log(vampires)
// })

//VAMPIRES WITHOUT TITLE
// Vampire.find({ title: {$exists: false}}, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire title");
//         }
//         mongoose.connection.close();
//     console.log(vampires)
// })

//VAMPIRES WITH TITLE
// Vampire.find({ 
// 	title: {$exists: true}, 
// 	victims: {$exists: false}
// 	}, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//         	console.log(vampires, "<-- vampire title and no victims");
//         }
//         // mongoose.connection.close();
//         console.log(vampires);
// });

//have victims AND the victims they have are greater than 1000
// Vampire.find({$and:
// 	[{victims: {$gt: 1000}}, 
// 	{victims: {$exists: true}}
// 	]}, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//         	console.log(vampires, "<-- victims higher than 1000");
        	
//         }
//         console.log(vampires);
//         // mongoose.connection.close();  
// });

//are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or: [{location: "New York, New York, US"}, {location: "New Orleans, Louisiana, US"}]}, 
// 	(err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//         	console.log(vampires, "<-- two locations");	
//         }   
//         console.log(vampires);   
// });


//love brooding or being tragic-------------------
// Vampire.find({$or: [{love: "brooding"}, {love: "being tragic"}]}, 
// 	(err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//         	console.log(vampires, "<-- two loves");	
//         }   
//         console.log(vampires);
// });

//have more than 1000 victims or love marshmallows-------------------
// Vampire.find({$or: [{victims: {$gt: 1000}}, {love: "marshmallows"}]}, 
// 	(err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//         	console.log(vampires, "<-- 1000 and marsh");	
//         }   
//         console.log(vampires)
// });

//have red hair or green eyes
// Vampire.find({$or: [{hairColor: "red"}, {eyeColor: "green"}]}, 
// 	(err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//         	console.log(vampires, "<-- red hair, green eyes");	
//         }   
//         console.log(vampires)
// });





module.exports = Vampire;
