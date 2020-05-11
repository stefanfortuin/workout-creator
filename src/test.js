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

workout.addSegments(segments);
console.log(workout.segments);

let segment5 = segments[5];
console.log(segment5.effort)
workout.deleteSegment(segment5);
console.log(workout.segments);

console.log(workout.totalSeconds)
console.log(workout.save());