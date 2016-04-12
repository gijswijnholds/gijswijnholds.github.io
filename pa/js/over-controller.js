/**
 * Controls all other Pages
 */
angular.module('wijnholds')

.controller('DienstenCtrl', function ($scope, $http) {
  console.log("Diensten Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

  $http.get('js/diensten-data.json').then(function(data) {
    $scope.process = data.data;
    console.log(data);
  });
});
