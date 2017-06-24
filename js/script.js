$(document).ready( () => {

	$('.colorBlack').click( function() {
		console.log(this);
		$(this).toggleClass('colorGreen');
		$(this).toggleClass('colorBlack');
	});

	$('.colorWhite').click( function() {
		console.log(this);
		$(this).toggleClass('colorRed');
		$(this).toggleClass('colorWhite');
	});

});

//check value of the div before toggling class

//insert a for lopp to dinamically insert the divs and its
//corresponding colors

//function generate divs
//function insertClasses(index)