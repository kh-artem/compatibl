(function (angular, app) {
    'use strict';
    app.directive('tableDirective', tableDirective);

    tableDirective.$inject = [];

    function tableDirective(){
        return{
            restrict:'E',
            link: function(scope, element, attr){
                var table = angular.element(document.getElementsByTagName('table'));
                table.addClass('table table-bordered');
            },
            scope: {
              data: '='
            },
            replace: true,
            template:'<table><thead><tr><th>Color Name</th><th>Color</th></tr></thead>' +
            '<tbody><tr ng-repeat="items in data.colorsArray"><td>{{items.colorName}}</td><td style="background-color:{{items.hexValue}}"></td></tr></tbody></table>'
        }
    }
})(window.angular,window.angular.module('tableApp'));

