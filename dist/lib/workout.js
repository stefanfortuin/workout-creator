"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WORKOUT = function () {
	function WORKOUT(options) {
		_classCallCheck(this, WORKOUT);

		if (!options.type) {
			console.log("Please specifiy a type, mrc/erg");
			return;
		}

		this._type = options.type;
		this._version = options.version ? options.version : 2;
		this._units = "ENGLISH";
		this._description = options.description;
		this._name = options.name;

		this._data_columns = this._type == "mrc" ? "MINUTES PERCENT \n" : "MINUTES WATTS \n";

		this._segments = [];
	}

	_createClass(WORKOUT, [{
		key: "totalSeconds",
		value: function totalSeconds() {
			return this._segments.reduce(function (t, s) {
				return t += s.duration;
			}, 0);
		}
	}, {
		key: "addSegment",
		value: function addSegment(segment) {
			this._segments.push(segment);
		}
	}, {
		key: "addMultipleSegments",
		value: function addMultipleSegments(segments) {
			for (var i = 0; i < segments.length; i++) {
				this.addSegment(segments[i]);
			}
		}
	}, {
		key: "deleteSegment",
		value: function deleteSegment(segment) {
			this._segments.remove(segment);
		}
	}, {
		key: "findSegment",
		value: function findSegment(segment) {
			return this._segments.find(segment);
		}
	}, {
		key: "toString",
		value: function toString() {
			var output = "";
			output += "[COURSE HEADER] \n";
			output += "UNITS=ENGLISH \n";
			output += "VERSION=" + this._version + "\n";
			output += "DESCRIPTION=" + this._description + "\n";
			output += "FILE NAME=" + this._name + "\n";
			output += this._data_columns;
			output += "[END COURSE HEADER] \n";
			output += "[COURSE DATA] \n";
			output += this.segmentsToString();
			output += "[END COURSE DATA]";
			return output;
		}
	}, {
		key: "segmentsToString",
		value: function segmentsToString() {
			var output = "";
			for (var i = 0; i < this._segments.length; i++) {
				var current = this._segments[i];
				var previous = this._segments[i - 1];
				var start = void 0;

				!previous || i == 0 ? start = 0 : start = previous.endTime;

				current.start = start;
				output += current.toString();
			}
			return output;
		}
	}]);

	return WORKOUT;
}();

