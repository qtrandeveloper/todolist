//create a function that runs whenever enter key is pressed
//add input to ul as li
//erase input
function addTask() {
  var task = document.getElementById("input").value;
  var taskList = document.getElementById("list");
  var li = document.createElement("LI");
  li.appendChild(document.createTextNode(task));
  taskList.appendChild(li);
  document.getElementById("input").value="";
  li.onclick = removeItem;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
      addTask();
    }
}

//if task clicked on, it will be removed from parent ul
function removeItem(e) {
e.target.parentElement.removeChild(e.target);
}
