//<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV2rXpc-RvQizNTihXs0xXtVik0nRkmE8&callback=initMap"></script>
//Maps API 

$(document).ready(function() {
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.975, lng: -75.139 },
            zoom: 7
        });
    };
})