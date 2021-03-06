/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module altg {
  'use strict';

  angular.module('altg', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });
  
}
