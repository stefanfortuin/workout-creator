class Segment{
	constructor(duration, start_effort, end_effort){
		this._duration = duration; //time in seconds
		this._startEffort = start_effort; //amount of percentage above ftp
		this._endEffort = (!end_effort) ? start_effort : end_effort;
	}

	get duration(){
		return this._duration;
	}

	set duration(seconds){
		this._duration = seconds;
	}

	get endTime(){
		return this._start + this._duration;
	}

	get effortDifference(){
		return this._endEffort - this._startEffort;
	}

	get startEffort(){
		return this._startEffort;
	}

	get endEffort(){
		return this._endEffort;
	}

	set startEffort(effort){
		if(effort > 200) effort = 200;

		this._startEffort = effort;
	}

	set endEffort(effort){
		if(effort > 200) effort = 200;

		this._endEffort = effort;
	}

	set start(seconds){
		this._start = seconds;
	}

	start_format(){
		return this.seconds_to_file_format(this._start);
	}

	end_format(){
		let end_time = this._start + this._duration;
		return this.seconds_to_file_format(end_time);
	}

	seconds_to_file_format(seconds){
		let min = Math.floor(seconds / 60);
		let sec = seconds - min * 60;
		sec = (sec > 9) ? "" + sec : "0" + sec;
		return min + "." + Math.round(sec * 1.666667);
	}

	toString(){
		let output = "";
		output += this.start_format() + " " + this._startEffort + "\n";
		output += this.end_format() + " " + this._endEffort + "\n";
		return output;
	}
}
export default Segment;