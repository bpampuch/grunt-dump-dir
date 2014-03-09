'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dump_dir = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  flat_directory: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/flat.js');
    var expected = grunt.file.read('test/expected/flat.js');
    test.equal(actual, expected);

    test.done();
  },
  flat_directory_with_root: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/flat2.js');
    var expected = grunt.file.read('test/expected/flat2.js');
    test.equal(actual, expected);

    test.done();
  },
  custom_pre: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/pre.js');
    var expected = grunt.file.read('test/expected/pre.js');
    test.equal(actual, expected);

    test.done();
  },
  nlevel_directory: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/nlevel.js');
    var expected = grunt.file.read('test/expected/nlevel.js');
    test.equal(actual, expected);

    test.done();
  },
  nlevel_directory_with_root: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/nlevel2.js');
    var expected = grunt.file.read('test/expected/nlevel2.js');
    test.equal(actual, expected);

    test.done();
  }
};
