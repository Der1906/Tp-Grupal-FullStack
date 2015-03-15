'use strict';

angular.module('personaService', [])
	.factory('PersonaService', function($http) {

		var PersonaService = function() {

			this.getPerson = function() {

				var getPersonPromise = $http({
					method: 'GET',
					url: '/api/persona',
					withCredentials: true
				}).then(function(response) {
					console.log('persona',response);
					var persons = response.data;
					return persons;
				});
				return getPersonPromise;
			};

			this.addPerson = function() {
				var addPersonPromise = $http({
					method: 'POST',
					url: '/api/persona',
				}).then(function(response) {
					var persons = response.data;
					return persons;
				});
				return addPersonPromise;
			};



		};

		return new PersonaService();

	});

/*.factory('PersonaService', function($http) {
	console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
	/*var PersonaService = function() {

		this.getPerson = function(){
			
			var getPerson = $http({
				method: 'GET',
				url: '/api/persona',
				withCredentials: true
			}).then(function(response) {
				var persons = response.data;				
				return persons;
			});
			return getPerson;
		};
	};*/

/*var PersonaService = function() {

	this.getPerson = function() {
		var getPerson = $http({
			method: 'GET',
			url: '/api/persona',
			withCredentials: true
		}).then(function(response) {
			return response.data;
		});
		return getPerson;
	};

	/*this.addPerson = function() {
		var add = $http({
			method: 'POST',
			url: '/api/persona',
		}).then(function(response) {
			return response.data;
		});
		return add;
	};*/

/*};
return PersonaService();*/
//});