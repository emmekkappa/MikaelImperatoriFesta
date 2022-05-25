var slideCount = jQuery(".slide").length;
if (slideCount <= 3) {
	// clone element
	jQuery(".slider").children().clone(true, true).appendTo(".slider");
}
$('.slider').slick({
	infinite: true,
	useTransform: true,
	centerMode: true,
	centerPadding: '10px',
	focusOnSelect: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	cssEase: 'ease',
	asNavFor: '.slider-icon',
	dots: false,
	arrows: false,
	vertical: true,
	autoplay: true
});
var slideCountMobile = jQuery(".slide").length;
if (slideCountMobile <= 3) {
	// clone element
	jQuery(".slider-mobile").children().clone(true, true).appendTo(".slider-mobile");
}
$('.slider-mobile').slick({
	infinite: true,
	useTransform: true,
	centerMode: true,
	centerPadding: '10px',
	focusOnSelect: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	cssEase: 'ease',
	asNavFor: '.slider-icon',
	dots: false,
	arrows: false,
	vertical: true,
	autoplay: true
});
$('.slider-icon').slick({
	infinite: true,
	useTransform: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 700,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.slider',
	dots: false,
	arrows: false,
	focusOnSelect: true
});

// Scrollify applied to homepage only
/*jQuery(document).ready(function($) {
  if($('section.homepage').length) {

    $.scrollify({ 
      section : ".homepage",
      sectionName: "section-name",
      interstitialSection: "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset: 0,
      scrollbars: true,
      target: "html,body",
      standardScrollElements: false,
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll: true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {},
    });

  } 
});*/


// Scrollify applied to homepage only through classes
$(function () {
	$.scrollify({
		section: ".homepage"
	});
});
$(function () {

	$.scrollify({
		// section should be an identifier that is the same for each section
		// A selector for the sections.
		section: ".homepage",
		// Scrollify lets you define a hash value for each section.
		// This makes it possible to permalink to particular sections.
		// This is set as a data attribute on the sections.
		// The name of the data attribute is defined by 'sectionName'.
		sectionName: "section-name",
		// A CSS selector for non-full-height sections, such as a header and footer.
		interstitialSection: "",
		// Define the easing method.
		easing: "easeOutExpo",
		// Scrolling speed in milliseonds
		scrollSpeed: 1100,
		// A distance in pixels to offset each sections position by.
		offset: 0,
		// A boolean to define whether scroll bars are visible or not.
		scrollbars: true,
		// Target container
		target: "html,body",
		// A string of selectors for elements that require standard scrolling behaviour.
		standardScrollElements: false,
		// A boolean to define whether Scollify assigns a height to the sections.
		setHeights: true,
		// Allows scrolling over overflowing content within sections
		overflowScroll: true,
		// Updates the browser location hash when scrolling through sections
		updateHash: true,
		// Allows to handle touch scroll events
		touchScroll: true,
		// callbacks
		before: function () {},
		after: function () {},
		afterResize: function () {},
		afterRender: function () {}
	});
});


$('.link').click(function () {
	$.scrollify.move($(this).attr('href'))
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

// Change nav bar colour 

var stickyOffset = $('#MyNav').offset();
var $contentDivs = $('section');
$(document).scroll(function() {
    $contentDivs.each(function(k) {
        var _thisOffset = $(this).offset();
        var _actPosition = _thisOffset.top - $(window).scrollTop();
        if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
            $("#MyNav").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
            return false;
        }
    });
});

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sliding underline nav

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#MyNavBar");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".active").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#MyNavBar li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
});
