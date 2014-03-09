/*
 * grunt-dump-dir
 * https://github.com/bpampuch/grunt-dump-dir
 *
 * Copyright (c) 2014 Bartek Pampuch
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    dump_dir: {
      flat_directory: {
        options: {
        },
        files: {
          'tmp/flat.js': ['test/flatStructure/*'],
        }
      },
      flat_directory_with_root: {
        options: {
          rootPath: 'test/flatStructure'
        },
        files: {
          'tmp/flat2.js': ['test/flatStructure/*'],
        },
      },
      custom_pre: {
        options: {
          rootPath: 'test/flatStructure',
          pre: 'var variable = '
        },
        files: {
          'tmp/pre.js': ['test/flatStructure/*'],
        },
      },
      nlevel_directory: {
        options: {
        },
        files: {
          'tmp/nlevel.js': ['test/nLevelStructure/**/*'],
        },
      },
      nlevel_directory_with_root: {
        options: {
          rootPath: 'test/nLevelStructure'
        },
        files: {
          'tmp/nlevel2.js': ['test/nLevelStructure/**/*'],
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'dump_dir', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
