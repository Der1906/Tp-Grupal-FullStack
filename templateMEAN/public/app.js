'use strict';

/*Defino el modulo raiz 
* En el index van a encontrar un ng-app="prodeApp"
* Nota: Acostumbrencen a usar camelcase 
* Ademas de ser una buena practica Angular tiene su  propias reglas para interpretar las reglas camelcase
*/


/*
* Defino el modulo y entre [] le inyecto los modulos que voy a usar
* Esto se hace mediante el patron de Inyeccion de Dependencia (DI)
*/

var prodeApp = angular.module('prodeApp', ['ngRoute', 'ngSanitize', 'personaController']);

/*
* Se hace uso del modulo ngRoute el cual nos permite crear rutas profundas en nuestra aplicación 
* e intercambiar vistas dependiendo de la ruta
*/
prodeApp.config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/crud', {
        templateUrl: 'views/persona.html',
        controller: 'PersonaControler'
    }).
    otherwise({
        redirectTo: '/crud'
    });
}]);


