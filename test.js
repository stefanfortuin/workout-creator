import Interval from './src/interval.js';
import Workout from './src/workout.js';

let workout = new Workout();
let intervals = [
	new Interval(46, 50),
	new Interval(10, 100),
	new Interval(98, 50),
	new Interval(30, 100),
	new Interval(90, 50),
	new Interval(111, 150),
	new Interval(76, 50),
	new Interval(85, 80),
	new Interval(23, 50),
]

workout.add(intervals);
console.log(workout.intervals);

let interval5 = intervals[5];
console.log(interval5.effort)
console.log("now deleting", workout.intervals.length);
workout.delete(interval5);
console.log(workout.intervals);
console.log('deleted', workout.intervals.length);

console.log(workout.duration)
console.log(workout.save('mrc'));