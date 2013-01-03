// There usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.7.1.min',
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
    
    bootstrap: {
        deps: ["jquery"],
        exports: "Bootstrap"
    }
  },
  

});

require([
	"app"
	], 
	function(App) {
		//App.initialize();
	}
);