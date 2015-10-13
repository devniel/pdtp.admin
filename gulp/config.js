'use strict'; 

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'styles': {
    'src' : 'app/styles/**/*.scss',
    'dest': 'C:/Pon.de.tu.parte/public/assets/admin/css',
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'C:/Pon.de.tu.parte/public/assets/admin/js'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'C:/Pon.de.tu.parte/public/assets/admin/images'
  },

  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'C:/Pon.de.tu.parte/public/assets/admin/fonts'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/views/*.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/js'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': 'C:/Pon.de.tu.parte/public/assets/admin/',
    'options': {}
  },

  'dist': {
    //'root'  : 'build'
    'root'    : 'C:/Pon.de.tu.parte/public/assets/admin'
  },

  'browserify': {
    'entries'   : ['./app/js/main.js'],
    'bundleName': 'main.js',
    'prodSourcemap' : false
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
