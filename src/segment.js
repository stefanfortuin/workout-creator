class SEGMENT{
	constructor(start, duration, amount){
		this._start = start; //start time in min.sec
		this._duration = duration; //time in seconds
		this._amount = amount; //amount of percentage above ftp
	}

	startToSeconds(){
		let seconds = this._start.substring(0,1) * 60 + Math.floor(this._start.substring(3,4) / 1.67);
		return seconds;
	}

	endTime(){
		let end_time = this.startToSeconds() + this._duration;
		console.log(end_time);
		let min = Math.floor(end_time / 60);
		let sec = end_time - min * 60;
		return min + "." + sec;
	}

	toString(){
		let output = "";
		output += this._start + " " + this._amount + "\n";
		output += this.endTime() + " " + this._amount + "\n";
		return output;
	}
}

module.exports = SEGMENT;