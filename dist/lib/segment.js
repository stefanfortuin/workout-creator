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
  function Segment(duration, effort) {
    _classCallCheck(this, Segment);

    this.duration = duration; //time in seconds

    this.effort = effort; //amount of percentage above ftp

    this.start = 0;
  }

  _createClass(Segment, [{
    key: "start_format",
    value: function start_format() {
      return this.seconds_to_file_format(this.start);
    }
  }, {
    key: "end_format",
    value: function end_format() {
      var end_time = this.start + this.duration;
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
      output += this.start_format() + " " + this.effort + "\n";
      output += this.end_format() + " " + this.effort + "\n";
      return output;
    }
  }, {
    key: "endTime",
    get: function get() {
      return this.start + this.duration;
    }
  }]);

  return Segment;
}();

var _default = Segment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2VnbWVudC5qcyJdLCJuYW1lcyI6WyJTZWdtZW50IiwiZHVyYXRpb24iLCJlZmZvcnQiLCJzdGFydCIsInNlY29uZHNfdG9fZmlsZV9mb3JtYXQiLCJlbmRfdGltZSIsInNlY29uZHMiLCJtaW4iLCJNYXRoIiwiZmxvb3IiLCJzZWMiLCJyb3VuZCIsIm91dHB1dCIsInN0YXJ0X2Zvcm1hdCIsImVuZF9mb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0wsbUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQTZCO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCLENBRDRCLENBQ0Y7O0FBQzFCLFNBQUtDLE1BQUwsR0FBY0EsTUFBZCxDQUY0QixDQUVOOztBQUN0QixTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBOzs7O21DQU1hO0FBQ2IsYUFBTyxLQUFLQyxzQkFBTCxDQUE0QixLQUFLRCxLQUFqQyxDQUFQO0FBQ0E7OztpQ0FFVztBQUNYLFVBQUlFLFFBQVEsR0FBRyxLQUFLRixLQUFMLEdBQWEsS0FBS0YsUUFBakM7QUFDQSxhQUFPLEtBQUtHLHNCQUFMLENBQTRCQyxRQUE1QixDQUFQO0FBQ0E7OzsyQ0FFc0JDLE8sRUFBUTtBQUM5QixVQUFJQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFPLEdBQUcsRUFBckIsQ0FBVjtBQUNBLFVBQUlJLEdBQUcsR0FBR0osT0FBTyxHQUFHQyxHQUFHLEdBQUcsRUFBMUI7QUFDQUcsTUFBQUEsR0FBRyxHQUFJQSxHQUFHLEdBQUcsQ0FBUCxHQUFZLEtBQUtBLEdBQWpCLEdBQXVCLE1BQU1BLEdBQW5DO0FBQ0EsYUFBT0gsR0FBRyxHQUFHLEdBQU4sR0FBWUMsSUFBSSxDQUFDRyxLQUFMLENBQVdELEdBQUcsR0FBRyxRQUFqQixDQUFuQjtBQUNBOzs7K0JBRVM7QUFDVCxVQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBQSxNQUFBQSxNQUFNLElBQUksS0FBS0MsWUFBTCxLQUFzQixHQUF0QixHQUE0QixLQUFLWCxNQUFqQyxHQUEwQyxJQUFwRDtBQUNBVSxNQUFBQSxNQUFNLElBQUksS0FBS0UsVUFBTCxLQUFvQixHQUFwQixHQUEwQixLQUFLWixNQUEvQixHQUF3QyxJQUFsRDtBQUNBLGFBQU9VLE1BQVA7QUFDQTs7O3dCQXpCWTtBQUNaLGFBQU8sS0FBS1QsS0FBTCxHQUFhLEtBQUtGLFFBQXpCO0FBQ0E7Ozs7OztlQXlCYUQsTyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlZ21lbnR7XHJcblx0Y29uc3RydWN0b3IoZHVyYXRpb24sIGVmZm9ydCl7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247IC8vdGltZSBpbiBzZWNvbmRzXHJcblx0XHR0aGlzLmVmZm9ydCA9IGVmZm9ydDsgLy9hbW91bnQgb2YgcGVyY2VudGFnZSBhYm92ZSBmdHBcclxuXHRcdHRoaXMuc3RhcnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVuZFRpbWUoKXtcclxuXHRcdHJldHVybiB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvbjtcclxuXHR9XHJcblxyXG5cdHN0YXJ0X2Zvcm1hdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vjb25kc190b19maWxlX2Zvcm1hdCh0aGlzLnN0YXJ0KTtcclxuXHR9XHJcblxyXG5cdGVuZF9mb3JtYXQoKXtcclxuXHRcdGxldCBlbmRfdGltZSA9IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vjb25kc190b19maWxlX2Zvcm1hdChlbmRfdGltZSk7XHJcblx0fVxyXG5cclxuXHRzZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KHNlY29uZHMpe1xyXG5cdFx0bGV0IG1pbiA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuXHRcdGxldCBzZWMgPSBzZWNvbmRzIC0gbWluICogNjA7XHJcblx0XHRzZWMgPSAoc2VjID4gOSkgPyBcIlwiICsgc2VjIDogXCIwXCIgKyBzZWM7XHJcblx0XHRyZXR1cm4gbWluICsgXCIuXCIgKyBNYXRoLnJvdW5kKHNlYyAqIDEuNjY2NjY3KTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLnN0YXJ0X2Zvcm1hdCgpICsgXCIgXCIgKyB0aGlzLmVmZm9ydCArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gdGhpcy5lbmRfZm9ybWF0KCkgKyBcIiBcIiArIHRoaXMuZWZmb3J0ICsgXCJcXG5cIjtcclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnQ7Il19