"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClockModule = (function () {
    function ClockModule() {
        this.active = false;
        this.goal = (7.5) * 60 * 60;
        this.elapsed = 0;
        this.total = 0;
        this.timetable = "this.getJSONTimeTable()";
        this.today = this.generateDayId();
    }
    ClockModule.Since = function (date) {
        var dateNow = new Date().getTime();
        var seconds = Math.floor((dateNow - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };
    ClockModule.prototype.Timer = function () {
        if (this.active) {
            this.stopTimer();
        }
        else {
            this.startTimer();
        }
    };
    ClockModule.prototype.startTimer = function () {
        var _this = this;
        this.active = true;
        var startTime = performance.now();
        this.working(startTime);
        this.workingInterval = setInterval(function () { return _this.working(startTime); }, 500);
    };
    ClockModule.prototype.stopTimer = function () {
        this.active = false;
        this.total += this.elapsed;
        this.elapsed = 0;
        clearInterval(this.workingInterval);
    };
    ClockModule.prototype.working = function (startTime) {
        this.elapsed = Math.round((performance.now() - startTime) / 1000);
        var progressPercentage = Math.round(((this.elapsed + this.total) / this.goal) * 100);
        this.updatePage(progressPercentage);
    };
    ClockModule.prototype.updatePage = function (progressPercentage) {
        $("#timePassed").html("this.getParsedTime( this.total + this.elapsed )");
        $("#weekday").html(this.getWeekDay());
        $("#ampm").html(this.getAAMPM());
        $("#time").html(this.getCurrentTime());
        $("#datecurrent").html("this.getCurrentDate()");
        $("#timeLeft").html("this.getParsedTime( this.goal - ( this.elapsed + this.total ))");
        $("#timePercents").html(progressPercentage + "%");
        $("#timePassedBar").html(progressPercentage + "%");
        $("#timePassedBar").width(progressPercentage + "%");
        $("#bar2").html(progressPercentage + "%");
        $("#bar2").width(progressPercentage + "%");
        $("#bar3").html(progressPercentage + "%");
        $("#bar3").width(progressPercentage + "%");
    };
    ClockModule.prototype.announceStatus = function () {
        console.log(this.active ? "Clock is active" : "Clock is paused or disabled ");
        console.log("days id for current date is " + this.today);
        console.log((this.active) ? "time elapsed " + this.elapsed + " seconds" : "elapsed is currently inactive");
    };
    ClockModule.prototype.generateDayId = function () {
        var currentdate = new Date();
        var day = (currentdate.getDate() < 10) ? "0" + currentdate.getDate() : currentdate.getDate();
        var month = ((currentdate.getMonth() + 1) < 10) ? "0" + (currentdate.getMonth() + 1) : (currentdate.getMonth() + 1);
        var year = currentdate.getFullYear();
        return "date-" + day + "-" + month + "-" + year;
    };
    ClockModule.prototype.getAAMPM = function () {
        var currentdate = new Date();
        var ampm = (currentdate.getHours() >= 12) ? "PM" : "AM";
        return ampm;
    };
    ClockModule.prototype.getWeekDay = function () {
        var currentdate = new Date();
        var day = currentdate.getDay();
        switch (day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            default:
                return "Saturday";
        }
    };
    ClockModule.prototype.getCurrentTime = function () {
        var currentdate = new Date();
        var hours = (currentdate.getHours() < 10) ? "0" + currentdate.getHours() : currentdate.getHours();
        var minutes = (currentdate.getMinutes() < 10) ? "0" + currentdate.getMinutes() : currentdate.getMinutes();
        var seconds = (currentdate.getSeconds() < 10) ? "0" + currentdate.getSeconds() : currentdate.getSeconds();
        return hours + ":" + minutes + ":" + seconds;
    };
    ClockModule.prototype.getCurrentDate = function () {
        return new Date();
    };
    return ClockModule;
}());
exports.default = ClockModule;
//# sourceMappingURL=clockModule.js.map