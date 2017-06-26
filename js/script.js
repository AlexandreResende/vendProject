$(document).ready( () => {

	getQuote();

	$('.squareSection').on('mouseover', function(){

		let redColor = Math.round(Math.random() * 255);
		let blueColor =  Math.round(Math.random() * 255);
		let greenColor =  Math.round(Math.random() * 255);

		$(this).css('background', 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')');

	});

	$('.colorBlack').click( function() {

		let value = $(this).attr('value');

		if (value === '0'){
			$(this).toggleClass('colorGreen');
			$(this).toggleClass('colorBlack');
			$(this).attr('value', '1');
		} else {
			alert('Já está verde!');
		}
		
	});

	$('.colorWhite').click( function() {

		let value = $(this).attr('value');

		if (value === '0'){
			$(this).toggleClass('colorRed');
			$(this).toggleClass('colorWhite');
			$(this).attr('value', '1');
		} else {
			alert('Já está vermelho!');
		}
		
	});

});