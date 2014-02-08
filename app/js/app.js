var subjectsApp = angular.module('subjectsApp', [
  'ngRoute',
  'subjectsControllers'
]);
 
subjectsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/subjects/:subjectId?', {
        templateUrl: 'partials/subjects-detail-list.html',
        controller: 'SubjectsCtrl'
      })
      .otherwise({
        redirectTo: '/subjects'
      });
  }
]);
