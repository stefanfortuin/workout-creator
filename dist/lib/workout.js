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

    this.description = '';
    this.name = '';
    this.intervals = [];
  }

  _createClass(Workout, [{
    key: "addInterval",
    value: function addInterval(interval) {
      var lastinterval = this.intervals[this.intervals.length - 1];
      interval.start = !lastinterval ? 0 : lastinterval.endTime;
      this.intervals.push(interval);
      this.updateStartTimes();
    }
  }, {
    key: "addIntervals",
    value: function addIntervals(intervals) {
      var _this = this;

      intervals.forEach(function (s) {
        return _this.addInterval(s);
      });
    }
  }, {
    key: "deleteInterval",
    value: function deleteInterval(interval) {
      var intervalIndex = this.intervals.indexOf(interval);
      if (intervalIndex == -1) return;
      this.intervals.splice(intervalIndex, 1);
      this.updateStartTimes();
    }
  }, {
    key: "updateStartTimes",
    value: function updateStartTimes() {
      for (var i = 0; i < this.intervals.length; i++) {
        var cur = this.intervals[i],
            prev = this.intervals[i - 1];
        cur.start = !prev || i == 0 ? 0 : prev.endTime;
      }
    }
  }, {
    key: "save",
    value: function save(type) {
      var output = "";
      output += "[COURSE HEADER] \n";
      output += "UNITS=ENGLISH \n";
      output += "VERSION=2\n";
      output += "DESCRIPTION=" + this.description + "\n";
      output += "FILE NAME=" + this.name + "\n";
      output += type == "mrc" ? "MINUTES PERCENT \n" : "MINUTES WATTS \n";
      output += "[END COURSE HEADER] \n";
      output += "[COURSE DATA] \n";
      output += this.intervalsToString();
      output += "[END COURSE DATA]";
      return output;
    }
  }, {
    key: "intervalsToString",
    value: function intervalsToString() {
      var output = "";
      this.intervals.forEach(function (s) {
        return output += s.toString();
      });
      return output;
    }
  }, {
    key: "totalSeconds",
    get: function get() {
      return this.intervals.reduce(function (t, s) {
        return t += s.duration;
      }, 0);
    }
  }, {
    key: "url",
    get: function get() {
      var blob = new Blob([this.save(type)], {
        type: "text/plain"
      });
      var url = URL.createObjectURL(blob);
      return url;
    }
  }]);

  return Workout;
}();

