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
    this._name = options.name + "." + options.type;
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

      this.updateStartTimes();
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

      if (segmentIndex == -1) {
        console.error("Could not find segment");
        return;
      }

      this._segments.splice(segmentIndex, 1);

      this.updateStartTimes();
    }
  }, {
    key: "findSegment",
    value: function findSegment(segment) {
      return this._segments.find(segment);
    }
  }, {
    key: "updateStartTimes",
    value: function updateStartTimes() {
      for (var i = 0; i < this._segments.length; i++) {
        var current = this._segments[i];
        var previous = this._segments[i - 1];
        var start = !previous || i == 0 ? 0 : previous.endTime;
        current.start = start;
      }
    }
  }, {
    key: "getDownloadUrl",
    value: function getDownloadUrl() {
      var blob = new Blob([this.toString()], {
        type: "text/plain"
      });
      var url = URL.createObjectURL(blob);
      return url;
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
  }, {
    key: "fileName",
    get: function get() {
      return this._name;
    }
  }]);

  return Workout;
}();

var _default = Workout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXb3Jrb3V0Iiwib3B0aW9ucyIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfdW5pdHMiLCJfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIl9uYW1lIiwibmFtZSIsIl9kYXRhX2NvbHVtbnMiLCJfc2VnbWVudHMiLCJzZWdtZW50IiwibGFzdFNlZ21lbnQiLCJsZW5ndGgiLCJzdGFydCIsImVuZFRpbWUiLCJwdXNoIiwidXBkYXRlU3RhcnRUaW1lcyIsInNlZ21lbnRzIiwiaSIsImFkZFNlZ21lbnQiLCJzZWdtZW50SW5kZXgiLCJpbmRleE9mIiwiZXJyb3IiLCJzcGxpY2UiLCJmaW5kIiwiY3VycmVudCIsInByZXZpb3VzIiwiYmxvYiIsIkJsb2IiLCJ0b1N0cmluZyIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm91dHB1dCIsInNlZ21lbnRzVG9TdHJpbmciLCJyZWR1Y2UiLCJ0IiwicyIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQU1BLE87OztBQUNMLG1CQUFZQyxPQUFaLEVBQW9CO0FBQUE7O0FBQ25CLFFBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFiLEVBQW1CO0FBQ2xCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBO0FBQ0E7O0FBRUQsU0FBS0MsS0FBTCxHQUFhSixPQUFPLENBQUNDLElBQXJCO0FBQ0EsU0FBS0ksUUFBTCxHQUFpQkwsT0FBTyxDQUFDTSxPQUFULEdBQW9CTixPQUFPLENBQUNNLE9BQTVCLEdBQXNDLENBQXREO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLFNBQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CUixPQUFPLENBQUNTLFdBQTVCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhVixPQUFPLENBQUNXLElBQVIsR0FBZSxHQUFmLEdBQXFCWCxPQUFPLENBQUNDLElBQTFDO0FBRUEsU0FBS1csYUFBTCxHQUFzQixLQUFLUixLQUFMLElBQWMsS0FBZixHQUNuQixvQkFEbUIsR0FFbkIsa0JBRkY7QUFJQSxTQUFLUyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0E7Ozs7K0JBZ0JVQyxPLEVBQVE7QUFDbEIsVUFBSUMsV0FBVyxHQUFHLEtBQUtGLFNBQUwsQ0FBZSxLQUFLQSxTQUFMLENBQWVHLE1BQWYsR0FBd0IsQ0FBdkMsQ0FBbEI7QUFFQSxVQUFJQyxLQUFKO0FBQ0MsT0FBQ0YsV0FBRixHQUFnQkUsS0FBSyxHQUFHLENBQXhCLEdBQTRCQSxLQUFLLEdBQUdGLFdBQVcsQ0FBQ0csT0FBaEQ7QUFDQUosTUFBQUEsT0FBTyxDQUFDRyxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxXQUFLSixTQUFMLENBQWVNLElBQWYsQ0FBb0JMLE9BQXBCOztBQUNBLFdBQUtNLGdCQUFMO0FBQ0E7Ozt3Q0FFbUJDLFEsRUFBUztBQUM1QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0wsTUFBN0IsRUFBcUNNLENBQUMsRUFBdEMsRUFBMEM7QUFDekMsYUFBS0MsVUFBTCxDQUFnQkYsUUFBUSxDQUFDQyxDQUFELENBQXhCO0FBQ0E7QUFDRDs7O2tDQUVhUixPLEVBQVE7QUFDckIsVUFBSVUsWUFBWSxHQUFHLEtBQUtYLFNBQUwsQ0FBZVksT0FBZixDQUF1QlgsT0FBdkIsQ0FBbkI7O0FBQ0EsVUFBSVUsWUFBWSxJQUFJLENBQUMsQ0FBckIsRUFBd0I7QUFDdkJ0QixRQUFBQSxPQUFPLENBQUN3QixLQUFSLENBQWMsd0JBQWQ7QUFDQTtBQUNBOztBQUVELFdBQUtiLFNBQUwsQ0FBZWMsTUFBZixDQUFzQkgsWUFBdEIsRUFBb0MsQ0FBcEM7O0FBQ0EsV0FBS0osZ0JBQUw7QUFDQTs7O2dDQUVXTixPLEVBQVE7QUFDbkIsYUFBTyxLQUFLRCxTQUFMLENBQWVlLElBQWYsQ0FBb0JkLE9BQXBCLENBQVA7QUFDQTs7O3VDQUVpQjtBQUNqQixXQUFLLElBQUlRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1QsU0FBTCxDQUFlRyxNQUFuQyxFQUEyQ00sQ0FBQyxFQUE1QyxFQUFnRDtBQUMvQyxZQUFNTyxPQUFPLEdBQUcsS0FBS2hCLFNBQUwsQ0FBZVMsQ0FBZixDQUFoQjtBQUNBLFlBQU1RLFFBQVEsR0FBRyxLQUFLakIsU0FBTCxDQUFlUyxDQUFDLEdBQUMsQ0FBakIsQ0FBakI7QUFFQSxZQUFJTCxLQUFLLEdBQUksQ0FBQ2EsUUFBRCxJQUFhUixDQUFDLElBQUksQ0FBbkIsR0FDUCxDQURPLEdBRVBRLFFBQVEsQ0FBQ1osT0FGZDtBQUlBVyxRQUFBQSxPQUFPLENBQUNaLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0E7QUFDRDs7O3FDQUVlO0FBQ2YsVUFBSWMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBUyxDQUFDLEtBQUtDLFFBQUwsRUFBRCxDQUFULEVBQTRCO0FBQUNoQyxRQUFBQSxJQUFJLEVBQUU7QUFBUCxPQUE1QixDQUFYO0FBQ0EsVUFBSWlDLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CTCxJQUFwQixDQUFWO0FBQ0EsYUFBT0csR0FBUDtBQUNBOzs7K0JBRVM7QUFDVCxVQUFJRyxNQUFNLEdBQUcsRUFBYjtBQUNBQSxNQUFBQSxNQUFNLElBQUksb0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGtCQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxhQUFhLEtBQUtoQyxRQUFsQixHQUE2QixJQUF2QztBQUNBZ0MsTUFBQUEsTUFBTSxJQUFJLGlCQUFpQixLQUFLN0IsWUFBdEIsR0FBcUMsSUFBL0M7QUFDQTZCLE1BQUFBLE1BQU0sSUFBSSxlQUFlLEtBQUszQixLQUFwQixHQUE0QixJQUF0QztBQUNBMkIsTUFBQUEsTUFBTSxJQUFJLEtBQUt6QixhQUFmO0FBQ0F5QixNQUFBQSxNQUFNLElBQUksd0JBQVY7QUFDQUEsTUFBQUEsTUFBTSxJQUFJLGtCQUFWO0FBQ0FBLE1BQUFBLE1BQU0sSUFBSSxLQUFLQyxnQkFBTCxFQUFWO0FBQ0FELE1BQUFBLE1BQU0sSUFBSSxtQkFBVjtBQUNBLGFBQU9BLE1BQVA7QUFDQTs7O3VDQUVpQjtBQUNqQixVQUFJQSxNQUFNLEdBQUcsRUFBYjs7QUFDQSxXQUFLLElBQUlmLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1QsU0FBTCxDQUFlRyxNQUFuQyxFQUEyQ00sQ0FBQyxFQUE1QyxFQUFnRDtBQUMvQyxZQUFNTyxPQUFPLEdBQUcsS0FBS2hCLFNBQUwsQ0FBZVMsQ0FBZixDQUFoQjtBQUNBZSxRQUFBQSxNQUFNLElBQUlSLE9BQU8sQ0FBQ0ksUUFBUixFQUFWO0FBQ0E7O0FBQ0QsYUFBT0ksTUFBUDtBQUNBOzs7d0JBdkZpQjtBQUNqQixhQUFPLEtBQUt4QixTQUFMLENBQWUwQixNQUFmLENBQXNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3RDLGVBQU9ELENBQUMsSUFBSUMsQ0FBQyxDQUFDQyxRQUFkO0FBQ0EsT0FGTSxFQUVKLENBRkksQ0FBUDtBQUdBOzs7d0JBRWE7QUFDYixhQUFPLEtBQUs3QixTQUFaO0FBQ0E7Ozt3QkFFYTtBQUNiLGFBQU8sS0FBS0gsS0FBWjtBQUNBOzs7Ozs7ZUE2RWFYLE8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXb3Jrb3V0e1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cdFx0aWYgKCFvcHRpb25zLnR5cGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQbGVhc2Ugc3BlY2lmaXkgYSB0eXBlLCBtcmMvZXJnXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fdHlwZSA9IG9wdGlvbnMudHlwZTtcclxuXHRcdHRoaXMuX3ZlcnNpb24gPSAob3B0aW9ucy52ZXJzaW9uKSA/IG9wdGlvbnMudmVyc2lvbiA6IDI7XHJcblx0XHR0aGlzLl91bml0cyA9IFwiRU5HTElTSFwiO1xyXG5cdFx0dGhpcy5fZGVzY3JpcHRpb24gPSBvcHRpb25zLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5fbmFtZSA9IG9wdGlvbnMubmFtZSArIFwiLlwiICsgb3B0aW9ucy50eXBlO1xyXG5cclxuXHRcdHRoaXMuX2RhdGFfY29sdW1ucyA9ICh0aGlzLl90eXBlID09IFwibXJjXCIpIFxyXG5cdFx0PyBcIk1JTlVURVMgUEVSQ0VOVCBcXG5cIiBcclxuXHRcdDogXCJNSU5VVEVTIFdBVFRTIFxcblwiO1xyXG5cclxuXHRcdHRoaXMuX3NlZ21lbnRzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXQgdG90YWxTZWNvbmRzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHMucmVkdWNlKCh0LCBzKSA9PiB7XHJcblx0XHRcdHJldHVybiB0ICs9IHMuZHVyYXRpb247XHJcblx0XHR9LCAwKVxyXG5cdH1cclxuXHJcblx0Z2V0IHNlZ21lbnRzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHM7XHJcblx0fVxyXG5cclxuXHRnZXQgZmlsZU5hbWUoKXtcclxuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xyXG5cdH1cclxuXHJcblx0YWRkU2VnbWVudChzZWdtZW50KXtcclxuXHRcdGxldCBsYXN0U2VnbWVudCA9IHRoaXMuX3NlZ21lbnRzW3RoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuXHRcdGxldCBzdGFydDtcclxuXHRcdCghbGFzdFNlZ21lbnQpPyBzdGFydCA9IDAgOiBzdGFydCA9IGxhc3RTZWdtZW50LmVuZFRpbWU7XHJcblx0XHRzZWdtZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblxyXG5cdFx0dGhpcy5fc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuXHRcdHRoaXMudXBkYXRlU3RhcnRUaW1lcygpO1xyXG5cdH1cclxuXHJcblx0YWRkTXVsdGlwbGVTZWdtZW50cyhzZWdtZW50cyl7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuYWRkU2VnbWVudChzZWdtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWxldGVTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0bGV0IHNlZ21lbnRJbmRleCA9IHRoaXMuX3NlZ21lbnRzLmluZGV4T2Yoc2VnbWVudCk7XHJcblx0XHRpZiAoc2VnbWVudEluZGV4ID09IC0xKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZmluZCBzZWdtZW50XCIpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9zZWdtZW50cy5zcGxpY2Uoc2VnbWVudEluZGV4LCAxKTtcclxuXHRcdHRoaXMudXBkYXRlU3RhcnRUaW1lcygpO1xyXG5cdH1cclxuXHJcblx0ZmluZFNlZ21lbnQoc2VnbWVudCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VnbWVudHMuZmluZChzZWdtZW50KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0YXJ0VGltZXMoKXtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IHRoaXMuX3NlZ21lbnRzW2ktMV07XHJcblxyXG5cdFx0XHRsZXQgc3RhcnQgPSAoIXByZXZpb3VzIHx8IGkgPT0gMClcclxuXHRcdFx0XHRcdFx0PyAwIFxyXG5cdFx0XHRcdFx0XHQ6IHByZXZpb3VzLmVuZFRpbWU7XHJcblxyXG5cdFx0XHRjdXJyZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREb3dubG9hZFVybCgpe1xyXG5cdFx0bGV0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy50b1N0cmluZygpXSwge3R5cGU6IFwidGV4dC9wbGFpblwifSk7XHJcblx0XHRsZXQgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpe1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJbQ09VUlNFIEhFQURFUl0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJVTklUUz1FTkdMSVNIIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiVkVSU0lPTj1cIiArIHRoaXMuX3ZlcnNpb24gKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiREVTQ1JJUFRJT049XCIgKyB0aGlzLl9kZXNjcmlwdGlvbiArIFwiXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJGSUxFIE5BTUU9XCIgKyB0aGlzLl9uYW1lICsgXCJcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLl9kYXRhX2NvbHVtbnM7XHJcblx0XHRvdXRwdXQgKz0gXCJbRU5EIENPVVJTRSBIRUFERVJdIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiW0NPVVJTRSBEQVRBXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSB0aGlzLnNlZ21lbnRzVG9TdHJpbmcoKTtcclxuXHRcdG91dHB1dCArPSBcIltFTkQgQ09VUlNFIERBVEFdXCJcclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG5cclxuXHRzZWdtZW50c1RvU3RyaW5nKCl7XHJcblx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnRzW2ldO1xyXG5cdFx0XHRvdXRwdXQgKz0gY3VycmVudC50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV29ya291dDsiXX0=