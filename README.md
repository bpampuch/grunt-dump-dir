# grunt-dump-dir [![Build Status](https://secure.travis-ci.org/bpampuch/grunt-dump-dir.png?branch=master)](http://travis-ci.org/bpampuch/grunt-dump-dir) [![NPM version](https://badge.fury.io/js/grunt-dump-dir.png)](http://badge.fury.io/js/grunt-dump-dir)

> Grunt task to dump a dictionary (all files and their content) into a JSON object

grunt-dump-dir lets you select a directory and generates a JSON representation with keys being
filepaths and values - their content encoded in base64.

The main use case for this plugin is *virtual filesystem* generation for browserify projects.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dump-dir --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dump-dir');
```

### Dump Dir task

In your project's Gruntfile, add a section named `dump_dir` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dump_dir: {
    options: {
      // options
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.rootPath
Type: `String`
Default value: ``

A string value which is trimmed from physical path when JSON keys are created.

#### options.pre
Type: string
Default value: `module.exports = `

String which prefixes generated JSON. Should be used to specify the assignment. The default `module.exports = `
is not very functional unless the file is used as input to browserify.

Usually you should set it to something like `var myVariable = `

### Usage Examples

#### Default Options
If you don't specify `options.rootPath`:

```js
grunt.initConfig({
  dump_dir: {
    options: {
    },
    files: {
      'dest.js': [ 'directory/**/*' ]
    },
  },
});
```

the output will contain full-path keys:

```js
{
 "directory/filename.txt": "base64-encoded-content",
 "directory/filename2.jpg": "base64-encoded-content"
}
```

#### RootPath
If `rootPath` is provided:

```js
grunt.initConfig({
  dump_dir: {
    options: {
      'rootPath': 'directory/'
    },
    files: {
      'dest.js': [ 'directory/**/*' ]
    },
  },
});
```

we'll get the following JSON:

```js
{
 "filename.txt": "base64-encoded-content",
 "filename2.jpg": "base64-encoded-content"
}
```
