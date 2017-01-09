(function() {
    'use strict';

    angular.module('item-app')
        .factory('DataVirtSrvc', Service);

    Service.$inject = ['$resource','$base64'];

    function Service($resource, $base64) {
        return $resource('jdv/odata/org/OrgData.OrgData?$format=json', {}, {
            get: {
                method: 'GET',
                headers: {
                    Authorization: 'Basic ' +
                        $base64.encode('teiidUser' + ':' + '1password#')
                }
            }
        });
    }
})();
