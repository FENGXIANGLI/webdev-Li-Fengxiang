var titleFld = $("#title");
var descriptionFld = $("#description");
var addBtn = $("#addBtn");
var todosUl = $("#todos");
todosUl
  .sortable()
  .draggable();

addBtn.click(addBtnHandler);

function addBtnHandler() {
  var titleStr = titleFld.val();
  var descriptionStr = descriptionFld.val();
  var id = (new Date()).getTime();

  var span = $("<span>X</span>").click(deleteNote);
  var note = $("<li>")
    .append(titleStr)
    .append(span);

  todosUl.append(note);
}

function deleteNote(event) {
  var todo = $(event.currentTarget).parent();
  todo.remove();
}
