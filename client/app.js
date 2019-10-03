// $.get( "/api/cows", function( data ) {
//   $( ".result" ).html( data );
//   console.log( data);
// });


//var newCowName = document.getElementById("cowFormName").value;
//var newCowDesc = document.getElementById("cowFormDesc").value;


//document.getElementById("submit").addEventListener("click", function(){submitForm(newCowName, NewCowDesc)});

//var submitForm = function(cowName, cowDesc) {
$( "#cowForm").submit(function( event ) {
  event.preventDefault();

var $form = $( this ),
term = $form.find( "input[name='s']").val(),
url = $form.attr("action");

$.ajax({
  contentType: 'application/json; charset=utf-8',
  data: JSON.stringify({s:term}),
  dataType: 'json',
  success: function(data){
    app.log("posted to server");
  },
  error: function(){
    app.log("post failed");
  },
  type: 'POST',
  url: url
 });


  });