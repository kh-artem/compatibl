(function (angular) {
    'use strict';

    var app = angular.module('tableApp', []);


    // BOOTSTRAPING APP
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['tableApp']);
    });
})(window.angular);

