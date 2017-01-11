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
            $scope.items = [];
            $scope.displayItems = [];
            $scope.markers = [];

            DataVirtSrvc.get(function(res) {
                angular.forEach(res.d.results, function(result) {
                    var item = {
                        id: result.id,
                        description: result.description,
                        title: result.name,
                        latitude: result.lat,
                        longitude: result.lon,
			rating: result.rating,
			org: result.org
                    }
                    $scope.items.push(item);

                    var marker = {
                      lng: parseFloat(result.lon),
                      lat: parseFloat(result.lat),
                      title: result.name,
                      message: result.description,
                      draggable: false
                    }
                    $scope.markers.push(marker);
                });

                $scope.displayedItems = $scope.items;
            });
        }

        activate();

    }
})();
