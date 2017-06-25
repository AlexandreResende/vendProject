$(document).ready( () => {

	$('.colorBlack').click( function() {

		let value = $(this).attr('value');

		if (value === '0'){
			$(this).toggleClass('colorGreen');
			$(this).toggleClass('colorBlack');
			$(this).attr('value', '1');
		} else {
			alert('Color already changed!');
		}
		
	});

	$('.colorWhite').click( function() {

		let value = $(this).attr('value');
		
		if (value === '0'){
			$(this).toggleClass('colorRed');
			$(this).toggleClass('colorWhite');
			$(this).attr('value', '1');
		} else {
			alert('Color already changed!');
		}
		
	});

});

//check value of the div before toggling class

//insert a for lopp to dinamically insert the divs and its
//corresponding colors

//function generate divs
//function insertClasses(index)