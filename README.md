AngularJSGoogleMapsExamples
===========================
In looking for a AngularJS library for Google Maps API that I could use in my app, I started looking
at Angular Google Maps (http://angular-ui.github.io/angular-google-maps/#!/) but struggled to work with 
the api to add markers to the map dynamically and get the map to refresh. 

After spending a few hours to try and get the API to do what I wanted, I looked at other alternatives, and 
found ngMap (https://ngmap.github.io/) which provides a simpler approach with the majority of what you 
need declaritively with little need for additional JavaScript code.

This app has two pages, one that uses Angular Google Maps (AngularGoogleMapsTest.html), and one using
ngMap (ngMapTest.html), to create and display markers on a map.

What I was specifically looking for was the ability to dynamically create and remove markers. While Angular
Google Maps seems to handle display of static models of data well, ngMap seems to do a better job of watching
your data in $scope and automatically updating without any other additional code, so in this case ngMap
seems well suited for what I'm looking for.
