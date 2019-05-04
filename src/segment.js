class SEGMENT{
	constructor(duration, amount){
		this._duration = duration; //time in seconds
		this._amount = amount; //amount of percentage above ftp
	}

	get duration(){
		return this._duration;
	}

	get endTime(){
		return this._start + this._duration;
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
		return min + "." + sec;
	}

	toString(){
		let output = "";
		output += this.start_format() + " " + this._amount + "\n";
		output += this.end_format() + " " + this._amount + "\n";
		return output;
	}
}

module.exports = SEGMENT;