"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interval =
/*#__PURE__*/
function () {
  function Interval(duration, effort) {
    _classCallCheck(this, Interval);

    this.duration = duration; //time in seconds

    this.effort = effort; //amount of percentage above ftp

    this.start = 0;
  }

  _createClass(Interval, [{
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
      var m = Math.floor(seconds / 60);
      var s = seconds - m * 60;
      s = s > 9 ? "" + s : "0" + s;
      return "".concat(m, ".").concat(Math.round(s * 1.666667));
    }
  }, {
    key: "toString",
    value: function toString() {
      var output = "";
      output += "".concat(this.start_format(), " ").concat(this.effort, "\n");
      output += "".concat(this.end_format(), " ").concat(this.effort, "\n");
      return output;
    }
  }, {
    key: "endTime",
    get: function get() {
      return this.start + this.duration;
    }
  }]);

  return Interval;
}();

var _default = Interval;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaW50ZXJ2YWwuanMiXSwibmFtZXMiOlsiSW50ZXJ2YWwiLCJkdXJhdGlvbiIsImVmZm9ydCIsInN0YXJ0Iiwic2Vjb25kc190b19maWxlX2Zvcm1hdCIsImVuZF90aW1lIiwic2Vjb25kcyIsIm0iLCJNYXRoIiwiZmxvb3IiLCJzIiwicm91bmQiLCJvdXRwdXQiLCJzdGFydF9mb3JtYXQiLCJlbmRfZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQU1BLFE7OztBQUNMLG9CQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE2QjtBQUFBOztBQUM1QixTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQixDQUQ0QixDQUNGOztBQUMxQixTQUFLQyxNQUFMLEdBQWNBLE1BQWQsQ0FGNEIsQ0FFTjs7QUFDdEIsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQTs7OzttQ0FNYTtBQUNiLGFBQU8sS0FBS0Msc0JBQUwsQ0FBNEIsS0FBS0QsS0FBakMsQ0FBUDtBQUNBOzs7aUNBRVc7QUFDWCxVQUFJRSxRQUFRLEdBQUcsS0FBS0YsS0FBTCxHQUFhLEtBQUtGLFFBQWpDO0FBQ0EsYUFBTyxLQUFLRyxzQkFBTCxDQUE0QkMsUUFBNUIsQ0FBUDtBQUNBOzs7MkNBRXNCQyxPLEVBQVE7QUFDOUIsVUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsT0FBTyxHQUFHLEVBQXJCLENBQVI7QUFDQSxVQUFJSSxDQUFDLEdBQUdKLE9BQU8sR0FBR0MsQ0FBQyxHQUFHLEVBQXRCO0FBQ0FHLE1BQUFBLENBQUMsR0FBSUEsQ0FBQyxHQUFDLENBQUgsR0FBTSxLQUFHQSxDQUFULEdBQVcsTUFBSUEsQ0FBbkI7QUFDQSx1QkFBVUgsQ0FBVixjQUFlQyxJQUFJLENBQUNHLEtBQUwsQ0FBV0QsQ0FBQyxHQUFDLFFBQWIsQ0FBZjtBQUNBOzs7K0JBRVM7QUFDVCxVQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBQSxNQUFBQSxNQUFNLGNBQU8sS0FBS0MsWUFBTCxFQUFQLGNBQThCLEtBQUtYLE1BQW5DLE9BQU47QUFDQVUsTUFBQUEsTUFBTSxjQUFPLEtBQUtFLFVBQUwsRUFBUCxjQUE0QixLQUFLWixNQUFqQyxPQUFOO0FBQ0EsYUFBT1UsTUFBUDtBQUNBOzs7d0JBekJZO0FBQ1osYUFBTyxLQUFLVCxLQUFMLEdBQWEsS0FBS0YsUUFBekI7QUFDQTs7Ozs7O2VBeUJhRCxRIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW50ZXJ2YWx7XHJcblx0Y29uc3RydWN0b3IoZHVyYXRpb24sIGVmZm9ydCl7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247IC8vdGltZSBpbiBzZWNvbmRzXHJcblx0XHR0aGlzLmVmZm9ydCA9IGVmZm9ydDsgLy9hbW91bnQgb2YgcGVyY2VudGFnZSBhYm92ZSBmdHBcclxuXHRcdHRoaXMuc3RhcnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVuZFRpbWUoKXtcclxuXHRcdHJldHVybiB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvbjtcclxuXHR9XHJcblxyXG5cdHN0YXJ0X2Zvcm1hdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vjb25kc190b19maWxlX2Zvcm1hdCh0aGlzLnN0YXJ0KTtcclxuXHR9XHJcblxyXG5cdGVuZF9mb3JtYXQoKXtcclxuXHRcdGxldCBlbmRfdGltZSA9IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vjb25kc190b19maWxlX2Zvcm1hdChlbmRfdGltZSk7XHJcblx0fVxyXG5cclxuXHRzZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KHNlY29uZHMpe1xyXG5cdFx0bGV0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcblx0XHRsZXQgcyA9IHNlY29uZHMgLSBtICogNjA7XHJcblx0XHRzID0gKHM+OSk/XCJcIitzOlwiMFwiK3M7XHJcblx0XHRyZXR1cm4gYCR7bX0uJHtNYXRoLnJvdW5kKHMqMS42NjY2NjcpfWA7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpe1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHRvdXRwdXQgKz0gYCR7dGhpcy5zdGFydF9mb3JtYXQoKX0gJHt0aGlzLmVmZm9ydH1cXG5gO1xyXG5cdFx0b3V0cHV0ICs9IGAke3RoaXMuZW5kX2Zvcm1hdCgpfSAke3RoaXMuZWZmb3J0fVxcbmA7XHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZhbDsiXX0=