'use strict';

/* Controllers */

var MovieAppControllers = angular.module("MovieAppControllers", []);

MovieAppControllers.controller('MovieController', function ($scope, getMovies) {
    $scope.ShowList = true;
    getMovies.getAllMovies().then(function (res) {
        $scope.movies = (JSON.parse(res.data)).Search;
    });
  
    $scope.ShowDetails = function (movie) {

        if ($scope.ShowList) {
            getMovies.getEachMovies(movie.imdbID).then(function (res) {
                $scope.movie = JSON.parse(res.data);
                $scope.ShowList = !$scope.ShowList;
            });
        } else  $scope.ShowList = !$scope.ShowList;
       
    };
});

