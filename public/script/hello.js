"use strict";

var helloApp = angular.module('helloApp', ['ngRoute']);

helloApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Hello', {
                templateUrl: 'partials/hello.html',
                controller: 'HelloController'
            }).
            when('/Everybody', {
                templateUrl: 'partials/everybody.html',
                controller: 'EverybodyController'
            }).
            otherwise({
                redirectTo: '/Hello'
            });
    }
]);

helloApp.controller('HelloController', function($scope) {
    $scope.message = 'Hi, Dr. Nick!';
});

helloApp.controller('EverybodyController', function($scope) {
    $scope.message = 'Hello Everybody!';
});