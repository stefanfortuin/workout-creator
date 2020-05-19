class Workout {
	constructor() {
		this.description = '';
		this.name = '';
		this.intervals = [];
	}

	get duration() {
		return this.intervals.reduce((t, s) => +t + +s.duration, 0)
	}

	add(data) {
		(Array.isArray(data))
		? data.forEach(x => this.intervals.push(x))
		: this.intervals.push(data)
		this.update();
	}

	delete(interval) {
		this.intervals = this.intervals.filter(i => i != interval)
		this.update();
	}

	update() {
		this.intervals.forEach((cur, i) => {
			const prev = this.intervals[i-1];
			cur.start = (!prev || i == 0) 
			? 0 
			:prev.end;
		})
	}

	save(type) {
		let out = "[COURSE HEADER]\nUNITS=ENGLISH\nVERSION=2\n";
		out += `DESCRIPTION=${this.description}\n`;
		out += `FILE NAME=${this.name}\n`;
		out += `MINUTES ${(type == 'mrc') ? 'PERCENT' : 'WATTS'}\n`;
		out += "[END COURSE HEADER]\n";
		out += "[COURSE DATA]\n";
		out += this.intervals.map(s => s.toString()).join('');
		out += "[END COURSE DATA]"
		return out;
	}
}
export default Workout;