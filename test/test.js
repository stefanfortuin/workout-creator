import Interval from '../src/interval.js';
import Workout from '../src/workout.js';
import assert from 'assert';

describe('Workout', function (){

	//add single interval
	describe('add() single', function (){
		it('should add a single interval', function (){
			let workout = new Workout();
			let interval = new Interval(120, 60);
			workout.add(interval)
			assert.equal(workout.intervals.length, 1);
		})
	})

	//add multiple intervals
	describe('add() multiple', function (){
		it('should add array of 3 intervals', function (){
			let workout = new Workout();
			let intervals = [
				new Interval(120, 60),
				new Interval(180, 70),
				new Interval(60, 80),
			];
			workout.add(intervals);
			assert.equal(workout.intervals.length, 3);
		})
	})

	//delete interval
	describe('delete() interval', function (){
		it('should delete interval', function (){
			let workout = new Workout();
			let intervals = [
				new Interval(120, 60),
				new Interval(180, 70),
				new Interval(60, 80),
			];
			workout.add(intervals);
			workout.delete(workout.intervals[1])
			assert.equal(workout.intervals.length, 2);
		})
	})

	//duration
	describe('duration()', function (){
		it('should be a duration of 360 seconds', function (){
			let workout = new Workout();
			let intervals = [
				new Interval(120, 60),
				new Interval(180, 70),
				new Interval(60, 80),
			];
			workout.add(intervals);
			assert.equal(workout.duration, 360);
		})
	})

	//description
	describe('description', function (){
		it("should return description 'hard cycling workout'", function (){
			let workout = new Workout();
			workout.description = 'hard cycling workout'

			assert.equal(workout.description, 'hard cycling workout');
		})
	})

	//name
	describe('name', function (){
		it("should return name 'sprint workout'", function (){
			let workout = new Workout();
			workout.description = 'sprint workout'

			assert.equal(workout.description, 'sprint workout');
		})
	})
})

describe('Interval', function (){
	describe('duration', function(){
		it('should have a duration of 60 seconds', function (){
			let interval = new Interval(60, 80);

			assert.equal(interval.duration, 60);
		})
	})

	describe('effort', function(){
		it('should have an effort of 80%', function (){
			let interval = new Interval(60, 80);

			assert.equal(interval.effort, 80);
		})
	})
})