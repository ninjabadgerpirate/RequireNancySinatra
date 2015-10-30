/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var clean = require('gulp-clean');
var mainBowerFiles = require('main-bower-files');

gulp.task('clean-scripts', function () {
    return gulp.src('Lib/*.js', { read: false })
      .pipe(clean());
});

gulp.task('bower', ['clean-scripts'], function () {
    return gulp.src(mainBowerFiles(), {
        base: 'bower_components'
    })
      .pipe(gulp.dest('Lib'));
});

gulp.task("default", ['clean-scripts'], function () {
    var paths = {
        webroot: "./",
        bower: "./bower_components/",
        lib: "./Lib/"
    };

    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "sammy": "sammy/lib/sammy*.{js,map}",
        "jquery": "jquery/dist/jquery*.{js,map}",
        "require": "require/build/require*.{js,map}"
    }

    for (var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }
});