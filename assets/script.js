const currentDay = $("#currentDay");

const saveBtn = $(".material-icons saveBtn");

const currentHour = moment().format("H");
const resetDay = moment().format("d");

const time9am = $("#9am-container");
const time10am = $("#10am-container");
const time11am = $("#11am-container");
const time12am = $("#12am-container");
const time1pm = $("#1pm-container");
const time2pm = $("#2pm-container");
const time3pm = $("#3pm-container");
const time4pm = $("#4pm-container");
const time5pm = $("#5pm-container");

const input9am = $("#9AM");
const input10am = $("#10AM");
const input11am = $("#11AM");
const input12am = $("#12AM");
const input1pm = $("#1PM");
const input2pm = $("#2PM");
const input3pm = $("#3PM");
const input4pm = $("#4PM");
const input5pm = $("#5PM");
//adding all the elements needed from the DOM

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
//creating arrays for the needed DOM elements


currentDay.text(moment().format("dddd, MMMM Do"))
localStorage.setItem("todayIs", resetDay);

//sets the current day and month at the top of the page, and saves what day it is into localStorage

function setBackground() {

    for (var i = 9; i < currentHour ; i++){
        var o = i - 9;
        timeBlocks[o].addClass("past");
}
for (var i = currentHour; i < 18; i++){
    var o = i - 9;
    timeBlocks[o].addClass("future");
}
    var currentBlock = currentHour - 9;
    timeBlocks[currentBlock].removeClass("future");
timeBlocks[currentBlock].addClass("present");
};
//changes the classes of the timeblocks according to the current hour

function hasHourChanged(){
    if(currentHour != moment().format("H")){
        setBackground;
    };
    if(resetDay != moment().format("d")){
        localStorage.clear();
        location.reload();
}}
//checks if either the day or hour has changed. if so, will update the page accordingly (resets storage on new day)

function addLocalStorage(){
    for (var i = 0; i < 9; i++){
inputs[i].val(localStorage.getItem(i));
}};
//adds the values stored in local storage to the pages input fields

setInterval(hasHourChanged,1000)
// each second, checks if either the day or hour has changed. if so, will update the page accordingly (resets storage on new day)


$("i").on("click", function saveValues(event){
    var x = parseInt(event.target.id);
    localStorage.setItem(x, inputs[x].val())
});
//on clicking the save icon, saves the ajacents inputs field to localstorage


setBackground();
addLocalStorage();
//sets background and input fields on page load