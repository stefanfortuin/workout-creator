class Workout {
	constructor() {
		this.description = '';
		this.name = '';
		this.intervals = [];
	}

	get duration() {
		return this.intervals.reduce((t, s) => +t + +s.duration, 0)
	}

	addInterval(interval) {
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
		this.intervals.forEach((cur, i) => {
			const prev = this.intervals[i-1];
			cur.start = (!prev || i == 0) 
			? 0 
			:prev.end;
		})
	}

	save(type) {
		let output = "[COURSE HEADER]\nUNITS=ENGLISH\nVERSION=2\n";
		output += `DESCRIPTION=${this.description}\n`;
		output += `FILE NAME=${this.name}\n`;
		output += `MINUTES ${(type == 'mrc') ? 'PERCENT' : 'WATTS'}\n`;
		output += "[END COURSE HEADER]\n";
		output += "[COURSE DATA]\n";
		output += this.intervals.map(s => s.toString()).join('');
		output += "[END COURSE DATA]"
		return output;
	}
}
export default Workout;