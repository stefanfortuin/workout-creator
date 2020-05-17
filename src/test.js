import INTERVAL from './lib/interval';
import WORKOUT from './lib/workout';

let workout = new WORKOUT();
let intervals = [
	new INTERVAL(46, 50),
	new INTERVAL(10, 100),
	new INTERVAL(98, 50),
	new INTERVAL(32, 100),
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
workout.deleteInterval(interval5);
console.log(workout.intervals);

console.log(workout.totalSeconds)
console.log(workout.save('mrc'));