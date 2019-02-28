$(function(){
	$(".typed").typed({
	strings: ["\"statically typed\" mean?", "\"compiled\" mean?", "\"low-level\" mean?" , "\"lazily evaluated\" mean?", "\"interpreted\" mean?"],

		typeSpeed: 60,
		backSpeed: 20,
		showCursor: true,
		loop:true,
		cursorChar: "|",

	});
});
$('body').on('click', function(){ window.location.href = "C:/Users/Liv/Desktop/PA Andover/Term 2/website1/about.html"});