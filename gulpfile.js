var livereload= require('gulp-livereload');
// var livereload= require('./node_modules/gulp-livereload');

var  gulp= require('gulp');
// gulp plugin to minify HTML.
const htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');



function minifyhtml() {
  return gulp
    .src('src/ToDoList.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
    // to reload for end each function in ali video
    // .pipe(livereload());
}

function movecss() {
  return gulp
    .src(['src/ToDoList.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // for concat each css page together
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build'));
}

function moveicomoon() {
  return gulp
    .src(['./src/icomoon'])
    .pipe(gulp.dest('build'));
}

function moveicomoonfils() {
  return gulp
    .src(['./src/icomoon/fonts','./src/icomoon/style.css'])
    .pipe(gulp.dest('./build/icomoon'));
}
function moveicomoonfilsmore() {
  return gulp
    .src(['./src/icomoon/fonts/icomoon.eot','./src/icomoon/fonts/icomoon.svg','./src/icomoon/fonts/icomoon.ttf','./src/icomoon/fonts/icomoon.woff'])
    .pipe(gulp.dest('./build/icomoon/fonts'));
}
exports.default = function () {
  require("./server.js")
  livereload.listen();
  gulp.watch( ["src/ToDoList.html"] , parallel(minifyhtml,movecss,moveicomoon,moveicomoonfils,moveicomoonfilsmore) );
}


// gulp.watch( "http://localhost:1337/" );



