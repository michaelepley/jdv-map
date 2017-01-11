(function() {
    'use strict';

    angular.module('item-app')
        .factory('DataVirtSrvc', Service);

    Service.$inject = ['$resource','$base64'];

    function Service($resource, $base64) {
        return $resource('/odata/POI_VDB/POI_Merged.poi_merged?$format=json', {}, {
            get: {
                method: 'GET',
                headers: {
                    Authorization: 'Basic ' +
                        $base64.encode('teiidUser' + ':' + 'Redhat1!')
                }
            }
        });
    }
})();
