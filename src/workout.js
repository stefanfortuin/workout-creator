class WORKOUT{
	constructor(options){
		this._version = (options.version) ? options.version : 2;
		this._units = "ENGLISH";
		this._description = options.description;
		this._name = options.name;

		this._segments = [];
	}

	addSegment(segment){
		this._segments.push(segment)
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

	toString(file_name, data_columns){
		let output = "";
		output += "[COURSE HEADER] \n";
		output += "UNITS=ENGLISH \n";
		output += "VERSION=" + this._version + "\n";
		output += "DESCRIPTION=" + this._description + "\n";
		output += "FILE NAME=" + file_name + "\n";
		output += data_columns;
		output += "[END COURSE HEADER] \n";
		output += "[COURSE DATA] \n";
		for (let i = 0; i < this._segments.length; i++) {
			const s = this._segments[i];
			output += s.toString();
		}
		output += "[END COURSE DATA]"
		return output;
	}
}

module.exports = WORKOUT;