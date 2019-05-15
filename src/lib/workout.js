class Workout{
	constructor(options){
		if (!options.type) {
			console.log("Please specifiy a type, mrc/erg");
			return;
		}

		this._type = options.type;
		this._version = (options.version) ? options.version : 2;
		this._units = "ENGLISH";
		this._description = options.description;
		this._name = options.name;

		this._data_columns = (this._type == "mrc") 
		? "MINUTES PERCENT \n" 
		: "MINUTES WATTS \n";

		this._segments = [];
	}

	totalSeconds(){
		return this._segments.reduce((t, s) => {
			return t += s.duration;
		}, 0)
	}

	addSegment(segment){
		let lastSegment = this._segments[this._segments.length - 1];

		let start;
		(!lastSegment)? start = 0 : start = lastSegment.endTime;
		segment.start = start;

		this._segments.push(segment);
	}

	addMultipleSegments(segments){
		for (let i = 0; i < segments.length; i++) {
			this.addSegment(segments[i]);
		}
	}

	deleteSegment(segment){
		this._segments.remove(segment);
	}

	findSegment(segment){
		return this._segments.find(segment);
	}

	toString(){
		let output = "";
		output += "[COURSE HEADER] \n";
		output += "UNITS=ENGLISH \n";
		output += "VERSION=" + this._version + "\n";
		output += "DESCRIPTION=" + this._description + "\n";
		output += "FILE NAME=" + this._name + "\n";
		output += this._data_columns;
		output += "[END COURSE HEADER] \n";
		output += "[COURSE DATA] \n";
		output += this.segmentsToString();
		output += "[END COURSE DATA]"
		return output;
	}

	segmentsToString(){
		let output = "";
		for (let i = 0; i < this._segments.length; i++) {
			const current = this._segments[i];
			const previous = this._segments[i-1];
			let start;

			(!previous || i == 0)
			? start = 0 
			: start = previous.endTime;

			current.start = start;
			output += current.toString();
		}
		return output;
	}
}
export default Workout;