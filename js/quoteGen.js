function getQuote(){

	$.ajax({
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type: 'POST',
			headers: {
				"X-Mashape-Key": "gcPuVOpglDmshtzOwHTp2VUlC2C6p1WKbexjsnS4eFKiOPMu6p",
				"Content-Type": "application/x-www-form-urlencoded",
				"Accept": "application/json"
			}
		})
		.done(function(data){
			console.log(data);
			$('.quote').html(data.quote);
		})
		.fail(function( xhr, status, error){
			console.log('Sorry, there was a problem!');
			console.log('Status: ' + status);
			console.log('Error: ' + error);
		})
		.always(function(){
			console.log('AJAX request to the server was successful.');
		});

}