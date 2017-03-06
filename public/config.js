var app = angular.module('myMod');

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/bruleSayings', {
      controller: 'myController',
      templateUrl: 'bruleSayings.html'
    })
    .when('/randomSaying', {
      controller: 'myController',
      templateUrl: 'randomSaying.html'
    });

    $locationProvider.hashPrefix('');
});