module.exports = WORKOUT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXT1JLT1VUIiwib3B0aW9ucyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfdW5pdHMiLCJfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIl9uYW1lIiwibmFtZSIsIl9kYXRhX2NvbHVtbnMiLCJfc2VnbWVudHMiLCJyZWR1Y2UiLCJ0IiwicyIsImR1cmF0aW9uIiwic2VnbWVudCIsInB1c2giLCJzZWdtZW50cyIsImkiLCJsZW5ndGgiLCJhZGRTZWdtZW50IiwicmVtb3ZlIiwiZmluZCIsIm91dHB1dCIsInNlZ21lbnRzVG9TdHJpbmciLCJjdXJyZW50IiwicHJldmlvdXMiLCJzdGFydCIsImVuZFRpbWUiLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxPO0FBQ0wsa0JBQVlDLE9BQVosRUFBb0I7QUFBQTs7QUFDbkIsTUFBSSxDQUFDQSxRQUFRQyxJQUFiLEVBQW1CO0FBQ2xCQyxXQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQTtBQUNBOztBQUVELE9BQUtDLEtBQUwsR0FBYUosUUFBUUMsSUFBckI7QUFDQSxPQUFLSSxRQUFMLEdBQWlCTCxRQUFRTSxPQUFULEdBQW9CTixRQUFRTSxPQUE1QixHQUFzQyxDQUF0RDtBQUNBLE9BQUtDLE1BQUwsR0FBYyxTQUFkO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQlIsUUFBUVMsV0FBNUI7QUFDQSxPQUFLQyxLQUFMLEdBQWFWLFFBQVFXLElBQXJCOztBQUVBLE9BQUtDLGFBQUwsR0FBc0IsS0FBS1IsS0FBTCxJQUFjLEtBQWYsR0FDbkIsb0JBRG1CLEdBRW5CLGtCQUZGOztBQUlBLE9BQUtTLFNBQUwsR0FBaUIsRUFBakI7QUFDQTs7OztpQ0FFYTtBQUNiLFVBQU8sS0FBS0EsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3RDLFdBQU9ELEtBQUtDLEVBQUVDLFFBQWQ7QUFDQSxJQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7Ozs2QkFFVUMsTyxFQUFRO0FBQ2xCLFFBQUtMLFNBQUwsQ0FBZU0sSUFBZixDQUFvQkQsT0FBcEI7QUFDQTs7O3NDQUVtQkUsUSxFQUFTO0FBQzVCLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxTQUFTRSxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDekMsU0FBS0UsVUFBTCxDQUFnQkgsU0FBU0MsQ0FBVCxDQUFoQjtBQUNBO0FBQ0Q7OztnQ0FFYUgsTyxFQUFRO0FBQ3JCLFFBQUtMLFNBQUwsQ0FBZVcsTUFBZixDQUFzQk4sT0FBdEI7QUFDQTs7OzhCQUVXQSxPLEVBQVE7QUFDbkIsVUFBTyxLQUFLTCxTQUFMLENBQWVZLElBQWYsQ0FBb0JQLE9BQXBCLENBQVA7QUFDQTs7OzZCQUVTO0FBQ1QsT0FBSVEsU0FBUyxFQUFiO0FBQ0FBLGFBQVUsb0JBQVY7QUFDQUEsYUFBVSxrQkFBVjtBQUNBQSxhQUFVLGFBQWEsS0FBS3JCLFFBQWxCLEdBQTZCLElBQXZDO0FBQ0FxQixhQUFVLGlCQUFpQixLQUFLbEIsWUFBdEIsR0FBcUMsSUFBL0M7QUFDQWtCLGFBQVUsZUFBZSxLQUFLaEIsS0FBcEIsR0FBNEIsSUFBdEM7QUFDQWdCLGFBQVUsS0FBS2QsYUFBZjtBQUNBYyxhQUFVLHdCQUFWO0FBQ0FBLGFBQVUsa0JBQVY7QUFDQUEsYUFBVSxLQUFLQyxnQkFBTCxFQUFWO0FBQ0FELGFBQVUsbUJBQVY7QUFDQSxVQUFPQSxNQUFQO0FBQ0E7OztxQ0FFaUI7QUFDakIsT0FBSUEsU0FBUyxFQUFiO0FBQ0EsUUFBSyxJQUFJTCxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1IsU0FBTCxDQUFlUyxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDL0MsUUFBTU8sVUFBVSxLQUFLZixTQUFMLENBQWVRLENBQWYsQ0FBaEI7QUFDQSxRQUFNUSxXQUFXLEtBQUtoQixTQUFMLENBQWVRLElBQUUsQ0FBakIsQ0FBakI7QUFDQSxRQUFJUyxjQUFKOztBQUVDLEtBQUNELFFBQUQsSUFBYVIsS0FBSyxDQUFuQixHQUNFUyxRQUFRLENBRFYsR0FFRUEsUUFBUUQsU0FBU0UsT0FGbkI7O0FBSUFILFlBQVFFLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0FKLGNBQVVFLFFBQVFJLFFBQVIsRUFBVjtBQUNBO0FBQ0QsVUFBT04sTUFBUDtBQUNBOzs7Ozs7QUFFRk8sT0FBT0MsT0FBUCxHQUFpQm5DLE9BQWpCIiwiZmlsZSI6IndvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXT1JLT1VUe1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cdFx0aWYgKCFvcHRpb25zLnR5cGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQbGVhc2Ugc3BlY2lmaXkgYSB0eXBlLCBtcmMvZXJnXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fdHlwZSA9IG9wdGlvbnMudHlwZTtcclxuXHRcdHRoaXMuX3ZlcnNpb24gPSAob3B0aW9ucy52ZXJzaW9uKSA/IG9wdGlvbnMudmVyc2lvbiA6IDI7XHJcblx0XHR0aGlzLl91bml0cyA9IFwiRU5HTElTSFwiO1xyXG5cdFx0dGhpcy5fZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5fbmFtZSA9IG9wdGlvbnMubmFtZTtcclxuXHJcblx0XHR0aGlzLl9kYXRhX2NvbHVtbnMgPSAodGhpcy5fdHlwZSA9PSBcIm1yY1wiKSBcclxuXHRcdD8gXCJNSU5VVEVTIFBFUkNFTlQgXFxuXCIgXHJcblx0XHQ6IFwiTUlOVVRFUyBXQVRUUyBcXG5cIjtcclxuXHJcblx0XHR0aGlzLl9zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0dG90YWxTZWNvbmRzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHMucmVkdWNlKCh0LCBzKSA9PiB7XHJcblx0XHRcdHJldHVybiB0ICs9IHMuZHVyYXRpb247XHJcblx0XHR9LCAwKVxyXG5cdH1cclxuXHJcblx0YWRkU2VnbWVudChzZWdtZW50KXtcclxuXHRcdHRoaXMuX3NlZ21lbnRzLnB1c2goc2VnbWVudClcclxuXHR9XHJcblxyXG5cdGFkZE11bHRpcGxlU2VnbWVudHMoc2VnbWVudHMpe1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFkZFNlZ21lbnQoc2VnbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2VnbWVudChzZWdtZW50KXtcclxuXHRcdHRoaXMuX3NlZ21lbnRzLnJlbW92ZShzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdGZpbmRTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlZ21lbnRzLmZpbmQoc2VnbWVudCk7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpe1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJbQ09VUlNFIEhFQURFUl0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJVTklUUz1FTkdMSVNIIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiVkVSU0lPTj1cIiArIHRoaXMuX3ZlcnNpb24gKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiREVTQ1JJUFRJT049XCIgKyB0aGlzLl9kZXNjcmlwdGlvbiArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJGSUxFIE5BTUU9XCIgKyB0aGlzLl9uYW1lICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLl9kYXRhX2NvbHVtbnM7XHJcblx0XHRvdXRwdXQgKz0gXCJbRU5EIENPVVJTRSBIRUFERVJdIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0NPVVJTRSBEQVRBXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLnNlZ21lbnRzVG9TdHJpbmcoKTtcclxuXHRcdG91dHB1dCArPSBcIltFTkQgQ09VUlNFIERBVEFdXCJcclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG5cclxuXHRzZWdtZW50c1RvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IHRoaXMuX3NlZ21lbnRzW2ktMV07XHJcblx0XHRcdGxldCBzdGFydDtcclxuXHJcblx0XHRcdCghcHJldmlvdXMgfHwgaSA9PSAwKVxyXG5cdFx0XHQ/IHN0YXJ0ID0gMCBcclxuXHRcdFx0OiBzdGFydCA9IHByZXZpb3VzLmVuZFRpbWU7XHJcblxyXG5cdFx0XHRjdXJyZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblx0XHRcdG91dHB1dCArPSBjdXJyZW50LnRvU3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFdPUktPVVQ7Il19