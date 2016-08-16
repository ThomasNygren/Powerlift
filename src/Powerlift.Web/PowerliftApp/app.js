"use strict";
var React = require('react');
var react_dom_1 = require('react-dom');
var movies = ['Star Wars', 'The Matrix', 'Forrest Gumps'];
var App = function (_a) {
    var movies = _a.movies;
    return (React.createElement("ul", null, movies.map(function (movie) { return React.createElement("li", null, movie); })));
};
react_dom_1.render(React.createElement(App, {movies: movies}), document.getElementById('PowerliftApp'));
