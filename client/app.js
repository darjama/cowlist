$.get( "/api/cows", function( data ) {
  $( ".result" ).html( data );
  console.log( data);
});


//var newCowName = document.getElementById("cowFormName").value;
//var newCowDesc = document.getElementById("cowFormDesc").value;


//document.getElementById("submit").addEventListener("click", function(){submitForm(newCowName, NewCowDesc)});

//var submitForm = function(cowName, cowDesc) {
  $.post( "/api/cows",  $( "#cowform" ).serialize(), function( data ) {
    $( ".result" ).html( data );
    console.log( data);
  });
//}