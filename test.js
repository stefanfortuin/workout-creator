let SEGMENT =  require("./src/segment");
let MRC = require('./src/mrc');

let options = {
	name: "test workout",
	description: "Really powerful workout on the bike",
}

let workout = new MRC(options);
let segments = [
	new SEGMENT(120, 50),
	new SEGMENT(60, 100),
	new SEGMENT(120, 50),
	new SEGMENT(60, 100),
	new SEGMENT(120, 50),
	new SEGMENT(60, 150),
	new SEGMENT(120, 50),
	new SEGMENT(120, 80),
	new SEGMENT(120, 50),
]

workout.addMultipleSegments(segments);
console.log(workout.totalSeconds())
console.log(workout.save());