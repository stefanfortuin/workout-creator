import INTERVAL from './src/interval.js';
import WORKOUT from './src/workout.js';

let workout = new WORKOUT();
let intervals = [
	new INTERVAL(46, 50),
	new INTERVAL(10, 100),
	new INTERVAL(98, 50),
	new INTERVAL(30, 100),
	new INTERVAL(90, 50),
	new INTERVAL(111, 150),
	new INTERVAL(76, 50),
	new INTERVAL(85, 80),
	new INTERVAL(23, 50),
]

workout.addIntervals(intervals);
console.log(workout.intervals);

let interval5 = intervals[5];
console.log(interval5.effort)
console.log("now deleting", workout.intervals.length);
workout.deleteInterval(interval5);
console.log(workout.intervals);
console.log('deleted', workout.intervals.length);

console.log(workout.duration)
console.log(workout.save('mrc'));