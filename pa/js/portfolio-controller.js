/**
 * Controls the Portfolio
 */
angular.module('wijnholds')

.controller('PortfolioCtrl', function ($scope, $http, $routeParams) {
  console.log("Portfolio Controller reporting for duty.");

  $http.get('js/' + $routeParams.type + '-data.json').then(function(data) {
    $scope.portfolio = data.data;
    $scope.name = $routeParams.type;
    console.log($scope.portfolio);
  });

});
