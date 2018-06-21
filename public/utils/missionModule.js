"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mission = (function () {
    function Mission(objective, complete, createDate, completeDate) {
        if (complete === void 0) { complete = false; }
        this.objective = objective;
        this.complete = complete;
        this.createDate = createDate;
        this.completeDate = completeDate;
    }
    return Mission;
}());
exports.Mission = Mission;
var MissionControl = (function () {
    function MissionControl(missionBoard) {
        this.missionBoard = missionBoard || [];
    }
    MissionControl.prototype.announceMissions = function () {
        this.missionBoard.forEach(function (mission) {
            console.log("mission with objective " + mission.objective);
            console.log((mission.complete) ? "has been completed" : "is incomplete");
        });
    };
    MissionControl.prototype.newMission = function (objective, complete) {
        if (complete === void 0) { complete = false; }
        var newMission = new Mission(objective, complete);
        this.missionBoard.push(newMission);
    };
    MissionControl.prototype.getCompleted = function () {
        var completed = this.missionBoard.filter(function (mission) { return mission.complete === true; });
        return completed;
    };
    MissionControl.prototype.getIncomplete = function () {
        var incomplete = this.missionBoard.filter(function (mission) { return mission.complete !== true; });
        return incomplete;
    };
    MissionControl.getQuests = function (onSuccess) {
        $.ajax({
            type: "get",
            url: "/api/todo",
            success: onSuccess(),
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("ajax error occurred | code: " + xhr.status + " | message: " + thrownError);
            }
        });
    };
    MissionControl.addQuest = function (newQuest, onSuccess) {
        $.ajax({
            type: "put",
            data: { data: newQuest },
            url: "/api/todo",
            success: onSuccess(),
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("ajax error occurred | code: " + xhr.status + " | message: " + thrownError);
            }
        });
    };
    MissionControl.removeQuest = function (removeObj, onSuccess) {
        $.ajax({
            type: "delete",
            data: { object: removeObj },
            url: "/api/todo",
            success: onSuccess(),
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("ajax error occurred | code: " + xhr.status + " | message: " + thrownError);
            }
        });
    };
    return MissionControl;
}());
exports.MissionControl = MissionControl;
//# sourceMappingURL=missionModule.js.map