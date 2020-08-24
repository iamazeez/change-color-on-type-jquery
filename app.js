$(document).ready(function(){

 $('#input').on("keyup",function(e){
     e.preventDefault();
 
    var colorcode = $('#input').val();

    $("#input").css("border-color",colorcode);

    $("#box").css("background-color",colorcode);

 });

});