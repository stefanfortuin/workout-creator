class Workout{
	constructor(options){
		this.type = options.type;
		this.version = (options.version) ? options.version : 2;
		this.units = "ENGLISH";
		this.description = options.description;
		this.name = options.name;

		this.data_columns = (this.type == "mrc") 
		? "MINUTES PERCENT \n" 
		: "MINUTES WATTS \n";

		this.tags = [];
		this.segments = [];
	}

	get totalSeconds(){
		return this.segments.reduce((t, s) => {
			return t += s.duration;
		}, 0)
	}

	addSegment(segment){
		let lastSegment = this.segments[this.segments.length - 1];

		let start;
		(!lastSegment)? start = 0 : start = lastSegment.endTime;
		segment.start = start;

		this.segments.push(segment);
		this.updateStartTimes();
	}

	addSegments(segments){
		for (let i = 0; i < segments.length; i++) {
			this.addSegment(segments[i]);
		}
	}

	deleteSegment(segment){
		let segmentIndex = this.segments.indexOf(segment);
		if (segmentIndex == -1) {
			console.error("Could not find segment");
			return
		}

		this.segments.splice(segmentIndex, 1);
		this.updateStartTimes();
	}

	updateStartTimes(){
		for (let i = 0; i < this.segments.length; i++) {
			const current = this.segments[i];
			const previous = this.segments[i-1];

			let start = (!previous || i == 0)
						? 0 
						: previous.endTime;

			current.start = start;
		}
	}

	get url(){
		let blob = new Blob([this.toString(type)], {type: "text/plain"});
		let url = URL.createObjectURL(blob);
		return url;
	}

	save(type){
		let output = "";
		output += "[COURSE HEADER] \n";
		output += "UNITS=ENGLISH \n";
		output += "VERSION=2\n";
		output += "DESCRIPTION=" + this.description + "\n";
		output += "FILE NAME=" + this.name + "\n";

		output += (type == "mrc") 
		? "MINUTES PERCENT \n" 
		: "MINUTES WATTS \n";

		output += "[END COURSE HEADER] \n";
		output += "[COURSE DATA] \n";
		output += this.segmentsToString();
		output += "[END COURSE DATA]"
		return output;
	}

	segmentsToString(){
		let output = "";
		this.segments.forEach((s) => output += s.toString())
		return output;
	}
}
export default Workout;