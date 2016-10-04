$.ajax({
	url: 'https://api.twitch.tv/kraken/channels/mychannel?channel[status]='+titleStr+'&_method=put',
	type: 'GET',
	contentType: 'application/json',
	dataType: 'jsonp',
	headers: {
	 'Authorization': 'OAuth TOKEN_HERE' // the "OAuth " is important too!
	},
	success: function(data) {
		console.log(data.status);
		console.log(data)
	}
});