class Workout {
	constructor() {
		this.description = '';
		this.name = '';
		this.intervals = [];
	}

	get totalSeconds() {
		return this.intervals.reduce((t, s) => +t + +s.duration, 0)
	}

	addInterval(interval) {
		let last = this.intervals.slice(-1).pop();

		interval.start = (!last) ? 0 : last.end;

		this.intervals.push(interval);
		this.updateStartTimes();
	}

	addIntervals(intervals) {
		intervals.forEach(s => this.addInterval(s));
	}

	deleteInterval(interval) {
		this.intervals = this.intervals.filter(i => i != interval)
		this.updateStartTimes();
	}

	updateStartTimes() {
		for (let i = 0; i < this.intervals.length; i++) {
			const cur = this.intervals[i],
				prev = this.intervals[i - 1];

			cur.start = (!prev || i == 0) 
			? 0 
			:prev.end;
		}
	}

	save(type) {
		let output = "[COURSE HEADER]\nUNITS=ENGLISH\nVERSION=2\n";
		output += `DESCRIPTION=${this.description}\n`;
		output += `FILE NAME=${this.name}\n`;

		output += `MINUTES ${(type == 'mrc') ? 'PERCENT' : 'WATTS'}`;

		output += "[END COURSE HEADER]\n";
		output += "[COURSE DATA]\n";
		output += this.intervalsToString();
		output += "[END COURSE DATA]"
		return output;
	}

	intervalsToString() {
		return this.intervals.map(s => s.toString()).join('');
	}
}
export default Workout;