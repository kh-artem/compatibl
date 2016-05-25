'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');

gulp.task('default', ['vendorCss', 'vendorJS', 'appCss', 'appJS']);

gulp.task('watch', function(){
    gulp.watch('./app/assets/less/**/*.less', ['less']);
});

gulp.task('less', function(){
    gulp.src('./app/assets/less/**/*.less')
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'))
});

gulp.task('vendorCss', function(){
    gulp.src(['./app/bower_components/bootstrap.css'])
        .pipe(cssmin())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('vendorJS', function(){
    gulp.src(['./app/bower_components/angular/angular.js'])
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('appCss', function(){
   gulp.src('./app/assets/css/**/*.css')
       .pipe(concat('app.css'))
       .pipe(gulp.dest('./dist'))

});

gulp.task('appJS', function(){
    gulp.src('./app/logic/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
});


//gulp.task('cssMin', function(){
//   gulp.src('./app/assets/css/**/*.css')
//       .pipe(cssmin())
//       .pipe(concat('app.css'))
//       .pipe(gulp.dest('./dist'))
//
//});
