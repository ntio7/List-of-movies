'use strict';

/* Controllers */

var MovieAppControllers = angular.module("MovieAppControllers", []);

MovieAppControllers.controller('MovieController', function ($scope, getMovies) {
    $scope.ShowList = true;
    getMovies.getAllMovies().then(function (res) {
        $scope.movies = (JSON.parse(res.data)).Search;
        let mdata = JSON.parse(res.data);

    });
  
    $scope.ShowDetails = function (movie) {

        $scope.ShowList = !$scope.ShowList;
        if (!$scope.ShowList) {
            getMovies.getEachMovies(movie.imdbID).then(function (res) {
                let movie = JSON.parse(res.data);
                $scope.movie = movie;
            });
        }
    };
});

