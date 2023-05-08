// variables used throughout
var currentDateEl = $('#currentDay');
var currentTime;
var currentDate;

var blockColors;
var blockTime;
var showEvents;

var timeBlockTemplate = `<div class="row time-block">
<label class="col-md-1 hour"></label>
<textarea class="col-md-10" type="text"></textarea>
<button class="btn saveBtn col-12 col-md-1" id="btn-4pm"><i class="fas fa-save"></i></button>
</div>`;

// current date and time on Jumbotron
function dateDisplay() {
  var currentDate = moment().format('DD MMM YYYY [at] hh:mm:ss a');
  currentDateEl.text(currentDate);
}

function save() {
  // sibling HTML textarea attribute changes
  var event = $(this).siblings('textarea').val();
  // parent HTML id attribute 
  var time = $(this).parent().data('hour');
  // saves to local storage
  localStorage.setItem(time, event);
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
