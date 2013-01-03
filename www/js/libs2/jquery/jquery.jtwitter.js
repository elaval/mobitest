(function( $ ){
	$.extend( {
		jTwitter: function( username, numPosts, fnk ) {
			var info = {};
			
			// If no arguments are sent or only username is set
			if( username == 'undefined' || numPosts == 'undefined' ) {
				return;
			} else if( $.isFunction( numPosts ) ) {
				// If only username and callback function is set
				fnk = numPosts;
				numPosts = 3;
			}
			
			var url = "http://twitter.com/status/user_timeline/"
				+ username + ".json?count="+numPosts+"&callback=?";

			$.getJSON( url, function( data ){
				//console.log (data);
				if( $.isFunction( fnk ) ) {
					fnk.call( this, data );
				}
			});
		}
	});
})( jQuery );