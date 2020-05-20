
// maps code below
var APIkey = "AIzaSyDV2rXpc-RvQizNTihXs0xXtVik0nRkmE8";
//var myData;
$.getJSON('assets/js/waypoints.json', function (data) {
    myData = (data);
});// adds JSON data to local variable
//Credit for JSON file to SophiaKnows/Appalachian Trail Database hosted by SophiaKnows
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
        let buttonBoy = '<button onclick="addMe(event)">List Me!</button>';
        let marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            id: i,
            title: titleTwo,
        });
        let markerInfo = '<div  class="customMarker"><h4>' + myData[i].name  + ' ' + '</h4><h6> distance to Springer Mountain: ' + myData[i]["to spgr"] + '</h6><h6> distance to Mt. Katahdin: ' + myData[i]["to ktd"] + '</h6></div> <div>'   + buttonBoy + '</div>';
        let InfoWindow = new google.maps.InfoWindow({
            content: markerInfo
        });

     marker.addListener('click', function () {
            InfoWindow.open(marker.get('map'), this);
        });
    }
}
function addMe(event){
    //special thanks to Samantha_CI at tutor support for helping me through this!  she's awesome.
    let answer = '<div>' + event.target.parentElement.previousSibling.previousSibling.innerHTML + '<button onclick="removeMe(event)">Remove</button>' + '</div>';
    let li = '<li>' + answer + '</li>'
    $('#list').append(li);
}
function removeMe(event){   
    $(event.target.parentNode.parentNode).remove();  
}














