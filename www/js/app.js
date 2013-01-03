// Filename: app.js
define([
	"jquery",
	"views/menu/menuView"
	], 
	function($, MenuView) {
		var initialize = function() {
			
			// Genera vistas para la carrera respectiva
			var view1 = new MenuView({el:$("#home")});
		}
		
		return { 
			initialize: initialize
		};
	}
);
		
