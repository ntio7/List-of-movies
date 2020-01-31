'use strict';

/* Controllers */

var MovieAppControllers = angular.module("MovieAppControllers", []);

MovieAppControllers.controller('MovieController', function ($scope, getMovies) {
    getMovies.getAllMovies().then(function (res) {
        $scope.movies = [];
        let mdata = JSON.parse(res.data);
        $.each((mdata.Search), function (i, field) {
            let movieID = '';
            movieID = field.imdbID;
            getMovies.getEachMovies(movieID).then(function (res) {
                let movie = JSON.parse(res.data);
                $scope.movies.push(movie);
                console.log($scope.movies);

            });
        });
    });
  
    $scope.searchYear = function (n, a, d) {        ;
        getMovies.getAllMovies().then(function (res) {
            $scope.movies = [];
            $.each((res.data.Search), function (i, field) {
                let movieID = '';
                movieID = field.imdbID;
                getMovies.getEachMovies(movieID).then(function (res) {
                    let movie = res.data;
                    let movies = [];
                    movies.push(movie);
                    $.each(movies, function (i, field2) {
                        let year = field2.Year;
                        if (year.startsWith(n)) {
                            $scope.movies.push(field2);
                        }
                    });
                });
            });
        });
    };

    

});

