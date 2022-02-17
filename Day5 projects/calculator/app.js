var $numbers = document.getElementsByClassName("number");
var $operators = document.getElementsByClassName("operator");
var $clearBtn = document.getElementById("clear");
var $equalBtn = document.getElementById("equal");
var $result = document.getElementById("result");

var displaying = (event) => {
  var number = event.target.innerText;
  $result.innerText += number;
};

// Displaying Numbers
for (var i = 0; i < $numbers.length; i++) {
  $numbers[i].addEventListener("click", displaying);
}

// Displaying Operators
for (var i = 0; i < $operators.length; i++) {
  $operators[i].addEventListener("click", displaying);
}

// Clearing Result
$clearBtn.addEventListener("click", function () {
  $result.innerText = "";
});

// For Evaluating
$equalBtn.addEventListener("click", function () {
  if ($result.innerText === "") {
    alert("Your Input is empty");
  } else {
    var value = eval($result.innerText);
    $result.innerText = value;
  }
});
