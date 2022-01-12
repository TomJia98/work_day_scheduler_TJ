const currentDay = $("#currentDay");

const saveBtn = $(".material-icons saveBtn");

const currentHour = moment().format("H")-9;
var test =document.getElementById("9am");

const time9am = $("#9am-container");
const time10am = $("#10am-container");
const time11am = $("#11am-container");
const time12am = $("#12am-container");
const time1pm = $("#1pm-container");
const time2pm = $("#2pm-container");
const time3pm = $("#3pm-container");
const time4pm = $("#4pm-container");
const time5pm = $("#5pm-container");

const input9am = $("#9am");
const input10am = $("#10am");
const input11am = $("#11am");
const input12am = $("#12am");
const input1pm = $("#1pm");
const input2pm = $("#2pm");
const input3pm = $("#3pm");
const input4pm = $("#4pm");
const input5pm = $("#5pm");

const inputs = [
    input9am,
    input10am,
    input11am,
    input12am,
    input1pm,
    input2pm,
    input3pm,
    input4pm,
    input5pm
];


const timeBlocks = [
    time9am,
time10am,
time11am,
time12am,
time1pm,
time2pm,
time3pm,
time4pm,
time5pm
];





//setting up all the elements

currentDay.text(moment().format("dddd, MMMM Do"))

//sets the current day and month at the top of the page

function setBackground() {

    for (var i = 9; i < currentHour ; i++){
        var o = i - 9;
        timeBlocks[o].attr("class", "past");
}
for (var i = currentHour; i < 18; i++){
    var o = i - 9;
    timeBlocks[o].attr("class", "future");
}
    var currentBlock = currentHour - 9;
    timeBlocks[currentBlock].removeAttr("class");
timeBlocks[currentBlock].attr("class", "present");
};



$("i").on("click", function saveValues(event){
    // console.log(inputs[event.target.id].val());
    var x = parseInt(event.target.id);
    console.log(typeof(parseInt(x)));
    console.log(test.value);
    
});


console.log(currentHour);
setBackground();