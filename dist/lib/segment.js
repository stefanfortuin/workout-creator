"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SEGMENT = function () {
	function SEGMENT(duration, amount) {
		_classCallCheck(this, SEGMENT);

		this._duration = duration; //time in seconds
		this._amount = amount; //amount of percentage above ftp
	}

	_createClass(SEGMENT, [{
		key: "start_format",
		value: function start_format() {
			return this.seconds_to_file_format(this._start);
		}
	}, {
		key: "end_format",
		value: function end_format() {
			var end_time = this._start + this._duration;
			return this.seconds_to_file_format(end_time);
		}
	}, {
		key: "seconds_to_file_format",
		value: function seconds_to_file_format(seconds) {
			var min = Math.floor(seconds / 60);
			var sec = seconds - min * 60;
			sec = sec > 9 ? "" + sec : "0" + sec;
			return min + "." + Math.round(sec * 1.666667);
		}
	}, {
		key: "toString",
		value: function toString() {
			var output = "";
			output += this.start_format() + " " + this._amount + "\n";
			output += this.end_format() + " " + this._amount + "\n";
			return output;
		}
	}, {
		key: "duration",
		get: function get() {
			return this._duration;
		}
	}, {
		key: "endTime",
		get: function get() {
			return this._start + this._duration;
		}
	}, {
		key: "start",
		set: function set(seconds) {
			this._start = seconds;
		}
	}]);

	return SEGMENT;
}();

module.exports = SEGMENT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2VnbWVudC5qcyJdLCJuYW1lcyI6WyJTRUdNRU5UIiwiZHVyYXRpb24iLCJhbW91bnQiLCJfZHVyYXRpb24iLCJfYW1vdW50Iiwic2Vjb25kc190b19maWxlX2Zvcm1hdCIsIl9zdGFydCIsImVuZF90aW1lIiwic2Vjb25kcyIsIm1pbiIsIk1hdGgiLCJmbG9vciIsInNlYyIsInJvdW5kIiwib3V0cHV0Iiwic3RhcnRfZm9ybWF0IiwiZW5kX2Zvcm1hdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxPO0FBQ0wsa0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQTZCO0FBQUE7O0FBQzVCLE9BQUtDLFNBQUwsR0FBaUJGLFFBQWpCLENBRDRCLENBQ0Q7QUFDM0IsT0FBS0csT0FBTCxHQUFlRixNQUFmLENBRjRCLENBRUw7QUFDdkI7Ozs7aUNBY2E7QUFDYixVQUFPLEtBQUtHLHNCQUFMLENBQTRCLEtBQUtDLE1BQWpDLENBQVA7QUFDQTs7OytCQUVXO0FBQ1gsT0FBSUMsV0FBVyxLQUFLRCxNQUFMLEdBQWMsS0FBS0gsU0FBbEM7QUFDQSxVQUFPLEtBQUtFLHNCQUFMLENBQTRCRSxRQUE1QixDQUFQO0FBQ0E7Ozt5Q0FFc0JDLE8sRUFBUTtBQUM5QixPQUFJQyxNQUFNQyxLQUFLQyxLQUFMLENBQVdILFVBQVUsRUFBckIsQ0FBVjtBQUNBLE9BQUlJLE1BQU1KLFVBQVVDLE1BQU0sRUFBMUI7QUFDQUcsU0FBT0EsTUFBTSxDQUFQLEdBQVksS0FBS0EsR0FBakIsR0FBdUIsTUFBTUEsR0FBbkM7QUFDQSxVQUFPSCxNQUFNLEdBQU4sR0FBWUMsS0FBS0csS0FBTCxDQUFXRCxNQUFNLFFBQWpCLENBQW5CO0FBQ0E7Ozs2QkFFUztBQUNULE9BQUlFLFNBQVMsRUFBYjtBQUNBQSxhQUFVLEtBQUtDLFlBQUwsS0FBc0IsR0FBdEIsR0FBNEIsS0FBS1gsT0FBakMsR0FBMkMsSUFBckQ7QUFDQVUsYUFBVSxLQUFLRSxVQUFMLEtBQW9CLEdBQXBCLEdBQTBCLEtBQUtaLE9BQS9CLEdBQXlDLElBQW5EO0FBQ0EsVUFBT1UsTUFBUDtBQUNBOzs7c0JBakNhO0FBQ2IsVUFBTyxLQUFLWCxTQUFaO0FBQ0E7OztzQkFFWTtBQUNaLFVBQU8sS0FBS0csTUFBTCxHQUFjLEtBQUtILFNBQTFCO0FBQ0E7OztvQkFFU0ssTyxFQUFRO0FBQ2pCLFFBQUtGLE1BQUwsR0FBY0UsT0FBZDtBQUNBOzs7Ozs7QUF5QkZTLE9BQU9DLE9BQVAsR0FBaUJsQixPQUFqQiIsImZpbGUiOiJzZWdtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU0VHTUVOVHtcclxuXHRjb25zdHJ1Y3RvcihkdXJhdGlvbiwgYW1vdW50KXtcclxuXHRcdHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247IC8vdGltZSBpbiBzZWNvbmRzXHJcblx0XHR0aGlzLl9hbW91bnQgPSBhbW91bnQ7IC8vYW1vdW50IG9mIHBlcmNlbnRhZ2UgYWJvdmUgZnRwXHJcblx0fVxyXG5cclxuXHRnZXQgZHVyYXRpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLl9kdXJhdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldCBlbmRUaW1lKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3RhcnQgKyB0aGlzLl9kdXJhdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldCBzdGFydChzZWNvbmRzKXtcclxuXHRcdHRoaXMuX3N0YXJ0ID0gc2Vjb25kcztcclxuXHR9XHJcblxyXG5cdHN0YXJ0X2Zvcm1hdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vjb25kc190b19maWxlX2Zvcm1hdCh0aGlzLl9zdGFydCk7XHJcblx0fVxyXG5cclxuXHRlbmRfZm9ybWF0KCl7XHJcblx0XHRsZXQgZW5kX3RpbWUgPSB0aGlzLl9zdGFydCArIHRoaXMuX2R1cmF0aW9uO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vjb25kc190b19maWxlX2Zvcm1hdChlbmRfdGltZSk7XHJcblx0fVxyXG5cclxuXHRzZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KHNlY29uZHMpe1xyXG5cdFx0bGV0IG1pbiA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuXHRcdGxldCBzZWMgPSBzZWNvbmRzIC0gbWluICogNjA7XHJcblx0XHRzZWMgPSAoc2VjID4gOSkgPyBcIlwiICsgc2VjIDogXCIwXCIgKyBzZWM7XHJcblx0XHRyZXR1cm4gbWluICsgXCIuXCIgKyBNYXRoLnJvdW5kKHNlYyAqIDEuNjY2NjY3KTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLnN0YXJ0X2Zvcm1hdCgpICsgXCIgXCIgKyB0aGlzLl9hbW91bnQgKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuZW5kX2Zvcm1hdCgpICsgXCIgXCIgKyB0aGlzLl9hbW91bnQgKyBcIlxcblwiO1xyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBTRUdNRU5UOyJdfQ==