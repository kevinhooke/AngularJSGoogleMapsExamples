'use strict';

var app = angular.module('angularGoogleMapsTestApp', ['uiGmapgoogle-maps']);
    //one initial marker
    var marker1 = {id: 1, latitude: 37.769, longitude: -122.44};

    var markersDisplayed = 0;
    var markersAdded = 0;
    var maxMarkersToDisplay = 3;
    var increment = 0.02;
    var startingLongitude = -122.44;
    var startingLatitude = 37.769;
    
app.controller('angularGoogleMapCtrl', function ($scope) {

    $scope.map = {center: {latitude: 37.7699298, longitude: -122.4469157}, zoom: 12};
    $scope.markers = [];
    
    $scope.removeMarkers = function () {
        $scope.markers = [];
        markersDisplayed = 0;
        markersAdded = 0;
    }

    $scope.toggleAddAndRemoveMarkers = function () {

        //if 3 displayed already, pop first one off of the array
        if(markersDisplayed >= 3) {
            markersDisplayed--;
            $scope.markers.shift();
        }
        //addd a new position
        markersDisplayed++;
        $scope.markers.push(
            {
                id: markersAdded,
                latitude: startingLatitude, 
                longitude: (startingLongitude + (markersAdded * increment))
            });
        markersAdded++;
        };

});