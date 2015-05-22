AngularJSGoogleMapsExamples
===========================
In looking for a AngularJS library for Google Maps API that I could use in my app, I started looking
at Angular Google Maps (http://angular-ui.github.io/angular-google-maps/#!/) but struggled to work with 
the api to add markers to the map dynamically and get the map to refresh. Part of my struggle
to get the API to do what I wanted I think was due to misunderstandings about how variable scope and
$scope work in AngularJS, but after putting together these two short examples I worked out
what all my issues were.

This app has two pages, one that uses Angular Google Maps (AngularGoogleMapsTest.html / 
http://angular-ui.github.io/angular-google-maps/#!/), and one using
ngMap (ngMapTest.html / https://ngmap.github.io/), to create and display markers dynamically on a map.


