var subjectsApp = angular.module('subjectsApp', [
  'ngRoute',
  'subjectsControllers'
]);
 
subjectsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/subjects', {
        templateUrl: 'partials/subjects-list.html',
        controller: 'SubjectsListCtrl'
      }).
      when('/subjects/:subjectId', {
        templateUrl: 'partials/subject-detail.html',
        controller: 'SubjectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/subjects'
      });
  }
]);
