(function() {
    'use strict';

    angular.module('item-app')
        .controller('LeafletCtrl', Controller);

    Controller.$inject = ['$scope', '$log', 'DataVirtSrvc'];

    function Controller($scope, $log, DataVirtSrvc) {

        $scope.reload = function() {
            activate();
        };

        $scope.center = {
            lat: 37,
            lng: -100,
            zoom: 5
        }

        function activate() {
            $scope.markers = [];
            $scope.displayMarkers = [];

            DataVirtSrvc.get(function(res) {
                angular.forEach(res.d.results, function(result) {

                    var marker = {
                        org: result.org,
                        rating: result.rating,
                        id: result.id,
                        lng: parseFloat(result.lon),
                        lat: parseFloat(result.lat),
                        title: result.name,
                        message: result.description,
                        draggable: false
                    }
                    $scope.markers.push(marker);
                });

                $scope.displayedMarkers = $scope.markers;
            });
        }

        activate();

    }
})();