var _default = Workout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXb3Jrb3V0Iiwib3B0aW9ucyIsImRlc2NyaXB0aW9uIiwibmFtZSIsImludGVydmFscyIsImludGVydmFsIiwibGFzdGludGVydmFsIiwibGVuZ3RoIiwic3RhcnQiLCJlbmRUaW1lIiwicHVzaCIsInVwZGF0ZVN0YXJ0VGltZXMiLCJmb3JFYWNoIiwicyIsImFkZEludGVydmFsIiwiaW50ZXJ2YWxJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpIiwiY3VyIiwicHJldiIsInR5cGUiLCJvdXRwdXQiLCJpbnRlcnZhbHNUb1N0cmluZyIsInRvU3RyaW5nIiwicmVkdWNlIiwidCIsImR1cmF0aW9uIiwiYmxvYiIsIkJsb2IiLCJzYXZlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQU1BLE87OztBQUNMLG1CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ3BCLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTs7OztnQ0FRV0MsUSxFQUFVO0FBQ3JCLFVBQUlDLFlBQVksR0FBRyxLQUFLRixTQUFMLENBQWUsS0FBS0EsU0FBTCxDQUFlRyxNQUFmLEdBQXdCLENBQXZDLENBQW5CO0FBRUFGLE1BQUFBLFFBQVEsQ0FBQ0csS0FBVCxHQUFrQixDQUFDRixZQUFGLEdBQWtCLENBQWxCLEdBQXNCQSxZQUFZLENBQUNHLE9BQXBEO0FBRUEsV0FBS0wsU0FBTCxDQUFlTSxJQUFmLENBQW9CTCxRQUFwQjtBQUNBLFdBQUtNLGdCQUFMO0FBQ0E7OztpQ0FFWVAsUyxFQUFXO0FBQUE7O0FBQ3ZCQSxNQUFBQSxTQUFTLENBQUNRLE9BQVYsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLGVBQUksS0FBSSxDQUFDQyxXQUFMLENBQWlCRCxDQUFqQixDQUFKO0FBQUEsT0FBbkI7QUFDQTs7O21DQUVjUixRLEVBQVU7QUFDeEIsVUFBSVUsYUFBYSxHQUFHLEtBQUtYLFNBQUwsQ0FBZVksT0FBZixDQUF1QlgsUUFBdkIsQ0FBcEI7QUFDQSxVQUFJVSxhQUFhLElBQUksQ0FBQyxDQUF0QixFQUF5QjtBQUV6QixXQUFLWCxTQUFMLENBQWVhLE1BQWYsQ0FBc0JGLGFBQXRCLEVBQXFDLENBQXJDO0FBQ0EsV0FBS0osZ0JBQUw7QUFDQTs7O3VDQUVrQjtBQUNsQixXQUFLLElBQUlPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2QsU0FBTCxDQUFlRyxNQUFuQyxFQUEyQ1csQ0FBQyxFQUE1QyxFQUFnRDtBQUMvQyxZQUFNQyxHQUFHLEdBQUcsS0FBS2YsU0FBTCxDQUFlYyxDQUFmLENBQVo7QUFBQSxZQUNDRSxJQUFJLEdBQUcsS0FBS2hCLFNBQUwsQ0FBZWMsQ0FBQyxHQUFHLENBQW5CLENBRFI7QUFHQUMsUUFBQUEsR0FBRyxDQUFDWCxLQUFKLEdBQWEsQ0FBQ1ksSUFBRCxJQUFTRixDQUFDLElBQUksQ0FBZixHQUNWLENBRFUsR0FFWEUsSUFBSSxDQUFDWCxPQUZOO0FBR0E7QUFDRDs7O3lCQVVJWSxJLEVBQU07QUFDVixVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBQSxNQUFBQSxNQUFNLElBQUksb0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGtCQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxhQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxpQkFBaUIsS0FBS3BCLFdBQXRCLEdBQW9DLElBQTlDO0FBQ0FvQixNQUFBQSxNQUFNLElBQUksZUFBZSxLQUFLbkIsSUFBcEIsR0FBMkIsSUFBckM7QUFFQW1CLE1BQUFBLE1BQU0sSUFBS0QsSUFBSSxJQUFJLEtBQVQsR0FDVCxvQkFEUyxHQUVULGtCQUZEO0FBSUFDLE1BQUFBLE1BQU0sSUFBSSx3QkFBVjtBQUNBQSxNQUFBQSxNQUFNLElBQUksa0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLEtBQUtDLGlCQUFMLEVBQVY7QUFDQUQsTUFBQUEsTUFBTSxJQUFJLG1CQUFWO0FBQ0EsYUFBT0EsTUFBUDtBQUNBOzs7d0NBRW1CO0FBQ25CLFVBQUlBLE1BQU0sR0FBRyxFQUFiO0FBQ0EsV0FBS2xCLFNBQUwsQ0FBZVEsT0FBZixDQUF1QixVQUFDQyxDQUFEO0FBQUEsZUFBT1MsTUFBTSxJQUFJVCxDQUFDLENBQUNXLFFBQUYsRUFBakI7QUFBQSxPQUF2QjtBQUNBLGFBQU9GLE1BQVA7QUFDQTs7O3dCQXJFa0I7QUFDbEIsYUFBTyxLQUFLbEIsU0FBTCxDQUFlcUIsTUFBZixDQUFzQixVQUFDQyxDQUFELEVBQUliLENBQUosRUFBVTtBQUN0QyxlQUFPYSxDQUFDLElBQUliLENBQUMsQ0FBQ2MsUUFBZDtBQUNBLE9BRk0sRUFFSixDQUZJLENBQVA7QUFHQTs7O3dCQWtDUztBQUNULFVBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVMsQ0FBQyxLQUFLQyxJQUFMLENBQVVULElBQVYsQ0FBRCxDQUFULEVBQTRCO0FBQ3RDQSxRQUFBQSxJQUFJLEVBQUU7QUFEZ0MsT0FBNUIsQ0FBWDtBQUdBLFVBQUlVLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CTCxJQUFwQixDQUFWO0FBQ0EsYUFBT0csR0FBUDtBQUNBOzs7Ozs7ZUEyQmEvQixPIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV29ya291dCB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xyXG5cdFx0dGhpcy5uYW1lID0gJyc7XHJcblx0XHR0aGlzLmludGVydmFscyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0IHRvdGFsU2Vjb25kcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmludGVydmFscy5yZWR1Y2UoKHQsIHMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHQgKz0gcy5kdXJhdGlvbjtcclxuXHRcdH0sIDApXHJcblx0fVxyXG5cclxuXHRhZGRJbnRlcnZhbChpbnRlcnZhbCkge1xyXG5cdFx0bGV0IGxhc3RpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWxzW3RoaXMuaW50ZXJ2YWxzLmxlbmd0aCAtIDFdO1xyXG5cclxuXHRcdGludGVydmFsLnN0YXJ0ID0gKCFsYXN0aW50ZXJ2YWwpID8gMCA6IGxhc3RpbnRlcnZhbC5lbmRUaW1lO1xyXG5cclxuXHRcdHRoaXMuaW50ZXJ2YWxzLnB1c2goaW50ZXJ2YWwpO1xyXG5cdFx0dGhpcy51cGRhdGVTdGFydFRpbWVzKCk7XHJcblx0fVxyXG5cclxuXHRhZGRJbnRlcnZhbHMoaW50ZXJ2YWxzKSB7XHJcblx0XHRpbnRlcnZhbHMuZm9yRWFjaChzID0+IHRoaXMuYWRkSW50ZXJ2YWwocykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlSW50ZXJ2YWwoaW50ZXJ2YWwpIHtcclxuXHRcdGxldCBpbnRlcnZhbEluZGV4ID0gdGhpcy5pbnRlcnZhbHMuaW5kZXhPZihpbnRlcnZhbCk7XHJcblx0XHRpZiAoaW50ZXJ2YWxJbmRleCA9PSAtMSkgcmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuaW50ZXJ2YWxzLnNwbGljZShpbnRlcnZhbEluZGV4LCAxKTtcclxuXHRcdHRoaXMudXBkYXRlU3RhcnRUaW1lcygpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RhcnRUaW1lcygpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnRlcnZhbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VyID0gdGhpcy5pbnRlcnZhbHNbaV0sXHJcblx0XHRcdFx0cHJldiA9IHRoaXMuaW50ZXJ2YWxzW2kgLSAxXTtcclxuXHJcblx0XHRcdGN1ci5zdGFydCA9ICghcHJldiB8fCBpID09IDApIFxyXG5cdFx0XHQ/IDAgXHJcblx0XHRcdDpwcmV2LmVuZFRpbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgdXJsKCkge1xyXG5cdFx0bGV0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5zYXZlKHR5cGUpXSwge1xyXG5cdFx0XHR0eXBlOiBcInRleHQvcGxhaW5cIlxyXG5cdFx0fSk7XHJcblx0XHRsZXQgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG5cclxuXHRzYXZlKHR5cGUpIHtcclxuXHRcdGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0NPVVJTRSBIRUFERVJdIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiVU5JVFM9RU5HTElTSCBcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIlZFUlNJT049MlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiREVTQ1JJUFRJT049XCIgKyB0aGlzLmRlc2NyaXB0aW9uICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIkZJTEUgTkFNRT1cIiArIHRoaXMubmFtZSArIFwiXFxuXCI7XHJcblxyXG5cdFx0b3V0cHV0ICs9ICh0eXBlID09IFwibXJjXCIpID9cclxuXHRcdFx0XCJNSU5VVEVTIFBFUkNFTlQgXFxuXCIgOlxyXG5cdFx0XHRcIk1JTlVURVMgV0FUVFMgXFxuXCI7XHJcblxyXG5cdFx0b3V0cHV0ICs9IFwiW0VORCBDT1VSU0UgSEVBREVSXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIltDT1VSU0UgREFUQV0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gdGhpcy5pbnRlcnZhbHNUb1N0cmluZygpO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0VORCBDT1VSU0UgREFUQV1cIlxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcblxyXG5cdGludGVydmFsc1RvU3RyaW5nKCkge1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHR0aGlzLmludGVydmFscy5mb3JFYWNoKChzKSA9PiBvdXRwdXQgKz0gcy50b1N0cmluZygpKVxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya291dDsiXX0=