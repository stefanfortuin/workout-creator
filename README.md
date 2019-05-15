# workout-creator
A javascript library where you can create workouts in the mrc or erg file formats

# Usage

## Creating a workout
This will create a empty workout
```js
import { Workout } from "@stefanfortuin/workout-creator"

let options = {
    type: "mrc",
    name: "Your workout name",
    description: "Your workout description"
}

let workout = new Workout(options);
```

## Creating a segment
A Segment needs to have duration of the segment and a percentage of the workload you are going to do

A segment start and en time will be converted to "minutes.seconds" where the seconds parameter is a total of 100 instead of 60

```js
  import { Segment } from "@stefanfortuin/workout-creator"
  let duration = 120; // duration in seconds
  let percentage = 70;
  let segment = new Segment(duration, percentage)
```


## Adding segments to a Workout

### One Segment
```js
import { Segment } from "@stefanfortuin/workout-creator"

let segment = new Segment(120, 80), // 2 min duration on 80%

workout.addSegment(segment);
```

### Multiple segments
```js
import { Segment } from "@stefanfortuin/workout-creator"

let segments = [
    new Segment(120, 80), // 2 min duration on 80%
    new Segment(10, 120), // 10 sec duration on 120%
    new Segment(120, 80), // 2 min duration on 80%
]

workout.addMultipleSegments(segments);
```


## Saving the file
Right now it only saves the whole workout to a string

```js
workout.toString();
```


```
[COURSE HEADER]
VERSION = 2
UNITS = ENGLISH
DESCRIPTION = A description
FILE NAME = blah.mrc
MINUTES PERCENT
[END COURSE HEADER]
[COURSE DATA]
0.00 50
6.60 50
6.60 140
7.98 140
7.98 50
9.07 50
9.07 150
10.10 150
10.10 50
14.07 50
14.07 115
22.07 115
22.07 50
32.08 50
32.08 115
40.08 115
40.08 50
51.88 50
[END COURSE DATA]
```
