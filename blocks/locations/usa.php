<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name='robots' content='noindex,nofollow'>
<link rel="icon" href="/images/other/favicon.png" type="image/x-icon" />
<link type="text/css" href="/css/design.css" rel="stylesheet" />
<link type="text/css" href="/css/fonts.css" rel="stylesheet" />
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
function initialize() {
  var styleArray = [
      {
      featureType: 'all',
	  stylers: [
      { hue: "#bfbcb2" },
      { saturation: -88 },
      { lightness: 51 }
     ]
   }
  ];

  var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(34.062101,-118.342228),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: styleArray,
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: true,
  };


  var map = new google.maps.Map(document.getElementById('map_canvas'),
  mapOptions);
  
  var image = '/images/map/icon.png';
  var myLatLng = new google.maps.LatLng(34.062101,-118.342228);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="map_canvas"></div>
</body>
</html>
