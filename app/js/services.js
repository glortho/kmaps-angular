var subjectsServices = angular.module('subjectsServices', ['ngResource']);
 
subjectsServices.factory('Subjects', ['$resource',
  function($resource){
    return $resource('http://subjects.kmaps.virginia.edu/:subjectId.json', {}, {
      query: {
        method: 'GET', 
        params: {subjectId: 'features'}, 
        isArray: true
      }
    });
  }]);
