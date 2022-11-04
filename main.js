var $form = document.querySelector('form');
var $overlay = document.querySelector('.overlay');
var $entryBtn = document.querySelector('.entry-btn');

$entryBtn.addEventListener('click', addEntry);

$form.addEventListener('submit', submitEntry);

function submitEntry(event) {
  event.preventDefault();
  $overlay.className = 'overlay positioned hidden';
}

function addEntry(event) {
  $overlay.className = 'overlay positioned';
}
