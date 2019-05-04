const WORKOUT = require('./workout');

class ERG extends WORKOUT{
	constructor(options){
		super(options);
		this._file_name = this._name + ".erg";
		this._data_columns = "MINUTES WATTS \n";
	}

	save(){
		return this.toString(this._file_name, this._data_columns);
	}
}

module.exports = ERG;