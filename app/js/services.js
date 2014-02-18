var subjectsServices = angular.module('subjectsApp.services', []);
 
subjectsServices.factory('getSubject', ['$route', '$http',
  function( $route, $http ) {
    return function() {
      return $http({
        method: 'get',
        url: 'http://subjects.kmaps.virginia.edu/features/' + $route.current.params.subjectId + '.json',
        cache: true
      })
      .success(function(data) {
        return data;
      });
    };
  }
]);

subjectsServices.factory('getChildren', ['$route', '$http',
  function ( $route, $http ) {
    return function() {
      return $http({
        method: 'get',
        url: 'http://subjects.kmaps.virginia.edu/features/' + $route.current.params.subjectId + '/children.json',
        cache: true
      })
      .success(function(data) {
          return data;
      });
    };
  }
]);

subjectsServices.factory('getRoots', ['$route', '$http',
  function ( $route, $http ) {
    return function() {
      return $http({
        method: 'get',
        url: 'http://subjects.kmaps.virginia.edu/features.json'
      })
      .success(function(data) {
          return data;
      });
    };
  }
]);
