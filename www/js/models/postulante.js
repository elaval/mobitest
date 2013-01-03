// Filename: models/postulante
define([
  'underscore',
  'backbone',
], function(_, Backbone){

	var Postulante = Backbone.Model.extend({
		defaults : {
			rut: "18485498",
		},

		initialize : function() {

		},
				
		url: function() {
			return "http://mineducmovilservices.mineduc.cl/mineduc.svc/psu/resultado/"+this.get('rut')+"?callback=?";
		},

		// comparaVeriones
		// Retorna la version (en formato fecha "MM/DD/YY") que es mayor
		comparaVersiones: function(version1, version2) {
			//version1 & version2 son marcas de versión en formato Fecha "MM/DD/YY"

			version1Split = version1.split("/");
			version2Split = version2.split("/");

			version1Date = new Date();
			version2Date = new Date();

			version1Date.setFullYear(version1Split[2],version1Split[0]-1,version1Split[1]);
			version2Date.setFullYear(version2Split[2],version2Split[0]-1,version2Split[1]);

			if (version1Date > version2Date) {
				return version1;
			} else {
				return version2;
			};

		},
		
		parse: function(response){
			var newpostulante = {};
			newpostulante.nombre = response.nombre;
			newpostulante.full_rut = response.rut;



			var resultados = {};  // Objeto con resultados de distintos años
			var anios = [];		  // Arreglo con años para los cuales hay datos
			var mayor_anio = 0;	  // Mayor año con datos

			// Genera un nuevo objeto del tipo 
			// {'2012': {'Lenguaje': 550,
			//     		'Matemática':600,
			//			'version': '01/01/2012',
			//			...}
			// }

			var me = this;  // Para hacer referencia al modelo al interior de otras funciones

			// Recorre arreglo con resultados de diferentes años
			_.each(response.resultados, function(resultados_anio){
				version_mayor = "01/01/0001";  // Cada dato tiene asociado un número de versión - en formato fecha

				// Genera objeto con resultados: {'Lenguaje': 550,'Matemática':600, ...}
				var resultado_anual = {'anio':'', 'Lenguaje':'','Matemática':'', 'Ciencias':'', 'NEM':'', 'Historia':'', };
				resultado_anual.anio = resultados_anio.anio;

				anios.push(resultados_anio.anio);  //Guarda lista con años para los que hay resultados

				if (resultado_anual.anio > mayor_anio) {mayor_anio = resultado_anual.anio};

				_.each(resultados_anio.evaluaciones, function(prueba) {
					resultado_anual[prueba.etiqueta] = prueba.puntaje;

					// Determina cual es la mayor version enter las versiones asociadas a las pruebas
					version_mayor = me.comparaVersiones(version_mayor, prueba.version);
				});

				// Registra la mayor versión
				resultado_anual.version = version_mayor;

				resultados[resultado_anual.anio] = resultado_anual;
			});

			newpostulante.resultados = resultados;
			newpostulante.mayor_anio = mayor_anio;
			newpostulante.anios = anios;
			
		   return newpostulante;
		}

	});
	
  return Postulante;
});