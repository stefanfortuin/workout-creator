"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Workout =
/*#__PURE__*/
function () {
  function Workout(options) {
    _classCallCheck(this, Workout);

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

  _createClass(Workout, [{
    key: "totalSeconds",
    value: function totalSeconds() {
      return this._segments.reduce(function (t, s) {
        return t += s.duration;
      }, 0);
    }
  }, {
    key: "addSegment",
    value: function addSegment(segment) {
      var lastSegment = this._segments[this._segments.length - 1];
      var start;
      !lastSegment ? start = 0 : start = lastSegment.endTime;
      segment.start = start;

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

  return Workout;
}();

var _default = Workout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXb3Jrb3V0Iiwib3B0aW9ucyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfdW5pdHMiLCJfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIl9uYW1lIiwibmFtZSIsIl9kYXRhX2NvbHVtbnMiLCJfc2VnbWVudHMiLCJyZWR1Y2UiLCJ0IiwicyIsImR1cmF0aW9uIiwic2VnbWVudCIsImxhc3RTZWdtZW50IiwibGVuZ3RoIiwic3RhcnQiLCJlbmRUaW1lIiwicHVzaCIsInNlZ21lbnRzIiwiaSIsImFkZFNlZ21lbnQiLCJyZW1vdmUiLCJmaW5kIiwib3V0cHV0Iiwic2VnbWVudHNUb1N0cmluZyIsImN1cnJlbnQiLCJwcmV2aW91cyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQU1BLE87OztBQUNMLG1CQUFZQyxPQUFaLEVBQW9CO0FBQUE7O0FBQ25CLFFBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFiLEVBQW1CO0FBQ2xCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBO0FBQ0E7O0FBRUQsU0FBS0MsS0FBTCxHQUFhSixPQUFPLENBQUNDLElBQXJCO0FBQ0EsU0FBS0ksUUFBTCxHQUFpQkwsT0FBTyxDQUFDTSxPQUFULEdBQW9CTixPQUFPLENBQUNNLE9BQTVCLEdBQXNDLENBQXREO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLFNBQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CUixPQUFPLENBQUNTLFdBQTVCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhVixPQUFPLENBQUNXLElBQXJCO0FBRUEsU0FBS0MsYUFBTCxHQUFzQixLQUFLUixLQUFMLElBQWMsS0FBZixHQUNuQixvQkFEbUIsR0FFbkIsa0JBRkY7QUFJQSxTQUFLUyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0E7Ozs7bUNBRWE7QUFDYixhQUFPLEtBQUtBLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN0QyxlQUFPRCxDQUFDLElBQUlDLENBQUMsQ0FBQ0MsUUFBZDtBQUNBLE9BRk0sRUFFSixDQUZJLENBQVA7QUFHQTs7OytCQUVVQyxPLEVBQVE7QUFDbEIsVUFBSUMsV0FBVyxHQUFHLEtBQUtOLFNBQUwsQ0FBZSxLQUFLQSxTQUFMLENBQWVPLE1BQWYsR0FBd0IsQ0FBdkMsQ0FBbEI7QUFFQSxVQUFJQyxLQUFKO0FBQ0MsT0FBQ0YsV0FBRixHQUFnQkUsS0FBSyxHQUFHLENBQXhCLEdBQTRCQSxLQUFLLEdBQUdGLFdBQVcsQ0FBQ0csT0FBaEQ7QUFDQUosTUFBQUEsT0FBTyxDQUFDRyxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxXQUFLUixTQUFMLENBQWVVLElBQWYsQ0FBb0JMLE9BQXBCO0FBQ0E7Ozt3Q0FFbUJNLFEsRUFBUztBQUM1QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0osTUFBN0IsRUFBcUNLLENBQUMsRUFBdEMsRUFBMEM7QUFDekMsYUFBS0MsVUFBTCxDQUFnQkYsUUFBUSxDQUFDQyxDQUFELENBQXhCO0FBQ0E7QUFDRDs7O2tDQUVhUCxPLEVBQVE7QUFDckIsV0FBS0wsU0FBTCxDQUFlYyxNQUFmLENBQXNCVCxPQUF0QjtBQUNBOzs7Z0NBRVdBLE8sRUFBUTtBQUNuQixhQUFPLEtBQUtMLFNBQUwsQ0FBZWUsSUFBZixDQUFvQlYsT0FBcEIsQ0FBUDtBQUNBOzs7K0JBRVM7QUFDVCxVQUFJVyxNQUFNLEdBQUcsRUFBYjtBQUNBQSxNQUFBQSxNQUFNLElBQUksb0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGtCQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxhQUFhLEtBQUt4QixRQUFsQixHQUE2QixJQUF2QztBQUNBd0IsTUFBQUEsTUFBTSxJQUFJLGlCQUFpQixLQUFLckIsWUFBdEIsR0FBcUMsSUFBL0M7QUFDQXFCLE1BQUFBLE1BQU0sSUFBSSxlQUFlLEtBQUtuQixLQUFwQixHQUE0QixJQUF0QztBQUNBbUIsTUFBQUEsTUFBTSxJQUFJLEtBQUtqQixhQUFmO0FBQ0FpQixNQUFBQSxNQUFNLElBQUksd0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGtCQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxLQUFLQyxnQkFBTCxFQUFWO0FBQ0FELE1BQUFBLE1BQU0sSUFBSSxtQkFBVjtBQUNBLGFBQU9BLE1BQVA7QUFDQTs7O3VDQUVpQjtBQUNqQixVQUFJQSxNQUFNLEdBQUcsRUFBYjs7QUFDQSxXQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1osU0FBTCxDQUFlTyxNQUFuQyxFQUEyQ0ssQ0FBQyxFQUE1QyxFQUFnRDtBQUMvQyxZQUFNTSxPQUFPLEdBQUcsS0FBS2xCLFNBQUwsQ0FBZVksQ0FBZixDQUFoQjtBQUNBLFlBQU1PLFFBQVEsR0FBRyxLQUFLbkIsU0FBTCxDQUFlWSxDQUFDLEdBQUMsQ0FBakIsQ0FBakI7QUFDQSxZQUFJSixLQUFLLFNBQVQ7QUFFQyxTQUFDVyxRQUFELElBQWFQLENBQUMsSUFBSSxDQUFuQixHQUNFSixLQUFLLEdBQUcsQ0FEVixHQUVFQSxLQUFLLEdBQUdXLFFBQVEsQ0FBQ1YsT0FGbkI7QUFJQVMsUUFBQUEsT0FBTyxDQUFDVixLQUFSLEdBQWdCQSxLQUFoQjtBQUNBUSxRQUFBQSxNQUFNLElBQUlFLE9BQU8sQ0FBQ0UsUUFBUixFQUFWO0FBQ0E7O0FBQ0QsYUFBT0osTUFBUDtBQUNBOzs7Ozs7ZUFFYTlCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXb3Jrb3V0e1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cdFx0aWYgKCFvcHRpb25zLnR5cGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQbGVhc2Ugc3BlY2lmaXkgYSB0eXBlLCBtcmMvZXJnXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fdHlwZSA9IG9wdGlvbnMudHlwZTtcclxuXHRcdHRoaXMuX3ZlcnNpb24gPSAob3B0aW9ucy52ZXJzaW9uKSA/IG9wdGlvbnMudmVyc2lvbiA6IDI7XHJcblx0XHR0aGlzLl91bml0cyA9IFwiRU5HTElTSFwiO1xyXG5cdFx0dGhpcy5fZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5fbmFtZSA9IG9wdGlvbnMubmFtZTtcclxuXHJcblx0XHR0aGlzLl9kYXRhX2NvbHVtbnMgPSAodGhpcy5fdHlwZSA9PSBcIm1yY1wiKSBcclxuXHRcdD8gXCJNSU5VVEVTIFBFUkNFTlQgXFxuXCIgXHJcblx0XHQ6IFwiTUlOVVRFUyBXQVRUUyBcXG5cIjtcclxuXHJcblx0XHR0aGlzLl9zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0dG90YWxTZWNvbmRzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHMucmVkdWNlKCh0LCBzKSA9PiB7XHJcblx0XHRcdHJldHVybiB0ICs9IHMuZHVyYXRpb247XHJcblx0XHR9LCAwKVxyXG5cdH1cclxuXHJcblx0YWRkU2VnbWVudChzZWdtZW50KXtcclxuXHRcdGxldCBsYXN0U2VnbWVudCA9IHRoaXMuX3NlZ21lbnRzW3RoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuXHRcdGxldCBzdGFydDtcclxuXHRcdCghbGFzdFNlZ21lbnQpPyBzdGFydCA9IDAgOiBzdGFydCA9IGxhc3RTZWdtZW50LmVuZFRpbWU7XHJcblx0XHRzZWdtZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblxyXG5cdFx0dGhpcy5fc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdGFkZE11bHRpcGxlU2VnbWVudHMoc2VnbWVudHMpe1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFkZFNlZ21lbnQoc2VnbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2VnbWVudChzZWdtZW50KXtcclxuXHRcdHRoaXMuX3NlZ21lbnRzLnJlbW92ZShzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdGZpbmRTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlZ21lbnRzLmZpbmQoc2VnbWVudCk7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpe1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJbQ09VUlNFIEhFQURFUl0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJVTklUUz1FTkdMSVNIIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiVkVSU0lPTj1cIiArIHRoaXMuX3ZlcnNpb24gKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiREVTQ1JJUFRJT049XCIgKyB0aGlzLl9kZXNjcmlwdGlvbiArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJGSUxFIE5BTUU9XCIgKyB0aGlzLl9uYW1lICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLl9kYXRhX2NvbHVtbnM7XHJcblx0XHRvdXRwdXQgKz0gXCJbRU5EIENPVVJTRSBIRUFERVJdIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0NPVVJTRSBEQVRBXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLnNlZ21lbnRzVG9TdHJpbmcoKTtcclxuXHRcdG91dHB1dCArPSBcIltFTkQgQ09VUlNFIERBVEFdXCJcclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG5cclxuXHRzZWdtZW50c1RvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IHRoaXMuX3NlZ21lbnRzW2ktMV07XHJcblx0XHRcdGxldCBzdGFydDtcclxuXHJcblx0XHRcdCghcHJldmlvdXMgfHwgaSA9PSAwKVxyXG5cdFx0XHQ/IHN0YXJ0ID0gMCBcclxuXHRcdFx0OiBzdGFydCA9IHByZXZpb3VzLmVuZFRpbWU7XHJcblxyXG5cdFx0XHRjdXJyZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblx0XHRcdG91dHB1dCArPSBjdXJyZW50LnRvU3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0OyJdfQ==