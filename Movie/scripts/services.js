'use strict';

/* Services */

var MovieAppServices = angular.module('MovieAppServices', ['ngResource']);

MovieAppServices.factory('getMovies', function ($http) {
    var factory = {};

    factory.getAllMovies = function () {
        return $http.get("https://localhost:44391/api/movie/");
    };

    factory.getEachMovies = function (id) {
        return $http.get("https://localhost:44391/api/movie/" + id);
    };

    return factory
});