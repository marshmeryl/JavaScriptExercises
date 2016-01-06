//Calculates the duration of a YouTube playlist

var hours = [];
var minutes = [];
var seconds = [];

var length = document.getElementsByClassName("timestamp").length;
for (var i = 0; i < length; i++) {
	var timestamp = document.getElementsByClassName("timestamp")[i].childNodes;

	var string = timestamp[0].innerHTML;
	if (string.length <= 5) {
		string = "00:" + string;
	}

	var arr = string.split(":");

	hours[i] = Number(arr[0]);
	minutes[i] = Number(arr[1]);
	seconds[i] = Number(arr[2]);	
}

var hrs = 0;
var mins = 0;
var secs = 0;

for (var j = 0; j < hours.length; j++) {
	hrs+=hours[j];
	mins+=minutes[j];
	secs+=seconds[j];
}

var hours2secs = hrs * 3600;
var mins2secs = mins * 60;
var totalSecs = secs + mins2secs + hours2secs;

function secondsToHms(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);
	return ((h > 0 ? h + "h" + ":" + (m < 10 ? "0" : "") : "") + m + "m" + ":" + (s < 10 ? "0" : "") + s + "s");
}

secondsToHms(totalSecs);