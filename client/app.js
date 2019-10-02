

var cowlist = fetch('/api/cows',{method: 'GET', headers: {}, body: {name:cowName, description: cowDesc}})

var newCowName = document.getElementById("cowFormName").value;
var newCowDesc = document.getElementById("cowFormDesc").value;


document.getElementById("submit").addEventListener("click", function(){submitForm(newCowName, NewCowDesc)});

var submitForm = function(cowName, cowDesc) {
  fetch('/api/cows',{method: 'POST', headers: {}, body: {name:cowName, description: cowDesc}})
}

