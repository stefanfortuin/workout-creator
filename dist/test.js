"use strict";

var _segment = _interopRequireDefault(require("./lib/segment"));

var _workout = _interopRequireDefault(require("./lib/workout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  type: "mrc",
  name: "test workout",
  description: "Really powerful workout on the bike"
};
var workout = new _workout["default"](options);
var segments = [new _segment["default"](46, 50), new _segment["default"](10, 100), new _segment["default"](98, 50), new _segment["default"](32, 100), new _segment["default"](90, 50), new _segment["default"](111, 150), new _segment["default"](76, 50), new _segment["default"](85, 80), new _segment["default"](23, 50)];
workout.addMultipleSegments(segments);
console.log(workout.segments);
var segment5 = segments[5];
console.log(segment5.startEffort);
console.log(segment5.endEffort);
workout.deleteSegment(segment5);
console.log(workout.segments);
console.log(workout.totalSeconds);
console.log(workout.toString());
console.log(workout.getDownloadUrl());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0eXBlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwid29ya291dCIsIldPUktPVVQiLCJzZWdtZW50cyIsIlNFR01FTlQiLCJhZGRNdWx0aXBsZVNlZ21lbnRzIiwiY29uc29sZSIsImxvZyIsInNlZ21lbnQ1Iiwic3RhcnRFZmZvcnQiLCJlbmRFZmZvcnQiLCJkZWxldGVTZWdtZW50IiwidG90YWxTZWNvbmRzIiwidG9TdHJpbmciLCJnZXREb3dubG9hZFVybCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLE9BQU8sR0FBRztBQUNiQyxFQUFBQSxJQUFJLEVBQUUsS0FETztBQUViQyxFQUFBQSxJQUFJLEVBQUUsY0FGTztBQUdiQyxFQUFBQSxXQUFXLEVBQUU7QUFIQSxDQUFkO0FBTUEsSUFBSUMsT0FBTyxHQUFHLElBQUlDLG1CQUFKLENBQVlMLE9BQVosQ0FBZDtBQUNBLElBQUlNLFFBQVEsR0FBRyxDQUNkLElBQUlDLG1CQUFKLENBQVksRUFBWixFQUFnQixFQUFoQixDQURjLEVBRWQsSUFBSUEsbUJBQUosQ0FBWSxFQUFaLEVBQWdCLEdBQWhCLENBRmMsRUFHZCxJQUFJQSxtQkFBSixDQUFZLEVBQVosRUFBZ0IsRUFBaEIsQ0FIYyxFQUlkLElBQUlBLG1CQUFKLENBQVksRUFBWixFQUFnQixHQUFoQixDQUpjLEVBS2QsSUFBSUEsbUJBQUosQ0FBWSxFQUFaLEVBQWdCLEVBQWhCLENBTGMsRUFNZCxJQUFJQSxtQkFBSixDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FOYyxFQU9kLElBQUlBLG1CQUFKLENBQVksRUFBWixFQUFnQixFQUFoQixDQVBjLEVBUWQsSUFBSUEsbUJBQUosQ0FBWSxFQUFaLEVBQWdCLEVBQWhCLENBUmMsRUFTZCxJQUFJQSxtQkFBSixDQUFZLEVBQVosRUFBZ0IsRUFBaEIsQ0FUYyxDQUFmO0FBY0FILE9BQU8sQ0FBQ0ksbUJBQVIsQ0FBNEJGLFFBQTVCO0FBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFPLENBQUNFLFFBQXBCO0FBRUEsSUFBSUssUUFBUSxHQUFHTCxRQUFRLENBQUMsQ0FBRCxDQUF2QjtBQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUSxDQUFDQyxXQUFyQjtBQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUSxDQUFDRSxTQUFyQjtBQUNBVCxPQUFPLENBQUNVLGFBQVIsQ0FBc0JILFFBQXRCO0FBRUFGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFPLENBQUNFLFFBQXBCO0FBRUFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFPLENBQUNXLFlBQXBCO0FBQ0FOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFPLENBQUNZLFFBQVIsRUFBWjtBQUVBUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBTyxDQUFDYSxjQUFSLEVBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU0VHTUVOVCBmcm9tICcuL2xpYi9zZWdtZW50JztcclxuaW1wb3J0IFdPUktPVVQgZnJvbSAnLi9saWIvd29ya291dCc7XHJcblxyXG5sZXQgb3B0aW9ucyA9IHtcclxuXHR0eXBlOiBcIm1yY1wiLFxyXG5cdG5hbWU6IFwidGVzdCB3b3Jrb3V0XCIsXHJcblx0ZGVzY3JpcHRpb246IFwiUmVhbGx5IHBvd2VyZnVsIHdvcmtvdXQgb24gdGhlIGJpa2VcIixcclxufVxyXG5cclxubGV0IHdvcmtvdXQgPSBuZXcgV09SS09VVChvcHRpb25zKTtcclxubGV0IHNlZ21lbnRzID0gW1xyXG5cdG5ldyBTRUdNRU5UKDQ2LCA1MCksXHJcblx0bmV3IFNFR01FTlQoMTAsIDEwMCksXHJcblx0bmV3IFNFR01FTlQoOTgsIDUwKSxcclxuXHRuZXcgU0VHTUVOVCgzMiwgMTAwKSxcclxuXHRuZXcgU0VHTUVOVCg5MCwgNTApLFxyXG5cdG5ldyBTRUdNRU5UKDExMSwgMTUwKSxcclxuXHRuZXcgU0VHTUVOVCg3NiwgNTApLFxyXG5cdG5ldyBTRUdNRU5UKDg1LCA4MCksXHJcblx0bmV3IFNFR01FTlQoMjMsIDUwKSxcclxuXVxyXG5cclxuXHJcblxyXG53b3Jrb3V0LmFkZE11bHRpcGxlU2VnbWVudHMoc2VnbWVudHMpO1xyXG5jb25zb2xlLmxvZyh3b3Jrb3V0LnNlZ21lbnRzKTtcclxuXHJcbmxldCBzZWdtZW50NSA9IHNlZ21lbnRzWzVdO1xyXG5jb25zb2xlLmxvZyhzZWdtZW50NS5zdGFydEVmZm9ydClcclxuY29uc29sZS5sb2coc2VnbWVudDUuZW5kRWZmb3J0KTtcclxud29ya291dC5kZWxldGVTZWdtZW50KHNlZ21lbnQ1KTtcclxuXHJcbmNvbnNvbGUubG9nKHdvcmtvdXQuc2VnbWVudHMpO1xyXG5cclxuY29uc29sZS5sb2cod29ya291dC50b3RhbFNlY29uZHMpXHJcbmNvbnNvbGUubG9nKHdvcmtvdXQudG9TdHJpbmcoKSk7XHJcblxyXG5jb25zb2xlLmxvZyh3b3Jrb3V0LmdldERvd25sb2FkVXJsKCkpOyJdfQ==