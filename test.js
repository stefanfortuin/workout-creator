let SEGMENT =  require("./src/segment");
let MRC = require('./src/mrc');

let options = {
	name: "test workout",
	description: "Really powerful workout on the bike",
}

let workout = new MRC(options);
let segments = [
	new SEGMENT("0.00", 120, 50),
	new SEGMENT("2.00", 60, 100),
	new SEGMENT("3.00", 120, 50),
	new SEGMENT("5.00", 60, 100),
	new SEGMENT("6.00", 120, 50),
	new SEGMENT("7.00", 60, 150),
	new SEGMENT("8.00", 120, 50),
	new SEGMENT("10.00", 120, 80),
	new SEGMENT("12.00", 120, 50),
]

workout.addMultipleSegments(segments);
console.log(workout.save());