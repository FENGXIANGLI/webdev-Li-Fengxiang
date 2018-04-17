var titleFld = document.getElementById("title");
var descriptionFld = document.getElementById("description");
var addBtn = document.getElementById("addBtn");
var todosUl = document.getElementById("todos");
addBtn.onclick = addBtnHandler;

function addBtnHandler() {
  var titleStr = titleFld.value;
  var descriptionStr = descriptionFld.value;
  var id = (new Date()).getTime();
  var note = "<li id='"+id+"'>"+titleStr+"<span onclick=\"deleteNote('"+id+"')\">x</span></li>";
  todosUl.insertAdjacentHTML("beforeend", note);
}

function deleteNote(id) {
  var todo = document.getElementById(id);
  todo.remove();
}
