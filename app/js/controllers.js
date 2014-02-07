var subjectsControllers = angular.module('subjectsControllers', []);

subjectsControllers.controller('SubjectsListCtrl', ['$scope', 'Subjects', function($scope, Subjects) {
  Subjects.query(function(data) {
    $scope.subjects = data.features;
  });
  //$scope.orderProp = 'header';
}]);

subjectsControllers.controller('SubjectDetailCtrl', ['$scope', '$routeParams', 'Subjects',
  function($scope, $routeParams, Subjects) {
    Subjects.get({subjectId: 'features/' + $routeParams.subjectId}, function(data) {
      $scope.subject = data.feature;
    });

    Subjects.get({subjectId: 'features/' + $routeParams.subjectId + '/children'}, function(data) {
      $scope.children = data.features;
    });
  }
]);
