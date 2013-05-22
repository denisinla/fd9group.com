<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Maps: Netherlands - FD9 Group</title>
<meta name="author" content="NCLUSIVE, inc., Los Angeles, CA" />
<meta name="copyright" content="Copyright &amp;copy; 2012 NCLUSIVE, inc., Los Angeles, CA. All Rights Reserved" />
<meta name="publisher" content="NCLUSIVE, inc., Los Angeles, CA" />
<meta name="organization" content="NCLUSIVE, inc., Los Angeles, CA" />
<meta name="robots" content="noindex, nofollow" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="icon" href="//images/other/favicon.png" type="image/x-icon" />
<link rel="stylesheet" href="/css/design.css" type="text/css" />
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
function initialize() {
  var styleArray = [
      {
      featureType: 'all',
   }
  ];

  var mapOptions = {
  zoom: 16,
  center: new google.maps.LatLng(52.45779,6.056527),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: styleArray
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'),
  mapOptions);
  
  var image = '/images/maps/bg.png';
  var myLatLng = new google.maps.LatLng(52.45779,6.056527);
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
<div id="map_bg"><div id="map_canvas"></div></div>
</body>
</html>
