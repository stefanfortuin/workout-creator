# workout-creator
A javascript library where you can create workouts in the mrc or erg file formats

# Usage

## Creating a workout
This will create a empty workout
```js
import { Workout } from "@stefanfortuin/workout-creator"

let workout = new Workout();
```

## Creating an interval
An interval needs to have duration and a percentage of the workload you are going to do

An interval's start and end time will be converted to "minutes.seconds" where the seconds parameter is a total of 100 instead of 60

```js
  import { Interval } from "@stefanfortuin/workout-creator"
  let duration = 120; // duration in seconds
  let percentage = 70;
  let interval = new Interval(duration, percentage)
```


## Adding intervals to a Workout

### One interval
```js
import { Interval } from "@stefanfortuin/workout-creator"

let interval = new Interval(120, 80), // 2 min duration on 80%

workout.addInterval(interval);
```

### Multiple intervals
```js
import { Interval } from "@stefanfortuin/workout-creator"

let intervals = [
    new Interval(120, 80), // 2 min duration on 80%
    new Interval(10, 120), // 10 sec duration on 120%
    new Interval(120, 80), // 2 min duration on 80%
]

workout.addIntervals(intervals);
```


## Saving the file
Right now it only saves the whole workout to a string.
You can put the string in a blob to download the file from the web or save it in to a file.
For now only 'mrc' and 'erg' file formats are supported

```js
workout.save('mrc');
workout.save('erg');
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
