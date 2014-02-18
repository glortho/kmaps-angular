var subjectsApp = angular.module('subjectsApp', [
  'ngRoute',
  'subjectsControllers',
  'subjectsApp.services'
]);
 
subjectsApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
      .when('/subjects/:subjectId', {
        templateUrl: 'partials/subjects-detail-list.html',
        controller: 'SubjectsCtrl',
        resolve: {
          subject: function(getSubject) {
            return getSubject();
          },
          children: function(getChildren) {
            return getChildren();
          }
        }
      })
      .when('/subjects', {
        templateUrl: 'partials/subjects-detail-list.html',
        controller: 'SubjectsHomeCtrl',
        resolve: {
          home: function(getRoots) {
            return getRoots();
          }
        }
      })
      .otherwise({
        redirectTo: '/subjects'
      });
  }
]);

subjectsApp.run(['$rootScope', '$http', '$angularCacheFactory', function($root, $http, $angularCacheFactory) {
	$root.$on('$routeChangeStart', function(e, curr, prev) { 
		if (curr.$$route && curr.$$route.resolve) {
			// Show a loading message until promises are not resolved
			$root.progress = 'progress';
		}
	});
	$root.$on('$routeChangeSuccess', function(e, curr, prev) { 
		// Hide loading message
		$root.progress = '';
	});
	$root.$on('$routeChangeError', function(e, curr, prev) { 
		// Hide loading message
		$root.progress = '';
	});

  $angularCacheFactory('defaultCache', {
      maxAge: 900000, // Items added to this cache expire after 15 minutes.
      cacheFlushInterval: 6000000, // This cache will clear itself every hour.
      deleteOnExpire: 'aggressive', // Items will be deleted from this cache right when they expire.
      storageMethod: 'localStorage'
  });

  $http.defaults.cache = $angularCacheFactory.get('defaultCache');
}]);
