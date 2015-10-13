'use strict';

var config  = require('../config');
var http    = require('http');
var express = require('express');
var gulp    = require('gulp');
var gutil   = require('gulp-util');
var morgan  = require('morgan');


var x = require("C:/Pon.de.tu.parte/server").server;

gulp.task('server', function() {

  try{
    x.listen(config.serverPort);
  }catch(e){
    console.error(e);
  }

});