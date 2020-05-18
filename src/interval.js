class Interval {
	constructor(duration, effort) {
		this.duration = duration;
		this.effort = effort;
		this.start = 0;
	}

	get end() {
		return this.start + this.duration;
	}

	seconds_to_file_format(s) {
		return (s - (s %= 60)) / 60 + (9 < s ? '.' : '.0') + Math.round(s * 1.666667);
	}

	toString() {
		return `${this.seconds_to_file_format(this.start)} ${this.effort}\n${this.seconds_to_file_format(this.end)} ${this.effort}\n`;
	}
}
export default Interval;