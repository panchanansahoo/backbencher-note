/*var myCenter=new google.maps.LatLng(28.481442,77.0136513);

function initialize()
{
var mapProp = {
center:myCenter,
zoom:5,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map=new google.maps.Map(document.getElementById("map_canvas"),mapProp);

var marker=new google.maps.Marker({
position:myCenter,
animation:google.maps.Animation.BOUNCE
});

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Our Address"
});

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);*/



var markers = [
    {
        "title": 'Gurgaon',
        "lat": '28.4815327',
        "lng": '77.0158472',
        "description": '<strong>CORPORATE OFFICE</strong><br>Plot no. 76 P, Part - III,<br> Sector - 5, Gurgaon,<br> Gurgaon, Haryana - 122001'
    },
    {
        "title": 'Gurgaon',
        "lat": '28.428615',
        "lng": '76.869424',
        "description": '<strong>COLLEGE CAMPUS</strong><br>Khentawas,<br> Farrukh Nagar - 122506,<br> Gurgaon, Haryana'
    }
    ];

window.onload = function() {
    LoadMap();    
}
function LoadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            animation: google.maps.Animation.BOUNCE,
            map: map,
            title: data.title
        });


        //Attach click event to the marker.
        (function(marker, data) {
            google.maps.event.addListener(marker, "click", function(e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                infoWindow.setContent("<div style = ''>" + data.description + "</div>");
                infoWindow.open(map, marker);
            });
        })(marker, data);

    }
}