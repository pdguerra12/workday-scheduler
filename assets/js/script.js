//starting global variables
var currentTime = moment().hours();
var now = moment().format("dddd, MMMM Do, YYYY");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");

$("#currentDay").text(now);