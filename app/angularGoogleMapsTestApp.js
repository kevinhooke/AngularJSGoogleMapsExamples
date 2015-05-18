'use strict';

var app = angular.module('angularGoogleMapsTestApp', ['uiGmapgoogle-maps']);
    var marker1 = {id: 1, latitude: 37.7699298, longitude: -122.40};
    var marker2 = {id: 2, lat: 37.7699298, lng: -122.45};
    var marker3 = {id: 3, lat: 37.7699298, lng: -122.46};
    
app.controller('angularGoogleMapCtrl', function ($scope) {

    $scope.map = {center: {latitude: 37.7699298, longitude: -122.4469157}, zoom: 12};
    $scope.markers = [];

    //even though 3 markers are added to the markers array, only one is diplayed?
    $scope.markers[0] = marker1;
    $scope.markers[1] = marker2;
    $scope.markers[2] = marker3;

    $scope.toggleAddAndRemoveMarkers = function () {
        if ($scope.markers.length > 0) {
            $scope.markers = [];
        }
        else {
            $scope.markers[0] = marker1;
            $scope.markers[1] = marker2;
            $scope.markers[2] = marker3;
        }
        ;

    }

});