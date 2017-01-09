(function() {
    'use strict';

    angular.module('item-app')
        .config(Router);

    Router.$inject = ['$routeProvider'];

    function Router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
