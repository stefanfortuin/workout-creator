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
      var segmentIndex = this._segments.indexOf(segment);

      if (segmentIndex == -1) return;

      this._segments.splice(segmentIndex, 1);
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
  }, {
    key: "totalSeconds",
    get: function get() {
      return this._segments.reduce(function (t, s) {
        return t += s.duration;
      }, 0);
    }
  }, {
    key: "segments",
    get: function get() {
      return this._segments;
    }
  }]);

  return Workout;
}();

var _default = Workout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXb3Jrb3V0Iiwib3B0aW9ucyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfdW5pdHMiLCJfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIl9uYW1lIiwibmFtZSIsIl9kYXRhX2NvbHVtbnMiLCJfc2VnbWVudHMiLCJzZWdtZW50IiwibGFzdFNlZ21lbnQiLCJsZW5ndGgiLCJzdGFydCIsImVuZFRpbWUiLCJwdXNoIiwic2VnbWVudHMiLCJpIiwiYWRkU2VnbWVudCIsInNlZ21lbnRJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmaW5kIiwib3V0cHV0Iiwic2VnbWVudHNUb1N0cmluZyIsImN1cnJlbnQiLCJwcmV2aW91cyIsInRvU3RyaW5nIiwicmVkdWNlIiwidCIsInMiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDTCxtQkFBWUMsT0FBWixFQUFvQjtBQUFBOztBQUNuQixRQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBYixFQUFtQjtBQUNsQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQTtBQUNBOztBQUVELFNBQUtDLEtBQUwsR0FBYUosT0FBTyxDQUFDQyxJQUFyQjtBQUNBLFNBQUtJLFFBQUwsR0FBaUJMLE9BQU8sQ0FBQ00sT0FBVCxHQUFvQk4sT0FBTyxDQUFDTSxPQUE1QixHQUFzQyxDQUF0RDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxTQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQlIsT0FBTyxDQUFDUyxXQUE1QjtBQUNBLFNBQUtDLEtBQUwsR0FBYVYsT0FBTyxDQUFDVyxJQUFyQjtBQUVBLFNBQUtDLGFBQUwsR0FBc0IsS0FBS1IsS0FBTCxJQUFjLEtBQWYsR0FDbkIsb0JBRG1CLEdBRW5CLGtCQUZGO0FBSUEsU0FBS1MsU0FBTCxHQUFpQixFQUFqQjtBQUNBOzs7OytCQVlVQyxPLEVBQVE7QUFDbEIsVUFBSUMsV0FBVyxHQUFHLEtBQUtGLFNBQUwsQ0FBZSxLQUFLQSxTQUFMLENBQWVHLE1BQWYsR0FBd0IsQ0FBdkMsQ0FBbEI7QUFFQSxVQUFJQyxLQUFKO0FBQ0MsT0FBQ0YsV0FBRixHQUFnQkUsS0FBSyxHQUFHLENBQXhCLEdBQTRCQSxLQUFLLEdBQUdGLFdBQVcsQ0FBQ0csT0FBaEQ7QUFDQUosTUFBQUEsT0FBTyxDQUFDRyxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxXQUFLSixTQUFMLENBQWVNLElBQWYsQ0FBb0JMLE9BQXBCO0FBQ0E7Ozt3Q0FFbUJNLFEsRUFBUztBQUM1QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0osTUFBN0IsRUFBcUNLLENBQUMsRUFBdEMsRUFBMEM7QUFDekMsYUFBS0MsVUFBTCxDQUFnQkYsUUFBUSxDQUFDQyxDQUFELENBQXhCO0FBQ0E7QUFDRDs7O2tDQUVhUCxPLEVBQVE7QUFDckIsVUFBSVMsWUFBWSxHQUFHLEtBQUtWLFNBQUwsQ0FBZVcsT0FBZixDQUF1QlYsT0FBdkIsQ0FBbkI7O0FBQ0EsVUFBSVMsWUFBWSxJQUFJLENBQUMsQ0FBckIsRUFBd0I7O0FBRXhCLFdBQUtWLFNBQUwsQ0FBZVksTUFBZixDQUFzQkYsWUFBdEIsRUFBb0MsQ0FBcEM7QUFDQTs7O2dDQUVXVCxPLEVBQVE7QUFDbkIsYUFBTyxLQUFLRCxTQUFMLENBQWVhLElBQWYsQ0FBb0JaLE9BQXBCLENBQVA7QUFDQTs7OytCQUVTO0FBQ1QsVUFBSWEsTUFBTSxHQUFHLEVBQWI7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLG9CQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxrQkFBVjtBQUNBQSxNQUFBQSxNQUFNLElBQUksYUFBYSxLQUFLdEIsUUFBbEIsR0FBNkIsSUFBdkM7QUFDQXNCLE1BQUFBLE1BQU0sSUFBSSxpQkFBaUIsS0FBS25CLFlBQXRCLEdBQXFDLElBQS9DO0FBQ0FtQixNQUFBQSxNQUFNLElBQUksZUFBZSxLQUFLakIsS0FBcEIsR0FBNEIsSUFBdEM7QUFDQWlCLE1BQUFBLE1BQU0sSUFBSSxLQUFLZixhQUFmO0FBQ0FlLE1BQUFBLE1BQU0sSUFBSSx3QkFBVjtBQUNBQSxNQUFBQSxNQUFNLElBQUksa0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLEtBQUtDLGdCQUFMLEVBQVY7QUFDQUQsTUFBQUEsTUFBTSxJQUFJLG1CQUFWO0FBQ0EsYUFBT0EsTUFBUDtBQUNBOzs7dUNBRWlCO0FBQ2pCLFVBQUlBLE1BQU0sR0FBRyxFQUFiOztBQUNBLFdBQUssSUFBSU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUixTQUFMLENBQWVHLE1BQW5DLEVBQTJDSyxDQUFDLEVBQTVDLEVBQWdEO0FBQy9DLFlBQU1RLE9BQU8sR0FBRyxLQUFLaEIsU0FBTCxDQUFlUSxDQUFmLENBQWhCO0FBQ0EsWUFBTVMsUUFBUSxHQUFHLEtBQUtqQixTQUFMLENBQWVRLENBQUMsR0FBQyxDQUFqQixDQUFqQjtBQUNBLFlBQUlKLEtBQUssU0FBVDtBQUVDLFNBQUNhLFFBQUQsSUFBYVQsQ0FBQyxJQUFJLENBQW5CLEdBQ0VKLEtBQUssR0FBRyxDQURWLEdBRUVBLEtBQUssR0FBR2EsUUFBUSxDQUFDWixPQUZuQjtBQUlBVyxRQUFBQSxPQUFPLENBQUNaLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0FVLFFBQUFBLE1BQU0sSUFBSUUsT0FBTyxDQUFDRSxRQUFSLEVBQVY7QUFDQTs7QUFDRCxhQUFPSixNQUFQO0FBQ0E7Ozt3QkFuRWlCO0FBQ2pCLGFBQU8sS0FBS2QsU0FBTCxDQUFlbUIsTUFBZixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN0QyxlQUFPRCxDQUFDLElBQUlDLENBQUMsQ0FBQ0MsUUFBZDtBQUNBLE9BRk0sRUFFSixDQUZJLENBQVA7QUFHQTs7O3dCQUVhO0FBQ2IsYUFBTyxLQUFLdEIsU0FBWjtBQUNBOzs7Ozs7ZUE2RGFkLE8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXb3Jrb3V0e1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cdFx0aWYgKCFvcHRpb25zLnR5cGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQbGVhc2Ugc3BlY2lmaXkgYSB0eXBlLCBtcmMvZXJnXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fdHlwZSA9IG9wdGlvbnMudHlwZTtcclxuXHRcdHRoaXMuX3ZlcnNpb24gPSAob3B0aW9ucy52ZXJzaW9uKSA/IG9wdGlvbnMudmVyc2lvbiA6IDI7XHJcblx0XHR0aGlzLl91bml0cyA9IFwiRU5HTElTSFwiO1xyXG5cdFx0dGhpcy5fZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5fbmFtZSA9IG9wdGlvbnMubmFtZTtcclxuXHJcblx0XHR0aGlzLl9kYXRhX2NvbHVtbnMgPSAodGhpcy5fdHlwZSA9PSBcIm1yY1wiKSBcclxuXHRcdD8gXCJNSU5VVEVTIFBFUkNFTlQgXFxuXCIgXHJcblx0XHQ6IFwiTUlOVVRFUyBXQVRUUyBcXG5cIjtcclxuXHJcblx0XHR0aGlzLl9zZWdtZW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0IHRvdGFsU2Vjb25kcygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlZ21lbnRzLnJlZHVjZSgodCwgcykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdCArPSBzLmR1cmF0aW9uO1xyXG5cdFx0fSwgMClcclxuXHR9XHJcblxyXG5cdGdldCBzZWdtZW50cygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlZ21lbnRzO1xyXG5cdH1cclxuXHJcblx0YWRkU2VnbWVudChzZWdtZW50KXtcclxuXHRcdGxldCBsYXN0U2VnbWVudCA9IHRoaXMuX3NlZ21lbnRzW3RoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuXHRcdGxldCBzdGFydDtcclxuXHRcdCghbGFzdFNlZ21lbnQpPyBzdGFydCA9IDAgOiBzdGFydCA9IGxhc3RTZWdtZW50LmVuZFRpbWU7XHJcblx0XHRzZWdtZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblxyXG5cdFx0dGhpcy5fc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdGFkZE11bHRpcGxlU2VnbWVudHMoc2VnbWVudHMpe1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFkZFNlZ21lbnQoc2VnbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2VnbWVudChzZWdtZW50KXtcclxuXHRcdGxldCBzZWdtZW50SW5kZXggPSB0aGlzLl9zZWdtZW50cy5pbmRleE9mKHNlZ21lbnQpO1xyXG5cdFx0aWYgKHNlZ21lbnRJbmRleCA9PSAtMSkgcmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuX3NlZ21lbnRzLnNwbGljZShzZWdtZW50SW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0ZmluZFNlZ21lbnQoc2VnbWVudCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHMuZmluZChzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdG91dHB1dCArPSBcIltDT1VSU0UgSEVBREVSXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIlVOSVRTPUVOR0xJU0ggXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJWRVJTSU9OPVwiICsgdGhpcy5fdmVyc2lvbiArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJERVNDUklQVElPTj1cIiArIHRoaXMuX2Rlc2NyaXB0aW9uICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIkZJTEUgTkFNRT1cIiArIHRoaXMuX25hbWUgKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuX2RhdGFfY29sdW1ucztcclxuXHRcdG91dHB1dCArPSBcIltFTkQgQ09VUlNFIEhFQURFUl0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJbQ09VUlNFIERBVEFdIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuc2VnbWVudHNUb1N0cmluZygpO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0VORCBDT1VSU0UgREFUQV1cIlxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcblxyXG5cdHNlZ21lbnRzVG9TdHJpbmcoKXtcclxuXHRcdGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IHByZXZpb3VzID0gdGhpcy5fc2VnbWVudHNbaS0xXTtcclxuXHRcdFx0bGV0IHN0YXJ0O1xyXG5cclxuXHRcdFx0KCFwcmV2aW91cyB8fCBpID09IDApXHJcblx0XHRcdD8gc3RhcnQgPSAwIFxyXG5cdFx0XHQ6IHN0YXJ0ID0gcHJldmlvdXMuZW5kVGltZTtcclxuXHJcblx0XHRcdGN1cnJlbnQuc3RhcnQgPSBzdGFydDtcclxuXHRcdFx0b3V0cHV0ICs9IGN1cnJlbnQudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXQ7Il19