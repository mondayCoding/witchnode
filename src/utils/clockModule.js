
class ClockModule {

	//constructor + properties

	constructor() {
		this.active = false;
		this.goal = (7.5)*60*60;;
		this.workingInterval;
		this.elapsed = 0;
		this.total = 0;
		this.timetable = this.getJSONTimeTable();
      this.today = this.generateDayId();
	}

	//methods
	Timer(){
		if (this.active){
			this.stopTimer();
		} else {
			this.startTimer();
		}
	}

	startTimer(){
		this.active = true;
		var startTime = performance.now();
		this.working(startTime);
		this.workingInterval = setInterval( () => this.working(startTime), 500);
	}

	stopTimer(){
		this.active = false;
		this.total += this.elapsed;
		this.elapsed = 0;
		clearInterval(this.workingInterval);
	}

	working(startTime){
		this.elapsed = Math.round((performance.now() - startTime)/1000); 	//time in seconds
		var progressPercentage = Math.round((( this.elapsed + this.total) / this.goal ) * 100);
		this.updatePage(progressPercentage);
	}

	updatePage(progressPercentage){
		$("#timePassed").html(this.getParsedTime( this.total + this.elapsed ));
		$("#weekday").html(this.getWeekDay());
		$("#ampm").html(this.getAAMPM());
		$("#time").html(this.getCurrentTime());
		$("#datecurrent").html(this.getCurrentDate());
		$("#timeLeft").html(this.getParsedTime( this.goal - ( this.elapsed + this.total )));

		$("#timePercents").html(progressPercentage +"%");
		$("#timePassedBar").html(progressPercentage +"%");
		$("#timePassedBar").width(progressPercentage +"%");
		$("#bar2").html(progressPercentage +"%");
		$("#bar2").width(progressPercentage +"%");
		$("#bar3").html(progressPercentage +"%");
		$("#bar3").width(progressPercentage +"%");
	}

	getJSONTimeTable(){
		var locale = this;
		$.getJSON( "../javascripts/JSON.json", function(data) {
			console.log("inside jquery "+ data);
			locale.timetable = data;
		});
	}

	announceStatus(){
		console.log(this.active ? "Clock is active" : "Clock is paused or disabled ");
		console.log("days id for current date is " + this.today );
		console.log((this.active) ? "time elapsed " + this.elapsed + " seconds"  : "elapsed is currently inactive");
	}

	generateDayId() {
		var currentdate = new Date();
		var day = (currentdate.getDate() < 10) ? "0" + currentdate.getDate() : currentdate.getDate();
		var month = ((currentdate.getMonth()+1) < 10) ? "0" + (currentdate.getMonth()+1) : (currentdate.getMonth()+1);
		var year = currentdate.getFullYear();
		return "date-" + day +"-"+ month +"-"+ year;
  	}

	dayIdExists(){
		if (this.timetable.work[this.today] == null ||	this.timetable.work[this.today] == undefined) {
			return false;
		} else {
			return true;
		}
	}

	createNewDayId(){
		this.timetable.work[this.today] = 0;
	}

	getAAMPM() {
		var currentdate = new Date();
		var ampm = (currentdate.getHours() >= 12) ? "PM" : "AM";
		return ampm;
	}

	getParsedTime(seconds) {
		var seconds = parseInt((seconds)%60);
		var minutes = parseInt((seconds/60)%60);
		var hours = parseInt((seconds/(60*60))%24);

		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		return hours + ":" + minutes + ":" + seconds;
	}

	getWeekDay() {
	 	var currentdate = new Date();
	 	var day = currentdate.getDay();
	 	switch (day) {
	 		case 0:
	 			return "Sunday";
	 			break;
	 		case 1:
	 			return "Monday";
	 			break;
	 		case 2:
	 			return "Tuesday";
	 			break;
	 		case 3:
	 			return "Wednesday";
	 			break;
	 		case 4:
	 			return "Thursday";
	 			break;
	 		case 5:
	 			return "Friday";
	 			break;
	 		default:
	 			return "Saturday";
	 			break;
	 	}
	 }

	getCurrentTime() {
		var currentdate = new Date();
		var hours = (currentdate.getHours() < 10) ? "0" + currentdate.getHours() : currentdate.getHours();
		var minutes = (currentdate.getMinutes() < 10) ? "0" + currentdate.getMinutes() : currentdate.getMinutes();
		var seconds = (currentdate.getSeconds() < 10) ? "0" + currentdate.getSeconds() : currentdate.getSeconds();
		return hours +":"+ minutes +":"+ seconds;
	}

	getCurrentDate() {
		return new Date();
	}
}

module.exports = ClockModule;
