'use strict';

var app = angular.module('ngMapTestApp', ['ngMap']);

app.controller('ngMapCtrl', function ($scope) {

    //one initial marker
    var marker1 = {lat: 37.769, lng: -122.44};

    var markersDisplayed = 0;
    var markersAdded = 0;
    var maxMarkersToDisplay = 3;
    var increment = 0.02;
    var startingLongitude = -122.44;
    var startingLatitude = 37.769;

    $scope.positions = [];

    $scope.removeMarkers = function () {
        $scope.positions = [];
        markersDisplayed = 0;
        markersAdded = 0;
    }

    $scope.toggleAddAndRemoveMarkers = function () {

        //if 3 displayed already, pop first one off of the array
        if(markersDisplayed >= 3) {
            markersDisplayed--;
            $scope.positions.shift();
        }
        //addd a new position
        markersDisplayed++;
        $scope.positions.push(
            { 
                lat: startingLatitude, 
                lng: (startingLongitude + (markersAdded * increment))
            });
        markersAdded++;
        };

});
