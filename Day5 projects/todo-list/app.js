var input = document.getElementById("input");
var button = document.getElementById("add");
var listContainer = document.getElementById("lists");

// Create "li" element and append li to list
button.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = input.value;

  listContainer.appendChild(li);
  input.value = "";
});
