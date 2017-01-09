(function() {
    'use strict';

    angular.module('item-app')
        .controller('LeafletCtrl', Controller);

    Controller.$inject = ['$scope', '$log', 'DataVirtSrvc'];

    function Controller($scope, $log, DataVirtSrvc) {

        $scope.reload = function() {
            $log.debug('reload called');
            $scope.result = DataVirtSrvc.get();
            $log.debug($scope.result);
        };

        $scope.markers = {
            mainMarker: {
                lat: 37,
                lng: -80,
                focus: true,
                title: 'Marker',
                message: 'Item message',
                draggable: false
            }
        }

        $scope.center = {
            lat: 37,
            lng: -80,
            zoom: 6
        }

        ////////////

        function activate() {}

        activate();
    }
})();
