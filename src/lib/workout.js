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
		this._name = options.name + "." + options.type;

		this._data_columns = (this._type == "mrc") 
		? "MINUTES PERCENT \n" 
		: "MINUTES WATTS \n";

		this._tags = [];

		this._segments = [];
	}

	get totalSeconds(){
		return this._segments.reduce((t, s) => {
			return t += s.duration;
		}, 0)
	}

	get segments(){
		return this._segments;
	}

	get fileName(){
		return this._name;
	}

	get tags(){
		return this._tags;
	}

	removeTag(tag){
		let tagIndex = this._tags.indexOf(tag);
		this._tags.splice(tagIndex, 1);
	}

	addTags(tags){
		if (Array.isArray(tags)){
			this._tags = this._tags.concat(tags);
		}
		else{
			let tagArray = tags.split(" ");
			this._tags = this._tags.concat(tagArray);
		}
	}

	addTag(tag){
		this._tags.push(tag);
	}

	addSegment(segment){
		let lastSegment = this._segments[this._segments.length - 1];

		let start;
		(!lastSegment)? start = 0 : start = lastSegment.endTime;
		segment.start = start;

		this._segments.push(segment);
		this.updateStartTimes();
	}

	addMultipleSegments(segments){
		for (let i = 0; i < segments.length; i++) {
			this.addSegment(segments[i]);
		}
	}

	deleteSegment(segment){
		let segmentIndex = this._segments.indexOf(segment);
		if (segmentIndex == -1) {
			console.error("Could not find segment");
			return
		}

		this._segments.splice(segmentIndex, 1);
		this.updateStartTimes();
	}

	findSegment(segment){
		return this._segments.find(segment);
	}

	updateStartTimes(){
		for (let i = 0; i < this._segments.length; i++) {
			const current = this._segments[i];
			const previous = this._segments[i-1];

			let start = (!previous || i == 0)
						? 0 
						: previous.endTime;

			current.start = start;
		}
	}

	getDownloadUrl(){
		let blob = new Blob([this.toString()], {type: "text/plain"});
		let url = URL.createObjectURL(blob);
		return url;
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
			output += current.toString();
		}
		return output;
	}
}
export default Workout;