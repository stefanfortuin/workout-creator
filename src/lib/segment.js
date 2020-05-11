class Segment{
	constructor(duration, effort){
		this.duration = duration; //time in seconds
		this.effort = effort; //amount of percentage above ftp
		this.start = 0;
	}

	get endTime(){
		return this.start + this.duration;
	}

	start_format(){
		return this.seconds_to_file_format(this.start);
	}

	end_format(){
		let end_time = this.start + this.duration;
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
		output += this.start_format() + " " + this.effort + "\n";
		output += this.end_format() + " " + this.effort + "\n";
		return output;
	}
}
export default Segment;