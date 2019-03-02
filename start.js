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
$('body').on('click', function(){ window.location.href = "about.html"});
