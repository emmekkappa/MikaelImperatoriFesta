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

// Scrollify applied to homepage only through classes
/*$(function () {
	$.scrollify({
		section: ".homepage"
	});
});
$(function () {

	$.scrollify({
		section: ".homepage",
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
		before: function () {},
		after: function () {},
		afterResize: function () {},
		afterRender: function () {}
	});
});


$('.link').click(function () {
	$.scrollify.move($(this).attr('href'))
});*/

// Tooltip activation
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

// Change nav bar colour 

const isScrollSnapActive = $('main').hasClass('work'); // controlliamo se siamo dentro una pagina con lo scrollSnap
const $scrollElement = $(isScrollSnapActive ? 'main' : window); // se scrollSnap ascoltiamo main, altrimenti window

const stickyOffset = $('#MyNav').offset(); // prendo l'offset della nav {top, left, bottom right}
const $contentDivs = $('section'); // query selector per tutte le sezioni

updateNavbarColor(); // al caricamento, quando questa linea viene letta, eseguiamo pure la funzione
$scrollElement.scroll(updateNavbarColor); // allo scroll eseguiamo la funzione

function updateNavbarColor() { // qui eseguo la funzione solo quando c'è uno scroll dentro main
$contentDivs.each(function(k) {
const _thisOffset = $(this).offset();
const _actPosition = _thisOffset.top - $(window).scrollTop();
if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
const isLightSection = $(this).hasClass("light");

$("#MyNav")
.removeClass("light dark")
.addClass(isLightSection ? "light" : "dark");

return false;
}
});
}


// Smooth scroll

/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/

// Sliding underline nav

const menu = document.querySelector(".navbar-nav");
menu.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains("nav-link")) {
    menu.style.setProperty(
      "--underline-width",
      `${event.target.offsetWidth}px`
    );
    menu.style.setProperty(
      "--underline-offset-x",
      `${event.target.offsetLeft}px`
    );
  }
});

menu.addEventListener("mouseleave", () =>
  menu.style.setProperty("--underline-width", "0")
);

$( '#MyNav .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
