import SEGMENT from './lib/segment';
import WORKOUT from './lib/workout';

let options = {
	type: "mrc",
	name: "test workout",
	description: "Really powerful workout on the bike",
}

let workout = new WORKOUT(options);
let segments = [
	new SEGMENT(46, 50),
	new SEGMENT(10, 100),
	new SEGMENT(98, 50),
	new SEGMENT(32, 100),
	new SEGMENT(90, 50),
	new SEGMENT(111, 150),
	new SEGMENT(76, 50),
	new SEGMENT(85, 80),
	new SEGMENT(23, 50),
]



workout.addMultipleSegments(segments);
console.log(workout.segments);

let segment5 = segments[5];
console.log(segment5.startEffort)
console.log(segment5.endEffort);
workout.deleteSegment(segment5);

console.log(workout.segments);

workout.addTag("sprint");
workout.addTag("hill");
workout.addTag("hard");
console.log(workout.tags);
workout.removeTag("hill");
console.log(workout.tags);

workout.addTags(["new", "fresh", "ftp", "heartrate"]);
console.log(workout.tags);
workout.addTags("cycling fast hit long");
console.log(workout.tags);

console.log(workout.totalSeconds)
console.log(workout.toString());