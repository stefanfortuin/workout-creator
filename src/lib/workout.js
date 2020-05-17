class Workout {
	constructor(options) {
		this.description = '';
		this.name = '';
		this.intervals = [];
	}

	get totalSeconds() {
		return this.intervals.reduce((t, s) => {
			return t += s.duration;
		}, 0)
	}

	addInterval(interval) {
		let lastinterval = this.intervals[this.intervals.length - 1];

		interval.start = (!lastinterval) ? 0 : lastinterval.endTime;

		this.intervals.push(interval);
		this.updateStartTimes();
	}

	addIntervals(intervals) {
		intervals.forEach(s => this.addInterval(s));
	}

	deleteInterval(interval) {
		let intervalIndex = this.intervals.indexOf(interval);
		if (intervalIndex == -1) return;

		this.intervals.splice(intervalIndex, 1);
		this.updateStartTimes();
	}

	updateStartTimes() {
		for (let i = 0; i < this.intervals.length; i++) {
			const cur = this.intervals[i],
				prev = this.intervals[i - 1];

			cur.start = (!prev || i == 0) 
			? 0 
			:prev.endTime;
		}
	}

	get url() {
		let blob = new Blob([this.save(type)], {
			type: "text/plain"
		});
		let url = URL.createObjectURL(blob);
		return url;
	}

	save(type) {
		let output = "";
		output += "[COURSE HEADER] \n";
		output += "UNITS=ENGLISH \n";
		output += "VERSION=2\n";
		output += "DESCRIPTION=" + this.description + "\n";
		output += "FILE NAME=" + this.name + "\n";

		output += (type == "mrc") ?
			"MINUTES PERCENT \n" :
			"MINUTES WATTS \n";

		output += "[END COURSE HEADER] \n";
		output += "[COURSE DATA] \n";
		output += this.intervalsToString();
		output += "[END COURSE DATA]"
		return output;
	}

	intervalsToString() {
		let output = "";
		this.intervals.forEach((s) => output += s.toString())
		return output;
	}
}
export default Workout;