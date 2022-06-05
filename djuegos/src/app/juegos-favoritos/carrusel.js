'use strict'
$(".slide-track").hover(function() {
    console.log("mouse over");
    $(this).toggleClass("freeze");
});