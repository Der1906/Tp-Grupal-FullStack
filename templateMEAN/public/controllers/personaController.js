'use strict';

angular.module('personaController', ['personaService'])

.controller({
	'PersonaController': function($scope, $http, PersonaService) {
		console.log('PersonaController');

		function getPersonSuccessResponse(response) {
			//console.log("OK", response[0].nombre);
			$scope.personas = response;
		};

		function getPersonErrorResponse(response) {
			console.log("ERROR");
		};

		function addPersonSuccessResponse(response) {
			console.log("OK", response);
		};

		function addPersonErrorResponse(response) {
			console.log("ERROR");
		};

		function initializacion() {
			$scope.newPersona = {};
			$scope.personas = {};
			$scope.selected = false;

			PersonaService.getPerson().then(getPersonSuccessResponse, getPersonErrorResponse);
		};		


		initializacion();

		$scope.registrarPersona = function () {
			console.log('ssss',$scope.newPersona)
			PersonaService.addPerson($scope.newPersona).then(addPersonSuccessResponse, addPersonErrorResponse);
		}


		//PersonaService.getPerson().then(getPersonSuccessResponse, getPersonErrorResponse);
		//PersonaService.addPerson($scope.newPersona).then(addPersonSuccessResponse, addPersonErrorResponse);

		/*$scope.newPersona = {};
		$scope.personas = {};
		$scope.selected = false;

		$http.get('/api/persona').success(
			function(data) {
				$scope.personas = data;
			}
		)

		$scope.registrarPersona = function() {
			$http.post('/api/persona', $scope.newPersona)
				.success(
					function(data) {
						$scope.newPersona = {};
						$scope.personas = data;
					})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		};


		$scope.modificarPersona = function(newPersona) {
			$http.put('/api/persona' + $scope.newPersona._id, $scope.newPersona)
				.success(function(data) {
					$scope.newPersona = {};
					$scope.personas = data;
					$scope.selected = false;
				})
			error(function(data) {
				console.log('Error: ' + data);
			});
		};

		// Función que borra un objeto persona conocido su id
		$scope.borrarPersona = function(newPersona) {
			$http.delete('/api/persona/' + $scope.newPersona._id)
				.success(function(data) {
					$scope.newPersona = {};
					$scope.personas = data;
					$scope.selected = false;
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		};

		// Función para coger el objeto seleccionado en la tabla
		$scope.selectPerson = function(persona) {
			$scope.newPersona = persona;
			$scope.selected = true;
			console.log($scope.newPersona, $scope.selected);
		};*/

	}

});