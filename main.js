var $form = document.querySelector('form');
var $overlay = document.querySelector('.overlay');
var $entryBtn = document.querySelector('.entry-btn');

$entryBtn.addEventListener('click', addEntry);

$form.addEventListener('submit', submitEntry);

function submitEntry(event) {
  event.preventDefault();
  $overlay.className = 'overlay positioned hidden';

  var entryData = {
    dayOfTheWeek: $form.elements.dayOfTheWeek.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryId: data.nextId
  };
  data.nextId++;
}

function addEntry(event) {
  $overlay.className = 'overlay positioned';
}
