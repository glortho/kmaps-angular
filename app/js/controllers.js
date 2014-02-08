var subjectsControllers = angular.module('subjectsControllers', []);

subjectsControllers.controller('SubjectsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://subjects.kmaps.virginia.edu/features.json').success(function(data) {
    $scope.subjects = data.features;
  });
  //$scope.orderProp = 'header';
}]);

subjectsControllers.controller('SubjectDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://subjects.kmaps.virginia.edu/features/' + $routeParams.subjectId + '.json').success(function(data) {
      $scope.subject = data.feature;
    });

    $http.get('http://subjects.kmaps.virginia.edu/features/' + $routeParams.subjectId + '/children.json').success(function(data) {
      $scope.children = data.features;
    });
  }
]);
