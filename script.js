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

// renders the time blocks in JS instead of doing this in HTML
function render(start, end) {
  var container = $('#time-blocks');

  for (var i = start; i <= end ; i++) {
    var timeBlock = $(timeBlockTemplate); 
    var label = $('label', timeBlock);
    var textArea = $('textarea', timeBlock);
    var hour = (moment(i, 'h').format('h A'));
    label.text(hour); 
    textArea.attr('name', `time-${i}`);

    // saveBtn click listener
    $('.saveBtn', timeBlock).on('click', save);

    container.append(timeBlock);
    timeBlock.data('hour', i);
  } 
}

// pulls the local server to the DOM while also ensuring it remains on the time block after page refresh
function loadData() {
  $('.time-block').each(function(index, element) {
    const hour = $(element).data('hour');
    const data = localStorage.getItem(hour);
    $('textarea', $(element)).val(data);
  });
}

// timeBlock colors depending on the current time and block time
function blockColors() {
  var currentTime = moment().hour();

  $('.time-block').each(function (index, element) {
    const blockTime = $(this).data('hour');
    const textarea = $('textarea', $(this));
    if (blockTime < currentTime) {
      textarea.removeClass('future present');
      textarea.addClass('past');
    } else if (blockTime == currentTime) {
      textarea.removeClass('future past');
      textarea.addClass('present');
    } else {
      textarea.removeClass('present past');
      textarea.addClass('future');
    }
  })
}

// calls functions
$(document).ready(function() {
  setInterval(dateDisplay, 1000);
  render(9, 17);
  loadData(); 
  blockColors();
})

