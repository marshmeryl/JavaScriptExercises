function timeToAngle(hour,minutes) {

  var compensate = minutes * 0.5; // Hour hand moves by half a degree for each minute elapsed (30/60 = 0.5)

  minutes = minutes * 6; // 360/60 = 6

  hour = hour * 30; // There are 12 hours * 30 degrees in a circle (360/12 = 30)

  var timeAng = Math.abs(minutes - hour - compensate);
  
  return timeAng;
}

var hour = prompt("Please enter the hour (use numbers between 0 and 12)");

if (hour < 0 || hour > 12) {
  alert("Please enter an hour between 0 and 12");
}

if (hour == 12) {
  hour = 0;
}

var minutes = prompt("Please enter the minutes");

if (minutes < 10) {
  minutes = "0" + String(minutes);
}

if (minutes < 0 || minutes > 59) {
  alert("Please enter minutes between 0 and 59");
}

var timeAng = timeToAngle(hour,minutes);

alert("The angle between the hour and minutes hands at " + hour + ":" + minutes + " is: " + timeAng + " degrees.");