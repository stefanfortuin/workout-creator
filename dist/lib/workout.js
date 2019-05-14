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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXb3Jrb3V0Iiwib3B0aW9ucyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfdW5pdHMiLCJfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIl9uYW1lIiwibmFtZSIsIl9kYXRhX2NvbHVtbnMiLCJfc2VnbWVudHMiLCJyZWR1Y2UiLCJ0IiwicyIsImR1cmF0aW9uIiwic2VnbWVudCIsInB1c2giLCJzZWdtZW50cyIsImkiLCJsZW5ndGgiLCJhZGRTZWdtZW50IiwicmVtb3ZlIiwiZmluZCIsIm91dHB1dCIsInNlZ21lbnRzVG9TdHJpbmciLCJjdXJyZW50IiwicHJldmlvdXMiLCJzdGFydCIsImVuZFRpbWUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDTCxtQkFBWUMsT0FBWixFQUFvQjtBQUFBOztBQUNuQixRQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBYixFQUFtQjtBQUNsQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQTtBQUNBOztBQUVELFNBQUtDLEtBQUwsR0FBYUosT0FBTyxDQUFDQyxJQUFyQjtBQUNBLFNBQUtJLFFBQUwsR0FBaUJMLE9BQU8sQ0FBQ00sT0FBVCxHQUFvQk4sT0FBTyxDQUFDTSxPQUE1QixHQUFzQyxDQUF0RDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxTQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQlIsT0FBTyxDQUFDUyxXQUE1QjtBQUNBLFNBQUtDLEtBQUwsR0FBYVYsT0FBTyxDQUFDVyxJQUFyQjtBQUVBLFNBQUtDLGFBQUwsR0FBc0IsS0FBS1IsS0FBTCxJQUFjLEtBQWYsR0FDbkIsb0JBRG1CLEdBRW5CLGtCQUZGO0FBSUEsU0FBS1MsU0FBTCxHQUFpQixFQUFqQjtBQUNBOzs7O21DQUVhO0FBQ2IsYUFBTyxLQUFLQSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDdEMsZUFBT0QsQ0FBQyxJQUFJQyxDQUFDLENBQUNDLFFBQWQ7QUFDQSxPQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7OzsrQkFFVUMsTyxFQUFRO0FBQ2xCLFdBQUtMLFNBQUwsQ0FBZU0sSUFBZixDQUFvQkQsT0FBcEI7QUFDQTs7O3dDQUVtQkUsUSxFQUFTO0FBQzVCLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN6QyxhQUFLRSxVQUFMLENBQWdCSCxRQUFRLENBQUNDLENBQUQsQ0FBeEI7QUFDQTtBQUNEOzs7a0NBRWFILE8sRUFBUTtBQUNyQixXQUFLTCxTQUFMLENBQWVXLE1BQWYsQ0FBc0JOLE9BQXRCO0FBQ0E7OztnQ0FFV0EsTyxFQUFRO0FBQ25CLGFBQU8sS0FBS0wsU0FBTCxDQUFlWSxJQUFmLENBQW9CUCxPQUFwQixDQUFQO0FBQ0E7OzsrQkFFUztBQUNULFVBQUlRLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxvQkFBVjtBQUNBQSxNQUFBQSxNQUFNLElBQUksa0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGFBQWEsS0FBS3JCLFFBQWxCLEdBQTZCLElBQXZDO0FBQ0FxQixNQUFBQSxNQUFNLElBQUksaUJBQWlCLEtBQUtsQixZQUF0QixHQUFxQyxJQUEvQztBQUNBa0IsTUFBQUEsTUFBTSxJQUFJLGVBQWUsS0FBS2hCLEtBQXBCLEdBQTRCLElBQXRDO0FBQ0FnQixNQUFBQSxNQUFNLElBQUksS0FBS2QsYUFBZjtBQUNBYyxNQUFBQSxNQUFNLElBQUksd0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGtCQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxLQUFLQyxnQkFBTCxFQUFWO0FBQ0FELE1BQUFBLE1BQU0sSUFBSSxtQkFBVjtBQUNBLGFBQU9BLE1BQVA7QUFDQTs7O3VDQUVpQjtBQUNqQixVQUFJQSxNQUFNLEdBQUcsRUFBYjs7QUFDQSxXQUFLLElBQUlMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1IsU0FBTCxDQUFlUyxNQUFuQyxFQUEyQ0QsQ0FBQyxFQUE1QyxFQUFnRDtBQUMvQyxZQUFNTyxPQUFPLEdBQUcsS0FBS2YsU0FBTCxDQUFlUSxDQUFmLENBQWhCO0FBQ0EsWUFBTVEsUUFBUSxHQUFHLEtBQUtoQixTQUFMLENBQWVRLENBQUMsR0FBQyxDQUFqQixDQUFqQjtBQUNBLFlBQUlTLEtBQUssU0FBVDtBQUVDLFNBQUNELFFBQUQsSUFBYVIsQ0FBQyxJQUFJLENBQW5CLEdBQ0VTLEtBQUssR0FBRyxDQURWLEdBRUVBLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxPQUZuQjtBQUlBSCxRQUFBQSxPQUFPLENBQUNFLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0FKLFFBQUFBLE1BQU0sSUFBSUUsT0FBTyxDQUFDSSxRQUFSLEVBQVY7QUFDQTs7QUFDRCxhQUFPTixNQUFQO0FBQ0E7Ozs7OztlQUVhM0IsTyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdvcmtvdXR7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyl7XHJcblx0XHRpZiAoIW9wdGlvbnMudHlwZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBsZWFzZSBzcGVjaWZpeSBhIHR5cGUsIG1yYy9lcmdcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl90eXBlID0gb3B0aW9ucy50eXBlO1xyXG5cdFx0dGhpcy5fdmVyc2lvbiA9IChvcHRpb25zLnZlcnNpb24pID8gb3B0aW9ucy52ZXJzaW9uIDogMjtcclxuXHRcdHRoaXMuX3VuaXRzID0gXCJFTkdMSVNIXCI7XHJcblx0XHR0aGlzLl9kZXNjcmlwdGlvbiA9IG9wdGlvbnMuZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLl9uYW1lID0gb3B0aW9ucy5uYW1lO1xyXG5cclxuXHRcdHRoaXMuX2RhdGFfY29sdW1ucyA9ICh0aGlzLl90eXBlID09IFwibXJjXCIpIFxyXG5cdFx0PyBcIk1JTlVURVMgUEVSQ0VOVCBcXG5cIiBcclxuXHRcdDogXCJNSU5VVEVTIFdBVFRTIFxcblwiO1xyXG5cclxuXHRcdHRoaXMuX3NlZ21lbnRzID0gW107XHJcblx0fVxyXG5cclxuXHR0b3RhbFNlY29uZHMoKXtcclxuXHRcdHJldHVybiB0aGlzLl9zZWdtZW50cy5yZWR1Y2UoKHQsIHMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHQgKz0gcy5kdXJhdGlvbjtcclxuXHRcdH0sIDApXHJcblx0fVxyXG5cclxuXHRhZGRTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0dGhpcy5fc2VnbWVudHMucHVzaChzZWdtZW50KVxyXG5cdH1cclxuXHJcblx0YWRkTXVsdGlwbGVTZWdtZW50cyhzZWdtZW50cyl7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuYWRkU2VnbWVudChzZWdtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWxldGVTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0dGhpcy5fc2VnbWVudHMucmVtb3ZlKHNlZ21lbnQpO1xyXG5cdH1cclxuXHJcblx0ZmluZFNlZ21lbnQoc2VnbWVudCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHMuZmluZChzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdG91dHB1dCArPSBcIltDT1VSU0UgSEVBREVSXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIlVOSVRTPUVOR0xJU0ggXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJWRVJTSU9OPVwiICsgdGhpcy5fdmVyc2lvbiArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJERVNDUklQVElPTj1cIiArIHRoaXMuX2Rlc2NyaXB0aW9uICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIkZJTEUgTkFNRT1cIiArIHRoaXMuX25hbWUgKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuX2RhdGFfY29sdW1ucztcclxuXHRcdG91dHB1dCArPSBcIltFTkQgQ09VUlNFIEhFQURFUl0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJbQ09VUlNFIERBVEFdIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuc2VnbWVudHNUb1N0cmluZygpO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0VORCBDT1VSU0UgREFUQV1cIlxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcblxyXG5cdHNlZ21lbnRzVG9TdHJpbmcoKXtcclxuXHRcdGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IHByZXZpb3VzID0gdGhpcy5fc2VnbWVudHNbaS0xXTtcclxuXHRcdFx0bGV0IHN0YXJ0O1xyXG5cclxuXHRcdFx0KCFwcmV2aW91cyB8fCBpID09IDApXHJcblx0XHRcdD8gc3RhcnQgPSAwIFxyXG5cdFx0XHQ6IHN0YXJ0ID0gcHJldmlvdXMuZW5kVGltZTtcclxuXHJcblx0XHRcdGN1cnJlbnQuc3RhcnQgPSBzdGFydDtcclxuXHRcdFx0b3V0cHV0ICs9IGN1cnJlbnQudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXQ7Il19