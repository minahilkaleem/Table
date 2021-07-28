function create_tr(table_id) {
  let table_body = document.getElementById(table_id),
    first_tr = table_body.firstElementChild
    tr_clone = first_tr.cloneNode(true);

  table_body.append(tr_clone);
  clean_first_tr(table_body.firstElementChild);
}

function remove_tr(This) {
  if(This.closest('tbody').childElementCount == 1)
  {
    alert("You Don't have Permit to Delete this?")
  }
  else
  {
  This.closest('tr').remove();
  }
}

var current_user_count;

function addUser(){
   current_user_count = parseInt($('td').last().attr('data-id'));
   current_user_count +=1;
   $("element").append('<td data-id="current_user_count"></td>');
}

for (let i = 1; i < 5; i++) {
   id = i;
  document.getElementsByClassName("form_control").innerHTML = id;
}

