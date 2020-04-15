$(document).ready(function(){
    $('#greeting').modal('show');
    });
$('#greeting').fadeOut(2000,function() {
  $(this).modal('hide');
});
//$( "#greeting" ).click(function() {
  //$( "#greeting" ).fadeOut( "slow" );
//});
$(document).ready(function(){
    $('#lightswitch').on ("click", function(){
          if 
          ($("body").hasClass("DayTime")){
          $('body').removeClass("DayTime").addClass("afterDark");
          $('#lightswitch').removeClass("btn-dark").addClass("btn-light");
          $('#lightswitch').text("After Dark");
          $("body").attr('id', 'dark');
          $("div.information").fadeOut("slow");
          //$("div").
          }
        else{
          $('body').removeClass("afterDark",).addClass("DayTime");
          $('#lightswitch').removeClass("btn-light").addClass("btn-dark");
          $('#lightswitch').text("Day Time");
          $("body").attr('id', 'light');
           $("div.information").fadeIn("slow");
    }
    })});


    // maps code below
	var APIkey = "AIzaSyDV2rXpc-RvQizNTihXs0xXtVik0nRkmE8";

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 40.975, lng: -75.139 }
        
        });
    }

// search and return functions for waypoints.JSON

var myData;


$.getJSON('assets/js/waypoints.json', function(data) {    
 myData = (data);
});// adds JSON data to local array
//Credit for JSON file to SophiaKnows/Appalachian Trail Database hosted by SophiaKnows

    


