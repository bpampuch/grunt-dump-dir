/*
 * grunt-dump-dir
 * https://github.com/bpampuch/grunt-dump-dir
 *
 * Copyright (c) 2014 Bartek Pampuch
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('dump_dir', 'Grunt task to dump a dictionary (all files and their content) into a JSON object', function() {
    var options = this.options({ rootPath: '' });

    this.files.forEach(function(f) {
      var result = {};

      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return !grunt.file.isDir(filepath);
        }
      }).forEach(function(filepath) {
        var key = filepath;

        if (options.rootPath) {
          if (filepath.indexOf(options.rootPath) === 0) {
            key = filepath.substring(options.rootPath.length);
          } else {
            grunt.warn('rootPath (' + options.rootPath + ') is not root for ' + filepath);
          }
        }
        result[key] = new Buffer(grunt.file.read(filepath)).toString('base64');
      });

      grunt.file.write(f.dest, JSON.stringify(result));
      grunt.log.writeln('File "' + f.dest + '" created.');
    });

  });
};
