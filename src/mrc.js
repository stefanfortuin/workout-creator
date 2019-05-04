const WORKOUT = require('./workout');

class MRC extends WORKOUT{
	constructor(options){
		super(options);
		this._file_name = this._name + ".mrc";
		this._data_columns = "MINUTES PERCENT \n";
	}

	save(){
		return this.toString(this._file_name, this._data_columns);
	}
}

module.exports = MRC;