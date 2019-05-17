"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Segment =
/*#__PURE__*/
function () {
  function Segment(duration, start_effort, end_effort) {
    _classCallCheck(this, Segment);

    this._duration = duration; //time in seconds

    this._startEffort = start_effort; //amount of percentage above ftp

    this._endEffort = !end_effort ? start_effort : end_effort;
  }

  _createClass(Segment, [{
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
      output += this.start_format() + " " + this._startEffort + "\n";
      output += this.end_format() + " " + this._endEffort + "\n";
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
    key: "effortDifference",
    get: function get() {
      return this._endEffort - this._startEffort;
    }
  }, {
    key: "startEffort",
    get: function get() {
      return this._startEffort;
    }
  }, {
    key: "endEffort",
    get: function get() {
      return this._endEffort;
    }
  }, {
    key: "start",
    set: function set(seconds) {
      this._start = seconds;
    }
  }]);

  return Segment;
}();

var _default = Segment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2VnbWVudC5qcyJdLCJuYW1lcyI6WyJTZWdtZW50IiwiZHVyYXRpb24iLCJzdGFydF9lZmZvcnQiLCJlbmRfZWZmb3J0IiwiX2R1cmF0aW9uIiwiX3N0YXJ0RWZmb3J0IiwiX2VuZEVmZm9ydCIsInNlY29uZHNfdG9fZmlsZV9mb3JtYXQiLCJfc3RhcnQiLCJlbmRfdGltZSIsInNlY29uZHMiLCJtaW4iLCJNYXRoIiwiZmxvb3IiLCJzZWMiLCJyb3VuZCIsIm91dHB1dCIsInN0YXJ0X2Zvcm1hdCIsImVuZF9mb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0wsbUJBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DQyxVQUFwQyxFQUErQztBQUFBOztBQUM5QyxTQUFLQyxTQUFMLEdBQWlCSCxRQUFqQixDQUQ4QyxDQUNuQjs7QUFDM0IsU0FBS0ksWUFBTCxHQUFvQkgsWUFBcEIsQ0FGOEMsQ0FFWjs7QUFDbEMsU0FBS0ksVUFBTCxHQUFtQixDQUFDSCxVQUFGLEdBQWdCRCxZQUFoQixHQUErQkMsVUFBakQ7QUFDQTs7OzttQ0EwQmE7QUFDYixhQUFPLEtBQUtJLHNCQUFMLENBQTRCLEtBQUtDLE1BQWpDLENBQVA7QUFDQTs7O2lDQUVXO0FBQ1gsVUFBSUMsUUFBUSxHQUFHLEtBQUtELE1BQUwsR0FBYyxLQUFLSixTQUFsQztBQUNBLGFBQU8sS0FBS0csc0JBQUwsQ0FBNEJFLFFBQTVCLENBQVA7QUFDQTs7OzJDQUVzQkMsTyxFQUFRO0FBQzlCLFVBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sR0FBRyxFQUFyQixDQUFWO0FBQ0EsVUFBSUksR0FBRyxHQUFHSixPQUFPLEdBQUdDLEdBQUcsR0FBRyxFQUExQjtBQUNBRyxNQUFBQSxHQUFHLEdBQUlBLEdBQUcsR0FBRyxDQUFQLEdBQVksS0FBS0EsR0FBakIsR0FBdUIsTUFBTUEsR0FBbkM7QUFDQSxhQUFPSCxHQUFHLEdBQUcsR0FBTixHQUFZQyxJQUFJLENBQUNHLEtBQUwsQ0FBV0QsR0FBRyxHQUFHLFFBQWpCLENBQW5CO0FBQ0E7OzsrQkFFUztBQUNULFVBQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxLQUFLQyxZQUFMLEtBQXNCLEdBQXRCLEdBQTRCLEtBQUtaLFlBQWpDLEdBQWdELElBQTFEO0FBQ0FXLE1BQUFBLE1BQU0sSUFBSSxLQUFLRSxVQUFMLEtBQW9CLEdBQXBCLEdBQTBCLEtBQUtaLFVBQS9CLEdBQTRDLElBQXREO0FBQ0EsYUFBT1UsTUFBUDtBQUNBOzs7d0JBN0NhO0FBQ2IsYUFBTyxLQUFLWixTQUFaO0FBQ0E7Ozt3QkFFWTtBQUNaLGFBQU8sS0FBS0ksTUFBTCxHQUFjLEtBQUtKLFNBQTFCO0FBQ0E7Ozt3QkFFcUI7QUFDckIsYUFBTyxLQUFLRSxVQUFMLEdBQWtCLEtBQUtELFlBQTlCO0FBQ0E7Ozt3QkFFZ0I7QUFDaEIsYUFBTyxLQUFLQSxZQUFaO0FBQ0E7Ozt3QkFFYztBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNBOzs7c0JBRVNJLE8sRUFBUTtBQUNqQixXQUFLRixNQUFMLEdBQWNFLE9BQWQ7QUFDQTs7Ozs7O2VBeUJhVixPIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VnbWVudHtcclxuXHRjb25zdHJ1Y3RvcihkdXJhdGlvbiwgc3RhcnRfZWZmb3J0LCBlbmRfZWZmb3J0KXtcclxuXHRcdHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247IC8vdGltZSBpbiBzZWNvbmRzXHJcblx0XHR0aGlzLl9zdGFydEVmZm9ydCA9IHN0YXJ0X2VmZm9ydDsgLy9hbW91bnQgb2YgcGVyY2VudGFnZSBhYm92ZSBmdHBcclxuXHRcdHRoaXMuX2VuZEVmZm9ydCA9ICghZW5kX2VmZm9ydCkgPyBzdGFydF9lZmZvcnQgOiBlbmRfZWZmb3J0O1xyXG5cdH1cclxuXHJcblx0Z2V0IGR1cmF0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fZHVyYXRpb247XHJcblx0fVxyXG5cclxuXHRnZXQgZW5kVGltZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3N0YXJ0ICsgdGhpcy5fZHVyYXRpb247XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmb3J0RGlmZmVyZW5jZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX2VuZEVmZm9ydCAtIHRoaXMuX3N0YXJ0RWZmb3J0O1xyXG5cdH1cclxuXHJcblx0Z2V0IHN0YXJ0RWZmb3J0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3RhcnRFZmZvcnQ7XHJcblx0fVxyXG5cclxuXHRnZXQgZW5kRWZmb3J0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fZW5kRWZmb3J0O1xyXG5cdH1cclxuXHJcblx0c2V0IHN0YXJ0KHNlY29uZHMpe1xyXG5cdFx0dGhpcy5fc3RhcnQgPSBzZWNvbmRzO1xyXG5cdH1cclxuXHJcblx0c3RhcnRfZm9ybWF0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KHRoaXMuX3N0YXJ0KTtcclxuXHR9XHJcblxyXG5cdGVuZF9mb3JtYXQoKXtcclxuXHRcdGxldCBlbmRfdGltZSA9IHRoaXMuX3N0YXJ0ICsgdGhpcy5fZHVyYXRpb247XHJcblx0XHRyZXR1cm4gdGhpcy5zZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KGVuZF90aW1lKTtcclxuXHR9XHJcblxyXG5cdHNlY29uZHNfdG9fZmlsZV9mb3JtYXQoc2Vjb25kcyl7XHJcblx0XHRsZXQgbWluID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG5cdFx0bGV0IHNlYyA9IHNlY29uZHMgLSBtaW4gKiA2MDtcclxuXHRcdHNlYyA9IChzZWMgPiA5KSA/IFwiXCIgKyBzZWMgOiBcIjBcIiArIHNlYztcclxuXHRcdHJldHVybiBtaW4gKyBcIi5cIiArIE1hdGgucm91bmQoc2VjICogMS42NjY2NjcpO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKXtcclxuXHRcdGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuc3RhcnRfZm9ybWF0KCkgKyBcIiBcIiArIHRoaXMuX3N0YXJ0RWZmb3J0ICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLmVuZF9mb3JtYXQoKSArIFwiIFwiICsgdGhpcy5fZW5kRWZmb3J0ICsgXCJcXG5cIjtcclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnQ7Il19