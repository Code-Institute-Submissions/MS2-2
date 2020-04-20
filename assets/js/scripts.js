//$(document).ready(function () {
   // $('#greeting').modal('show');
//});
$('#greeting').fadeOut(2000, function () {
    $(this).modal('hide');
});

$(document).ready(function () {
    $('#lightswitch').on("click", function () {
        if
            ($("body").hasClass("DayTime")) {
            $('body').removeClass("DayTime").addClass("afterDark");
            $('#lightswitch').removeClass("btn-dark").addClass("btn-light");
            $("#back3").hide();
            $("#back2").hide();
            $("hr").hide();
            $("#ad1").show();
            $('#lightswitch').text("After Dark");
            $("body").attr('id', 'dark');
            $("div.information").fadeOut("slow");

        }
        else {
            $('body').removeClass("afterDark").addClass("DayTime");
            $('#lightswitch').removeClass("btn-light").addClass("btn-dark");
            $("#ad1").hide();
            $("#back3").show();
            $("#back2").show();
            $("hr").show();
            $('#lightswitch').text("Day Time");
            $("body").attr('id', 'light');
            $("div.information").fadeIn("slow");
        }
    })
});


// maps code below
var APIkey = "AIzaSyDV2rXpc-RvQizNTihXs0xXtVik0nRkmE8";
var myData;

$.getJSON('assets/js/waypoints.json', function (data) {
    myData = (data);
});// adds JSON data to local variable
//Credit for JSON file to SophiaKnows/Appalachian Trail Database hosted by SophiaKnows
var marker;
var myLatLng;
var markerInfo;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 32.157, lng: -82.807 }
    });


    markerMaker(map);

};

function markerMaker(map) {
    for (i = 0; i < myData.length; i++) {
        var myLat = (myData[i].lat);
        var myLng = (myData[i].lon);
        myLatLng = { lat: myLat, lng: myLng };
        var titleTwo = myData[i].name;
        var markerInfo = myData[i];
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: titleTwo,});

        var infowindow = new google.maps.InfoWindow({
        content: markerInfo});

        marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
    })
    

        };

    
    


}


//function markerMessage(marker, markerInfo) {
   
    //});

  













