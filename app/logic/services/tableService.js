(function (angular, app) {
    'use strict';
   app.factory('tableService', tableService);

    tableService.$inject = ['$http', '$rootScope'];

    function tableService($http, $rootScope){
        var Service = {};

            //GET DATA
            $http.get('assets/data/data.json').then(function(response){
                $rootScope.$broadcast('updateService', response.data);
            },function(error){
                console.log(error);
            });

        return Service;
    }

})(window.angular,window.angular.module('tableApp'));
