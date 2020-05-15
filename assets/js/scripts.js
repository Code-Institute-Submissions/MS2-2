//$(document).ready(function () {
// $('#greeting').modal('show');
//});
$('#greeting').fadeOut(2000, function () {
    $(this).modal('hide');
});
$("#ad1").hide();
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
        zoom: 8,
        center: { lat: 34.626, lng: -84.193 }
    });


    markerMaker(map);

};

function markerMaker(map) {
    for (i = 0; i < myData.length; i++) {
        let myLat = (myData[i].lat);
        let myLng = (myData[i].lon);
        myLatLng = { lat: myLat, lng: myLng };
        let titleTwo = myData[i].name;
        let marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: titleTwo,
        });
        let markerInfo = '<div class="customMarker"><h4>' + myData[i].name + '<button id="add" ><i class="fas fa-plus-circle add"></i></button>' + '</h4><h6> distance to Springer Mountain: ' + myData[i]["to spgr"] + '</h6><h6> distance to Mt. Katahdin: ' + myData[i]["to ktd"] + '</h6></div>';
        let infowindow = new google.maps.InfoWindow({
            content: markerInfo
        });

        marker.addListener('click', function () {
            infowindow.open(marker.get('map'), this);

        $('.add').on('click', function (e) {
            let markerContent = document.getElementById('#add');


            let li = "<li>" + markerContent + "</li>";
            //console.log(li);
            $('#list').append(li);

            });
        let e = document.getElementById("#add") ;
    });




};


};

// start list functions




















