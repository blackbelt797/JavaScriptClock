function militaryTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59


	if (h == 0) {
		h = 24;
	}

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " ";
	document.getElementById("ShowMilitaryDisplay").innerText = time;
	document.getElementById("ShowMilitaryDisplay").textContent = time;

	setTimeout(militaryTime, 1000);

}

militaryTime();



function displayTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59 
	var s = date.getSeconds(); // 0- 59

	var session = "AM"; // Declaring that session is AM.... has not been used yet 


	if (h == 0) {
		h = 12;
	}
	if (h > 12) { // This if Statement has a parameter of h is less than 12 
		h = h - 12; // Here you are changeing the value of h to be h - 12 to get standard time not militay time 
		session = "PM"; // Here we are declaring the session to PM if its greater then 12 hrs 
	}

	h = (h < 10) ? "0" + h : h; // not sure whats going on here yet 
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("ShowClockDisplay").innerText = time; // Learn more about how this woks with the dom
	document.getElementById("ShowClockDisplay").textContent = time; // what is this?? textContent

	setTimeout(displayTime, 1000);

}

displayTime();