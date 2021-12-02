//starting global variables
var presentTime = moment().hours();
var now = moment().format("dddd, MMMM Do, YYYY");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");

$("#currentDay").text(now);
// applying the respective class depending on the hour of the day.
function ColorEl() {
    timeBlock.each(function() {
        var hour = $(this).attr("id");

        if(presentTime > hour) {
            $(this).addClass("past");
        } else if (presentTime == hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

ColorEl();
// function for when you click on the save button, text can be saved to local storage.
saveBtn.on("click", function() {
    var taskItemEl = $(this).siblings("textarea").val();
    var id = $(this).attr("id");
    localStorage.setItem(id, taskItemEl);
    
    getTasks();
});
// function to pull all of the collected info for each row.
function getTasks() {
    for (var i = 9; i < 18; i++) {
        var task = localStorage.getItem(i);
        $("#" + i).text(task);
    }
}
getTasks();
