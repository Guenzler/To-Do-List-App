function newItem() {
  //reading value from input field and adding new item to list
  let newLi = $('<li></li>');
  let inputText = $('input').val();
  newLi.append(inputText);

  //checking if value is empty 
  if (inputText === '') {
    alert('You must write something!');
  } else {
    $('#list').append(newLi);
    $('#input').val(''); // Reset input field
  }

  //crossing out an item from list
  function crossOut() {
    newLi.toggleClass('strike');
  }
  newLi.on('dblclick', crossOut);

  //adding delete button X
  let crossOutButton = $('<button class="crossOutButton">X</button>');
  newLi.append(crossOutButton);
  function deleteListItem() {
    newLi.addClass('delete');
  }
  crossOutButton.on('click', deleteListItem);

}

// make list sortable
$('#list').sortable();

//add list item on hitting enter key & prevent submission of form
$(document).on('keydown', function (event) {
  let keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    event.preventDefault();
    newItem();
  }
});
