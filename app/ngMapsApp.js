'use strict';

var app = angular.module('ngMapTestApp', ['ngMap']);

app.controller('ngMapCtrl', function ($scope) {

    //one initial marker
    var marker1 = {lat: 37.7699298, lng: -122.44};
    var marker2 = {lat: 37.7699298, lng: -122.45};
    var marker3 = {lat: 37.7699298, lng: -122.46};

    $scope.positions = [];
    $scope.positions[0] = marker1;
    $scope.positions[1] = marker2;
    $scope.positions[2] = marker3;

    $scope.toggleAddAndRemoveMarkers = function () {
        if ($scope.positions.length > 0) {
            $scope.positions = [];
        }
        else {
            $scope.positions[0] = marker1;
            $scope.positions[1] = marker2;
            $scope.positions[2] = marker3;
        }
        ;

    };

});
