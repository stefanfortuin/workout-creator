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
  function Segment(duration, amount) {
    _classCallCheck(this, Segment);

    this._duration = duration; //time in seconds

    this._amount = amount; //amount of percentage above ftp
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

  return Segment;
}();

var _default = Segment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2VnbWVudC5qcyJdLCJuYW1lcyI6WyJTZWdtZW50IiwiZHVyYXRpb24iLCJhbW91bnQiLCJfZHVyYXRpb24iLCJfYW1vdW50Iiwic2Vjb25kc190b19maWxlX2Zvcm1hdCIsIl9zdGFydCIsImVuZF90aW1lIiwic2Vjb25kcyIsIm1pbiIsIk1hdGgiLCJmbG9vciIsInNlYyIsInJvdW5kIiwib3V0cHV0Iiwic3RhcnRfZm9ybWF0IiwiZW5kX2Zvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDTCxtQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBNkI7QUFBQTs7QUFDNUIsU0FBS0MsU0FBTCxHQUFpQkYsUUFBakIsQ0FENEIsQ0FDRDs7QUFDM0IsU0FBS0csT0FBTCxHQUFlRixNQUFmLENBRjRCLENBRUw7QUFDdkI7Ozs7bUNBY2E7QUFDYixhQUFPLEtBQUtHLHNCQUFMLENBQTRCLEtBQUtDLE1BQWpDLENBQVA7QUFDQTs7O2lDQUVXO0FBQ1gsVUFBSUMsUUFBUSxHQUFHLEtBQUtELE1BQUwsR0FBYyxLQUFLSCxTQUFsQztBQUNBLGFBQU8sS0FBS0Usc0JBQUwsQ0FBNEJFLFFBQTVCLENBQVA7QUFDQTs7OzJDQUVzQkMsTyxFQUFRO0FBQzlCLFVBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sR0FBRyxFQUFyQixDQUFWO0FBQ0EsVUFBSUksR0FBRyxHQUFHSixPQUFPLEdBQUdDLEdBQUcsR0FBRyxFQUExQjtBQUNBRyxNQUFBQSxHQUFHLEdBQUlBLEdBQUcsR0FBRyxDQUFQLEdBQVksS0FBS0EsR0FBakIsR0FBdUIsTUFBTUEsR0FBbkM7QUFDQSxhQUFPSCxHQUFHLEdBQUcsR0FBTixHQUFZQyxJQUFJLENBQUNHLEtBQUwsQ0FBV0QsR0FBRyxHQUFHLFFBQWpCLENBQW5CO0FBQ0E7OzsrQkFFUztBQUNULFVBQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxLQUFLQyxZQUFMLEtBQXNCLEdBQXRCLEdBQTRCLEtBQUtYLE9BQWpDLEdBQTJDLElBQXJEO0FBQ0FVLE1BQUFBLE1BQU0sSUFBSSxLQUFLRSxVQUFMLEtBQW9CLEdBQXBCLEdBQTBCLEtBQUtaLE9BQS9CLEdBQXlDLElBQW5EO0FBQ0EsYUFBT1UsTUFBUDtBQUNBOzs7d0JBakNhO0FBQ2IsYUFBTyxLQUFLWCxTQUFaO0FBQ0E7Ozt3QkFFWTtBQUNaLGFBQU8sS0FBS0csTUFBTCxHQUFjLEtBQUtILFNBQTFCO0FBQ0E7OztzQkFFU0ssTyxFQUFRO0FBQ2pCLFdBQUtGLE1BQUwsR0FBY0UsT0FBZDtBQUNBOzs7Ozs7ZUF5QmFSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWdtZW50e1xyXG5cdGNvbnN0cnVjdG9yKGR1cmF0aW9uLCBhbW91bnQpe1xyXG5cdFx0dGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjsgLy90aW1lIGluIHNlY29uZHNcclxuXHRcdHRoaXMuX2Ftb3VudCA9IGFtb3VudDsgLy9hbW91bnQgb2YgcGVyY2VudGFnZSBhYm92ZSBmdHBcclxuXHR9XHJcblxyXG5cdGdldCBkdXJhdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVuZFRpbWUoKXtcclxuXHRcdHJldHVybiB0aGlzLl9zdGFydCArIHRoaXMuX2R1cmF0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0IHN0YXJ0KHNlY29uZHMpe1xyXG5cdFx0dGhpcy5fc3RhcnQgPSBzZWNvbmRzO1xyXG5cdH1cclxuXHJcblx0c3RhcnRfZm9ybWF0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KHRoaXMuX3N0YXJ0KTtcclxuXHR9XHJcblxyXG5cdGVuZF9mb3JtYXQoKXtcclxuXHRcdGxldCBlbmRfdGltZSA9IHRoaXMuX3N0YXJ0ICsgdGhpcy5fZHVyYXRpb247XHJcblx0XHRyZXR1cm4gdGhpcy5zZWNvbmRzX3RvX2ZpbGVfZm9ybWF0KGVuZF90aW1lKTtcclxuXHR9XHJcblxyXG5cdHNlY29uZHNfdG9fZmlsZV9mb3JtYXQoc2Vjb25kcyl7XHJcblx0XHRsZXQgbWluID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG5cdFx0bGV0IHNlYyA9IHNlY29uZHMgLSBtaW4gKiA2MDtcclxuXHRcdHNlYyA9IChzZWMgPiA5KSA/IFwiXCIgKyBzZWMgOiBcIjBcIiArIHNlYztcclxuXHRcdHJldHVybiBtaW4gKyBcIi5cIiArIE1hdGgucm91bmQoc2VjICogMS42NjY2NjcpO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKXtcclxuXHRcdGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0b3V0cHV0ICs9IHRoaXMuc3RhcnRfZm9ybWF0KCkgKyBcIiBcIiArIHRoaXMuX2Ftb3VudCArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gdGhpcy5lbmRfZm9ybWF0KCkgKyBcIiBcIiArIHRoaXMuX2Ftb3VudCArIFwiXFxuXCI7XHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWdtZW50OyJdfQ==