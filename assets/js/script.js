//starting global variables
var presentTime = moment().hours();
var now = moment().format("dddd, MMMM Do, YYYY");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");

$("#currentDay").text(now);

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