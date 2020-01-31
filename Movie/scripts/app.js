'use strict';

/* app */

var MovieApp = angular.module("MovieApp", [
    'MovieAppServices',
    'MovieAppControllers'
]);


MovieApp.directive('headerApp', function(){
    return {
        templateUrl: 'Views/header.html'
    };
});

MovieApp.directive('movieListApp', function(){
    return {
        templateUrl: 'Views/moviesList.html',
        controller: 'MovieController'
    };
});




