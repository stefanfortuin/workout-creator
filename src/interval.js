class Interval {
	constructor(duration, effort) {
		this.duration = duration;
		this.effort = effort;
		this.start = 0;
	}

	get end() {
		return this.start + this.duration;
	}

	format_sec(s) {
		return (s - (s %= 60)) / 60 + (9 < s ? '.' : '.0') + Math.round(s * 1.666667);
	}

	toString() {
		return `${this.format_sec(this.start)} ${this.effort}\n${this.format_sec(this.end)} ${this.effort}\n`;
	}
}
export default Interval;