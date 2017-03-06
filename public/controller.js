var app = angular.module('myMod');

app.controller('myController', function($scope, $http) {

  $http({
    method: 'GET',
    url: '/bruleSayings'
  }).then(function successCallback(response) {
    $scope.bruleSayings = response.data;
  });

  $http({
    method: 'GET',
    url: 'randomSaying'
  }).then(function successCallback(response) {
    $scope.randomSaying = response.data
  });

});
