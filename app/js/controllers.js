var subjectsControllers = angular.module('subjectsControllers', []);

subjectsControllers.controller('SubjectsHomeCtrl', ['$scope', 'home',
  function($scope, home) {
    $scope.subject = {header: 'Root', descriptions: [{ title: 'All nodes' }]};
    $scope.children = home.data.features;
  }
]);

subjectsControllers.controller('SubjectsCtrl', ['$scope', 'subject', 'children',
  function($scope, subject, children) {
    $scope.subject = subject.data.feature;
    $scope.children = children.data.features;
  }
]);
