/**
 * Controls the Portfolio
 */
angular.module('wijnholds')

.controller('PortfolioCtrl', function ($scope, $http, $routeParams) {
  console.log("Portfolio Controller reporting for duty.");

  $http.get('js/' + $routeParams.type + '-data.json').then(function(data) {
    $scope.portfolio = data.data;
    console.log($routeParams.type);
    console.log(data);
  });

});
