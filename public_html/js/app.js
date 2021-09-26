'use strict';
/* App Module */
var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'
]);

helloWorldApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl'
        }).when('/customer', {
            templateUrl: 'partials/customer.html',
            controller: 'CustomerCtrl'
        }).when('/addCustomer', {
            templateUrl: 'partials/newCustomer.html',
            controller: 'AddCustomerCtrl'
        }).when('/addedCustomer/:customer/:city', {
            templateUrl: 'partials/addedCustomer.html',
            controller: 'AddedCustomerCtrl'
        }).when('/blogPost/:id', {
            templateUrl: 'partials/blogPost.html',
            controller: 'BlogViewCtrl'
        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);