'use strict';

var appModule = angular.module('app', ['app.main', 'ngNewRouter']);

appModule.controller('AppController', ['$router', AppController]);

function AppController($router) {
	
	$router.config([
		{path: '/', component: 'main'}
	]);
	
}