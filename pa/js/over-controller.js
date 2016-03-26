/**
 * Controls all other Pages
 */
angular.module('wijnholds')

.controller('OverCtrl', function ($scope, $http) {
  console.log("Over Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

  $http.get('js/woningen-data.json').then(function(data) {
    $scope.members = data.data;
    console.log(data);
  });
});
