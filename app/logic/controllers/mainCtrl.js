(function (angular, app) {
    'use strict';
    app.controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$rootScope','tableService'];

    function mainCtrl($rootScope, tableService){
        var Main = this;

        $rootScope.$on('updateService', function (event, data) {
            Main.data = data;
        })
    }
})(window.angular, window.angular.module('tableApp'));
