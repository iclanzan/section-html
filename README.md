section-html
============

This is a plugin for [Section, a static site generator](http://section.iclanzan.com), which processes html underscore templates.

## Getting Started
This plugin requires the `~0.1.0` version of the [grunt-section](https://github.com/iclanzan/grunt-section) plugin.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. You may install this plugin with this command:

```shell
npm install section-html --save
```

## Options
This plugin introduces a number of new options that can be set on the *grunt-section* configuration object inside the `Gruntfile.js` file. Here’s a simple example of how that file might look like:

```js
grunt.initConfig({
  section: {
    target: {
      options: {
        template: 'path/to/template.html'
      },
      src: 'input/directory/',
      dest: 'output/directory/'
    },
  },
});
```

### `template` (required)
type: `String`
default: `undefined`

The path to an underscore template file must be provided.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### v0.1.0
Initial version
