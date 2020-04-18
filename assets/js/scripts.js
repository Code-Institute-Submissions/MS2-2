$(document).ready(function () {
    $('#greeting').modal('show');
});
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
            $('#lightswitch').text("After Dark");
            $("body").attr('id', 'dark');
            $("div.information").fadeOut("slow");

        }
        else {
            $('body').removeClass("afterDark").addClass("DayTime");
            $('#lightswitch').removeClass("btn-light").addClass("btn-dark");
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
function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 32.157, lng: -82.807 } 
    });
    markerMaker(map);
};

function markerMaker(map){
    for(i = 0; i < myData.length; i++) {
        var myLatLng = "{ lat:" + myData[i].lat + ", lng:" + myData[i].lon + "}";
        var myLatLng2 = myLatLng.parseFloat(myLatLng);
        var titleTwo = myData[i].name.toString();
        var marker = new google.maps.Marker({
            position: myLatLng2,
            map: map,
            title: titleTwo,
        });

    };

}

    












