angular.module('foodZen', ['foodZen.home', 'ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'HomeController'
  });
});