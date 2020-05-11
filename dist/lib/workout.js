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

    this.type = options.type;
    this.version = options.version ? options.version : 2;
    this.units = "ENGLISH";
    this.description = options.description;
    this.name = options.name;
    this.data_columns = this.type == "mrc" ? "MINUTES PERCENT \n" : "MINUTES WATTS \n";
    this.tags = [];
    this.segments = [];
  }

  _createClass(Workout, [{
    key: "addSegment",
    value: function addSegment(segment) {
      var lastSegment = this.segments[this.segments.length - 1];
      var start;
      !lastSegment ? start = 0 : start = lastSegment.endTime;
      segment.start = start;
      this.segments.push(segment);
      this.updateStartTimes();
    }
  }, {
    key: "addSegments",
    value: function addSegments(segments) {
      for (var i = 0; i < segments.length; i++) {
        this.addSegment(segments[i]);
      }
    }
  }, {
    key: "deleteSegment",
    value: function deleteSegment(segment) {
      var segmentIndex = this.segments.indexOf(segment);

      if (segmentIndex == -1) {
        console.error("Could not find segment");
        return;
      }

      this.segments.splice(segmentIndex, 1);
      this.updateStartTimes();
    }
  }, {
    key: "updateStartTimes",
    value: function updateStartTimes() {
      for (var i = 0; i < this.segments.length; i++) {
        var current = this.segments[i];
        var previous = this.segments[i - 1];
        var start = !previous || i == 0 ? 0 : previous.endTime;
        current.start = start;
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
      output += this.segmentsToString();
      output += "[END COURSE DATA]";
      return output;
    }
  }, {
    key: "segmentsToString",
    value: function segmentsToString() {
      var output = "";
      this.segments.forEach(function (s) {
        return output += s.toString();
      });
      return output;
    }
  }, {
    key: "totalSeconds",
    get: function get() {
      return this.segments.reduce(function (t, s) {
        return t += s.duration;
      }, 0);
    }
  }, {
    key: "url",
    get: function get() {
      var blob = new Blob([this.toString(type)], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd29ya291dC5qcyJdLCJuYW1lcyI6WyJXb3Jrb3V0Iiwib3B0aW9ucyIsInR5cGUiLCJ2ZXJzaW9uIiwidW5pdHMiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJkYXRhX2NvbHVtbnMiLCJ0YWdzIiwic2VnbWVudHMiLCJzZWdtZW50IiwibGFzdFNlZ21lbnQiLCJsZW5ndGgiLCJzdGFydCIsImVuZFRpbWUiLCJwdXNoIiwidXBkYXRlU3RhcnRUaW1lcyIsImkiLCJhZGRTZWdtZW50Iiwic2VnbWVudEluZGV4IiwiaW5kZXhPZiIsImNvbnNvbGUiLCJlcnJvciIsInNwbGljZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsIm91dHB1dCIsInNlZ21lbnRzVG9TdHJpbmciLCJmb3JFYWNoIiwicyIsInRvU3RyaW5nIiwicmVkdWNlIiwidCIsImR1cmF0aW9uIiwiYmxvYiIsIkJsb2IiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0wsbUJBQVlDLE9BQVosRUFBb0I7QUFBQTs7QUFDbkIsU0FBS0MsSUFBTCxHQUFZRCxPQUFPLENBQUNDLElBQXBCO0FBQ0EsU0FBS0MsT0FBTCxHQUFnQkYsT0FBTyxDQUFDRSxPQUFULEdBQW9CRixPQUFPLENBQUNFLE9BQTVCLEdBQXNDLENBQXJEO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLFNBQWI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CSixPQUFPLENBQUNJLFdBQTNCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZTCxPQUFPLENBQUNLLElBQXBCO0FBRUEsU0FBS0MsWUFBTCxHQUFxQixLQUFLTCxJQUFMLElBQWEsS0FBZCxHQUNsQixvQkFEa0IsR0FFbEIsa0JBRkY7QUFJQSxTQUFLTSxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQTs7OzsrQkFRVUMsTyxFQUFRO0FBQ2xCLFVBQUlDLFdBQVcsR0FBRyxL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QUMsS0FBS0wsUUFBTCxDQUFjNUIsSUFBZCxDQUFELENBQVQsRUFBZ0M7QUFBQ0EsUUFBQUEsSUFBSSxFQUFFO0FBQVAsT0FBaEMsQ0FBWDtBQUNBLFVBQUlrQyxHQUFHLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkosSUFBcEIsQ0FBVjtBQUNBLGFBQU9FLEdBQVA7QUFDQTs7Ozs7O2VBMkJhcEMsTyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdvcmtvdXR7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyl7XHJcblx0XHR0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGU7XHJcblx0XHR0aGlzLnZlcnNpb24gPSAob3B0aW9ucy52ZXJzaW9uKSA/IG9wdGlvbnMudmVyc2lvbiA6IDI7XHJcblx0XHR0aGlzLnVuaXRzID0gXCJFTkdMSVNIXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gb3B0aW9ucy5kZXNjcmlwdGlvbjtcclxuXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcclxuXHJcblx0XHR0aGlzLmRhdGFfY29sdW1ucyA9ICh0aGlzLnR5cGUgPT0gXCJtcmNcIikgXHJcblx0XHQ/IFwiTUlOVVRFUyBQRVJDRU5UIFxcblwiIFxyXG5cdFx0OiBcIk1JTlVURVMgV0FUVFMgXFxuXCI7XHJcblxyXG5cdFx0dGhpcy50YWdzID0gW107XHJcblx0XHR0aGlzLnNlZ21lbnRzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXQgdG90YWxTZWNvbmRzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHQsIHMpID0+IHtcclxuXHRcdFx0cmV0dXJuIHQgKz0gcy5kdXJhdGlvbjtcclxuXHRcdH0sIDApXHJcblx0fVxyXG5cclxuXHRhZGRTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0bGV0IGxhc3RTZWdtZW50ID0gdGhpcy5zZWdtZW50c1t0aGlzLnNlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuXHRcdGxldCBzdGFydDtcclxuXHRcdCghbGFzdFNlZ21lbnQpPyBzdGFydCA9IDAgOiBzdGFydCA9IGxhc3RTZWdtZW50LmVuZFRpbWU7XHJcblx0XHRzZWdtZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblxyXG5cdFx0dGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xyXG5cdFx0dGhpcy51cGRhdGVTdGFydFRpbWVzKCk7XHJcblx0fVxyXG5cclxuXHRhZGRTZWdtZW50cyhzZWdtZW50cyl7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuYWRkU2VnbWVudChzZWdtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWxldGVTZWdtZW50KHNlZ21lbnQpe1xyXG5cdFx0bGV0IHNlZ21lbnRJbmRleCA9IHRoaXMuc2VnbWVudHMuaW5kZXhPZihzZWdtZW50KTtcclxuXHRcdGlmIChzZWdtZW50SW5kZXggPT0gLTEpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBmaW5kIHNlZ21lbnRcIik7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2VnbWVudHMuc3BsaWNlKHNlZ21lbnRJbmRleCwgMSk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0YXJ0VGltZXMoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0YXJ0VGltZXMoKXtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5zZWdtZW50c1tpXTtcclxuXHRcdFx0Y29uc3QgcHJldmlvdXMgPSB0aGlzLnNlZ21lbnRzW2ktMV07XHJcblxyXG5cdFx0XHRsZXQgc3RhcnQgPSAoIXByZXZpb3VzIHx8IGkgPT0gMClcclxuXHRcdFx0XHRcdFx0PyAwIFxyXG5cdFx0XHRcdFx0XHQ6IHByZXZpb3VzLmVuZFRpbWU7XHJcblxyXG5cdFx0XHRjdXJyZW50LnN0YXJ0ID0gc3RhcnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgdXJsKCl7XHJcblx0XHRsZXQgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLnRvU3RyaW5nKHR5cGUpXSwge3R5cGU6IFwidGV4dC9wbGFpblwifSk7XHJcblx0XHRsZXQgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG5cclxuXHRzYXZlKHR5cGUpe1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJbQ09VUlNFIEhFQURFUl0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJVTklUUz1FTkdMSVNIIFxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiVkVSU0lPTj0yXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gXCJERVNDUklQVElPTj1cIiArIHRoaXMuZGVzY3JpcHRpb24gKyBcIlxcblwiO1xyXG5cdFx0b3V0cHV0ICs9IFwiRklMRSBOQU1FPVwiICsgdGhpcy5uYW1lICsgXCJcXG5cIjtcclxuXHJcblx0XHRvdXRwdXQgKz0gKHR5cGUgPT0gXCJtcmNcIikgXHJcblx0XHQ/IFwiTUlOVVRFUyBQRVJDRU5UIFxcblwiIFxyXG5cdFx0OiBcIk1JTlVURVMgV0FUVFMgXFxuXCI7XHJcblxyXG5cdFx0b3V0cHV0ICs9IFwiW0VORCBDT1VSU0UgSEVBREVSXSBcXG5cIjtcclxuXHRcdG91dHB1dCArPSBcIltDT1VSU0UgREFUQV0gXFxuXCI7XHJcblx0XHRvdXRwdXQgKz0gdGhpcy5zZWdtZW50c1RvU3RyaW5nKCk7XHJcblx0XHRvdXRwdXQgKz0gXCJbRU5EIENPVVJTRSBEQVRBXVwiXHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH1cclxuXHJcblx0c2VnbWVudHNUb1N0cmluZygpe1xyXG5cdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHR0aGlzLnNlZ21lbnRzLmZvckVhY2goKHMpID0+IG91dHB1dCArPSBzLnRvU3RyaW5nKCkpXHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0OyJdfQ==