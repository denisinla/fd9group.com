//Functions
$(document).ready(function () {


//Shop Slider -
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash;
        $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 60
    }, 1000, 'swing', function () {
    });
});



//Stay In Touch - Close
$('.stay_in_touch_close_btn').click(function(){
	$('.stay_in_touch').animate({ 'bottom': "-250px" }, 800 );
	$('.stay_in_touch').delay(400).animate({ 'height': "0px" }, 800 );
});



//Stay In Touch - Waypoint
$('.about').waypoint(function(event, direction) {
	   if (direction === 'down') {
	    $('#stay_in_touch').animate({
	    		'bottom': '0',
		  }, 800, function() {
		  });
	   }
	   else {
	    $('#stay_in_touch').animate({
	    		'bottom': '-250px',
		  }, 800, function() {
		  });
	   }
});




//Brands - Wol
$('#brand_logos_btn_wol').click(function(){
	$("#brand_logos_icon_wol").removeClass("brand_logos_icon_inactive").addClass("brand_logos_icon");	
	$("#brand_logos_icon_beso").removeClass("brand_logos_icon").addClass("brand_logos_icon_inactive");
  $("#brand_logos_arrow_wol").removeClass("brand_logos_arrow_inactive").addClass("brand_logos_arrow");
  $("#brand_logos_arrow_beso").removeClass("brand_logos_arrow").addClass("brand_logos_arrow_inactive");
	$('#brand_content_wol').animate({ width: "100%" }, 0 );
	$('#brand_content_wol').delay(200).animate({ opacity: "1" }, 400 );
  $('#brand_content_beso').animate({ opacity: "0" }, 400 );
  $('#brand_content_beso').delay(200).animate({ width: "0" }, 0 );   
  $('#brand_look_inside_wol').animate({ width: "100%" }, 0 );
  $('#brand_look_inside_wol').delay(200).animate({ opacity: "1" }, 400 );
  $('#brand_look_inside_beso').animate({ opacity: "0" }, 400 );
  $('#brand_look_inside_beso').delay(200).animate({ width: "0" }, 0 );   
});
 

//Brands - besobeso
$('#brand_logos_btn_beso').click(function(){
  $("#brand_logos_icon_wol").removeClass("brand_logos_icon").addClass("brand_logos_icon_inactive");
  $("#brand_logos_icon_beso").removeClass("brand_logos_icon_inactive").addClass("brand_logos_icon");
  $("#brand_logos_arrow_wol").removeClass("brand_logos_arrow").addClass("brand_logos_arrow_inactive");
  $("#brand_logos_arrow_beso").removeClass("brand_logos_arrow_inactive").addClass("brand_logos_arrow");
  $('#brand_content_wol').animate({ 'opacity': "0" }, 400 );
  $('#brand_content_wol').delay(200).animate({ 'width': "0" }, 0 );   
  $('#brand_content_beso').animate({ 'width': "100%" }, 0 );
  $('#brand_content_beso').delay(200).animate({ 'opacity': "1" }, 400 );
  $('#brand_look_inside_wol').animate({ 'opacity': "0" }, 400 );
  $('#brand_look_inside_wol').delay(200).animate({ 'width': "0" }, 0 );   
  $('#brand_look_inside_beso').animate({ 'width': "100%" }, 0 );
  $('#brand_look_inside_beso').delay(200).animate({ 'opacity': "1" }, 400 );
});



//Maps - USA
$('#usa_btn').click(function(){
  $("#usa_btn").removeClass("usa_btn_inactive").addClass("usa_btn_active");
  $("#holland_btn").removeClass("holland_btn_active").addClass("holland_btn_inactive");
	$('.usa_address').animate({ 'width': "420px" }, 400 );
	$('.holland_address').animate({ 'width': "0" }, 400 );
  $('#map_usa').animate({ 'left': "-5%" }, 0 );
  $('#map_usa').delay(200).animate({ 'opacity': "1" }, 400 );
  $('#map_holland').animate({ 'opacity': "0" }, 400 );
  $('#map_holland').delay(200).animate({ 'left': "-100%" }, 0 );   
});
 

//Maps - Holland
$('#holland_btn').click(function(){
  $("#usa_btn").removeClass("usa_btn_active").addClass("usa_btn_inactive");
  $("#holland_btn").removeClass("holland_btn_inactive").addClass("holland_btn_active");
	$('.usa_address').animate({ 'width': "0" }, 400 );
	$('.holland_address').animate({ 'width': "420px" }, 400 ); 
  $('#map_usa').animate({ 'opacity': "0" }, 400 );
  $('#map_usa').delay(200).animate({ 'left': "-100%" }, 0 );   
  $('#map_holland').animate({ 'left': "-5%" }, 0 );
  $('#map_holland').delay(200).animate({ 'opacity': "1" }, 400 );
});





//Team More
$('.team_more').click(function(){
	$('#team_block_more').animate({ 'height': "300px" }, 400 );
	$('.team').animate({ 'height': "750px" }, 400 );
	$('.team_more').css({ 'display': "none" } );
});
 




//Brands - Wol
$('.slider1').bxSlider({
    slideWidth: 500,
    minSlides: 5,
    maxSlides: 5,
    slideMargin: 7,
    moveSlides: 1,
		pager: false,
		controls: true,
		auto: false
});

//Brands - besobeso
$('.slider2').bxSlider({
    slideWidth: 500,
    minSlides: 5,
    maxSlides: 5,
    slideMargin: 7,
    moveSlides: 1,
		pager: false,
		controls: true,
		auto: false
});

//About Us - Corporate
$('.about-us').bxSlider({
    mode: 'fade',
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    moveSlides: 1,
    pager: true,
    controls: false,
    pagerCustom: '#url-pager',
});

//Brands - besobeso
$('.slider3').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    moveSlides: 1,
		pager: true,
		controls: false,
		auto: true,
		pause: 6000
});


//Feature 
$('.feature').bxSlider({
    slideWidth: 2400,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    moveSlides: 1,
    pager: true,
    controls: false,
    auto: true,
    pause: 8000
});


//Fancybox
$('.fancybox').fancybox();

//Fancybox - Team
$('.iframe').fancybox({
	minWidth : '900px',
	fitToView : 'false',
	autoResize : 'false'
});


$('.read-more-content').addClass('hide');

$('.read-more-toggle').on('click', function() {
  $(this).next('.read-more-content').toggleClass('hide');

});
$('.read-more-one').addClass('hide');

$('.read-more-toggle-one').on('click', function() {
  $(this).next('.read-more-one').toggleClass('hide');

});





});













