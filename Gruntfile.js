/*
 * grunt-npm-install
 * https://github.com/iclanzan/grunt-npm-install
 *
 * Copyright (c) 2013 Sorin Iclanzan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/**.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    section: {
      options: {
        template: 'test/template.html'
      },
      main: {
        src: 'test/fixtures/',
        dest: 'tmp/output/'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.event.on(['section', 'file'], function (file, node) {
    node = node.addChild({body: grunt.file.read(file.src)});
    node.myAwesomeProperty = 'is in Heaven';
    file.discard = true;
  });

  grunt.event.on(['section', 'done'], function (root) {
    grunt.section = root;
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-section');


  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'section',
    'nodeunit'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
