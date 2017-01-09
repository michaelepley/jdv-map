(function() {
    'use strict';

    angular.module('item-app')
        .controller('ItemSaveCtrl', Controller);

    Controller.$inject = ['$scope', '$uibModalInstance', 'item'];

    function Controller($scope, $uibModalInstance, item) {
        $scope.item = item;

        $scope.ok = function() {
            $uibModalInstance.close($scope.item);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
