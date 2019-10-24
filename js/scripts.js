$(document).ready(function() {
  var age = parseInt(prompt("Age:"));
  while (age >= 150) {
    var age = parseInt(prompt("No your real age:"));
  }
  if (age < 18) {
    $("#underage").show();
  } else if (age < 150) {
    $("#ofage").show();
  } else {
    alert("error");
  }
});
