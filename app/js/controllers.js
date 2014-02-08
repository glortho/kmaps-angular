var subjectsControllers = angular.module('subjectsControllers', [
  'services.breadcrumbs'
]);

subjectsControllers.controller('SubjectsCtrl', ['$scope', 'breadcrumbs', '$routeParams', '$http',
  function($scope, breadcrumbs, $routeParams, $http) {
    $scope.subject = '';
    $scope.breadcrumbs = breadcrumbs;
    if( $routeParams.subjectId ) {

      $http.get('http://subjects.kmaps.virginia.edu/features/' + $routeParams.subjectId + '.json').success(function(data) {
        $scope.subject = data.feature;
      });

      $http.get('http://subjects.kmaps.virginia.edu/features/' + $routeParams.subjectId + '/children.json').success(function(data) {
        $scope.children = data.features;
      });
    } else {
      $scope.subject = {header: 'Root', descriptions: [{ title: 'All nodes' }]};
      $http.get('http://subjects.kmaps.virginia.edu/features.json').success(function(data) {
        $scope.children = data.features;
      });
    }
  }
]);
