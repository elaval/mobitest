define([
	'underscore',
	'backbone',
	'jquery',
	'text!templates/menu/menu.html',
	], function(_, Backbone,$, myTemplate){
		var MenuView = Backbone.View.extend({

		
		// Se llama al iniciar la vista
		initialize: function() {
			// Usar _.bindAll para todas las funciones locales que utilicen "this" haciendo referencia al objeto de esta vista
			_.bindAll(this, "render"); // Needed for including "this" context in functions
			
			// template - función de underscore que permite generar plantillas html con datos de un objeto javascript       
			this.template = _.template(myTemplate);     
			this.render();   

		},
		
		
		// Render se llama para cargar la representación en el DOM
		// Se carga html en el elemento del DOM pasado como parámetro 'el' al crear la vista
		// Ej. : vista = new EscuelasView({el:$("#contenedor_escuelas")})
		render: function() {
			// Importante
			// usar variables locales ya que "this" se interpreta en forma local al interior de otras funciones (ej. en each)
			var template = this.template;
			var myelement = this.$el;

 			var html = template({});
 			myelement.find("#main_menu_list").append(html);

				

			// Importante, retornar this, para poder utilizar la llamada en un pipe.
			// Ejemplo:  $("body").append(vista.render().$el)
			return this
		}

	});

return MenuView;
});