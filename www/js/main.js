// There usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.7.1.min',
    jquery_mobile: 'libs/jquery_mobile/jquery.mobile-1.1.1.min',
    'jquery_mobile-config': 'libs/jquery_mobile/jquery.mobile-config',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    bootstrap: 'libs/bootstrap/bootstrap.min',
    json2: 'libs/json2/json2',
    text: 'libs/require/text',
    templates: '../templates'
    
  },
  // shim - defines libraries that are not defined as require modules (not containing "define")
  shim: {
    backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
    },

    underscore: {
        exports: "_"
    },
    
    'jquery_mobile-config': ['jquery'],
    
    jquery_mobile: ['jquery','jquery_mobile-config']
  },
  

});

require([
	"app",
  	'jquery',
  	'app',
  	'jquery_mobile'
	], 
	function(App) {
		App.initialize();
	}
);

